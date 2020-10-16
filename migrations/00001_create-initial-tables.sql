CREATE TABLE users (
  id serial PRIMARY KEY,
  name TEXT NOT NULL
);

INSERT INTO users(name) VALUES ('John Snow');