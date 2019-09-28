create table vehicles
(
    id                int unsigned    not null
        primary key,
    name              varchar(255)    not null,
    airFrictionIfUsed float default 0 not null,
    initSpeed         float default 0 not null
);

INSERT INTO arma_artillery.vehicles (id, name, airFrictionIfUsed, initSpeed) VALUES (1, '[ACE] Mk6', -0.0001, 200);
INSERT INTO arma_artillery.vehicles (id, name, airFrictionIfUsed, initSpeed) VALUES (2, '[BAF] L16', -0.0001, 200);
INSERT INTO arma_artillery.vehicles (id, name, airFrictionIfUsed, initSpeed) VALUES (3, '[BAF] M6', -0.0001, 153);
INSERT INTO arma_artillery.vehicles (id, name, airFrictionIfUsed, initSpeed) VALUES (4, '[RHS] M252', 0, 200);
INSERT INTO arma_artillery.vehicles (id, name, airFrictionIfUsed, initSpeed) VALUES (5, '[RHS] 2B14-1 ''Podnos''', 0, 211);
INSERT INTO arma_artillery.vehicles (id, name, airFrictionIfUsed, initSpeed) VALUES (6, '[REDD] Mortar 120mm', -0.0001, 200);