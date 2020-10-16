/* @name QueryAllUsers */
SELECT * FROM users;

/* @name GetUserById */
SELECT * FROM users WHERE users.id = :userId;

/* @name AddUser */
INSERT INTO users (name) VALUES (:userName)
RETURNING *;
