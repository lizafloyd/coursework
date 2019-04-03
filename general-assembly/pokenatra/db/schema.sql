DROP TABLE IF EXISTS pokemons;

CREATE TABLE pokemons (
  id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  cp integer NOT NULL,
  poke_type text,
  img_url text
);
