var http = require('http')
var pool = require('./sql.js')

console.log("Listening")

//create a server object:
http.createServer(function (req, res) {
  //console.log("New request")
  //console.log(req.url)

  if (req.method === 'GET') {
    res.write(JSON.stringify({type:"error", message:"GET requests are not allowed"}))
    console.log("New request: GET --> rejected");
    res.end()
  }

  //curl -d '{"key1":"value1","key2":"value2"}' -X POST https://arma.cineafx.com/artillery-rangetable-creator/api
  if (req.method === 'POST') {
    var jsonString = '';

    req.on('data', function (data) {
      jsonString += data;
    });

    req.on('end', function () {
      console.log("New request: " + jsonString);

      handlePOST(JSON.parse(jsonString)).then( (data) => {
        res.write(JSON.stringify(data))
        res.end()
      }, (reason) => {
        let data = {type:"error", message:"Error in request"}
        res.write(JSON.stringify(data))
        res.end()
      })

    });
  }
}).listen(8000)


async function handlePOST(jsonObj) {
  let returnObj = {type:"error", message:"Error in request"}
  switch (jsonObj.type) {
    case "getArtyList":
      try {
        var result = await pool.query('SELECT id, name FROM arma_artillery.vehicles;')
        returnObj = {type:"getArtyList", data: result}
      } catch(err) {
        returnObj = {type:"error", message:"SQL error", err: err}
      }
      break;
    case "getCharges":
      try {
        var result = await pool.execute('SELECT chargeNR FROM arma_artillery.charges WHERE vehicleID = ?;', [parseInt(jsonObj.data.mortarID)])
        returnObj = {type:"getCharges", data: result}
      } catch(err) {
        returnObj = {type:"error", message:"SQL error", err: err}
      }
      break;
    case "getTable":
      try {

        let mortarID = parseInt(jsonObj.data.mortarID)
        let charges = parseInt(jsonObj.data.charges)
        let airResistanceEnabled = jsonObj.data.airResistanceEnabled

        let sqlString = `
          SELECT
            CAST(muzzleVelocity AS CHAR) AS 'muzzleVelocity',
            CAST(airFriction AS CHAR) AS 'airFriction',
            CAST(rangetableData.range AS CHAR) AS 'range',
            elevation,
            heightElevation,
            heightTimeDelta,
            timeOfFlight,
            crosswindDeg,
            headwindMeters,
            tailWindMeters,
            tempDec,
            tempInc,
            airDensDec,
            airDensInc
          FROM rangetableData
          WHERE ABS( muzzleVelocity - (
            SELECT ROUND(initSpeed * artilleryCharge, 2) AS 'muzzlevelocity'
            FROM vehicles
            LEFT JOIN charges
            ON vehicles.ID = charges.vehicleID
            WHERE vehicles.ID = ?
            AND chargeNR = ?
          ) ) < 0.00001
          AND (
          ABS( airFriction - (
            SELECT airFrictionIfUsed
            FROM vehicles
            LEFT JOIN charges
            ON vehicles.ID = charges.vehicleID
            WHERE vehicles.ID = ?
            AND chargeNR = ?
          ) ) < 0.00001
          XOR !?
          );
        `

        var result = await pool.execute(sqlString, [mortarID, charges, mortarID, charges, airResistanceEnabled])
        console.log(JSON.stringify(result[0]))
        returnObj = {type:"getTable", data: result}
      } catch(err) {
        returnObj = {type:"error", message:"SQL error", err: err}
      }
      break;
    default:

  }

  return returnObj
}
