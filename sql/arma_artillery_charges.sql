create table charges
(
    vehicleID       int(11) unsigned not null,
    chargeNR        int(11) unsigned not null,
    artilleryCharge float default 0  not null,
    primary key (vehicleID, chargeNR),
    constraint charges_vehicles_id_fk
        foreign key (vehicleID) references vehicles (id)
);

INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (1, 0, 0.35);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (1, 1, 0.7);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (1, 2, 1);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (2, 0, 0.35);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (2, 1, 0.7);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (2, 2, 1);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (3, 0, 0.58);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (3, 1, 0.72);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (3, 2, 0.85);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (3, 3, 1);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (4, 0, 0.2);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (4, 1, 0.4);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (4, 2, 0.6);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (4, 3, 0.8);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (4, 4, 1);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (5, 0, 0.35);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (5, 1, 0.7);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (5, 2, 1);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (6, 0, 0.35);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (6, 1, 0.7);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (6, 2, 1);
INSERT INTO arma_artillery.charges (vehicleID, chargeNR, artilleryCharge) VALUES (6, 3, 1.2512);