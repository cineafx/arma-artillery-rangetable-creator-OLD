var pool = require('./sql.js')

async function insertData () {
  let muzzleVelocity = 0
  let airFriction = 0 // -0.0001
  let dataArray = [
  ]

  console.log("Inserting " + dataArray.length + " lines...")
  try {
    let sqlString = `
      INSERT INTO rangetableData (
        muzzleVelocity,
        airFriction,
        rangetableData.range,
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
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);
    `
    for (row of dataArray) {
      let result = await pool.execute(sqlString, [muzzleVelocity, airFriction, row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11]])
    }
    return Promise.resolve(1)
  } catch(err) {
    console.error(Error(err));
  }
}

insertData().then( () => {
  console.log("Done")
  process.exit()
})
