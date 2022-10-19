-- SQL script to initialize the database. (At Topline we use TypeORM to generate our migrations)
CREATE TABLE
  IF NOT EXISTS todo (
    label varchar not null,
    done boolean not null default FALSE
  );