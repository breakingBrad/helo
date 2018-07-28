SELECT * FROM "posts"
INNER JOIN "users" 
ON "posts".author_id  = "users".id 
WHERE author_id = $1;