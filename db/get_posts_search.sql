SELECT * FROM "posts"
INNER JOIN "users" 
ON "posts".author_id  = "users".id 
WHERE title ILIKE $1;