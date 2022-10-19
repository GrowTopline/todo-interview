-- SQL script to initialize the database. (At Topline we use TypeORM to generate our migrations)
CREATE TABLE
  IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    label VARCHAR NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE
  );