# Strapi application


Seed database:
mongorestore --uri mongodb+srv://jonatanbs:<PASSWORD>@cluster0.sbzvi.mongodb.net --db shoshanDevStage ./dump/DB/<DATE dd-mm-yyyy>

Dump from database (to directory: ./dump/DB):
mongodump -o ./dump/DB/<DATE> --uri mongodb+srv://jonatanbs:<PASSWORD>@cluster0.sbzvi.mongodb.net/shoshanDev

Database:
https://cloud.mongodb.com/v2

Dump strapi configuration (to directory: ./dump):
yarn strapi configuration:dump -p --file dump/strapiConfDump.json
