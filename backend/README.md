## Backend for Application developed in Bootcamp GoStack 8.0 by Rocketseat

# Annotations:

### Migrations

Create migration:
`yarn sequelize migration:create --name=<NAME>`

Run last migration:
`yarn sequelize db:migrate`

Revert last migration:
`yarn sequelize db:migrate:undo`

Revert all migrations:
`yarn sequelize db:migrate:undo:all`

### MongoDB

Create container:
`docker run --name <NAME> -p 27017:27017 -d -t mongo`
