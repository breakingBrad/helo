SELECT * FROM "posts" 
INNER JOIN "users" 
ON "posts".author_id  = "users".id 
WHERE "title" LIKE $1
AND author_id <> $2;