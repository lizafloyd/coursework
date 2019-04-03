DROP TABLE IF EXISTS cars;
CREATE TABLE cars(
  id SERIAL PRIMARY KEY,
  year INT,
  make VARCHAR(50),
  model VARCHAR(50),
  transmission VARCHAR(50),
  color VARCHAR(50)
);