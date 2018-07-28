SELECT "users".*, "posts".*  FROM "posts"
INNER JOIN "users" 
ON "posts".author_id  = "users".id
WHERE "posts".id = $1;

