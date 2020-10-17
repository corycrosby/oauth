/* @name QueryAllUsers */
SELECT * FROM users;

/* @name GetUserById */
SELECT * FROM users WHERE users.id = :userId;

/* 
  @name AddUser 
  @param user -> (name, email)
*/
INSERT INTO users(name, email) VALUES :user
RETURNING *;
