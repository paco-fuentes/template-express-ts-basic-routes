
# Express TypeScript Basic Routes Template

## On branch 'main'
### Example for backend project CRUD test system.
This example demonstrates a CRUD system that utilizes an API to establish a connection between a client and a MySQL database. The API is accessible via the '/test' endpoint, hosted locally. This solution is built using the Express framework and TypeORM, ensuring efficient data management and connectivity

## On branch 'template-typeorm'
### Template to create your migrations and entities with TypeORM

#### Follow these steps to get started:

This is a template to set up a basic Express application with TypeORM for managing "user" data as example. Follow these steps to get started:

##### Installation

First, install the required dependencies by running the following command:

    npm install

This will install the necessary packages and create a node_modules directory.

Update the endpoint in index.ts to use the user routes. Modify the following line to set the endpoint for user-related routes:

    // Use the user routes imported from userRoutes.ts
    app.use('/user', router);

##### Prepare Your Own Data

Now that you've completed the template setup, you can start adding your own data and customizing the application.

##### Migrations
Create a migration to define your user entity by running the following command:

    npx typeorm migration:create ./src/migration/user

After creating the migration, update the db.ts file to include the migration class in the migrations array. For example:

    import { User0000000000000 } from "./migration/0000000000000-user"

    const ormconfig = {
        // ...
        migrations: [User0000000000000],
    };

Make sure to import the migration class as well.

Execute the migration to apply the changes to your database. Use the following commands to run and revert migrations as needed:

To apply the migration (up):

    npx typeorm-ts-node-commonjs migration:run -d ./src/db.ts

To revert the migration (down):

    npx typeorm-ts-node-commonjs migration:revert -d ./src/db.ts

##### Entity

Generate a user entity using the TypeORM CLI with the following command:

    npx typeorm entity:create ./src/entity/User

If you prefer to use a models directory instead of entity, you can use the following command:

    npx typeorm entity:create ./src/models/User

This will create an entity file that represents your user data model.

Import the BaseEntity and any other entities you create in your application, and define the structure of your user entity. Here's an example of a user entity:

    import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

    @Entity()
    export class User extends BaseEntity {

        @PrimaryGeneratedColumn()
        id!: number
    
        @Column()
        user!: string
    
        @Column()
        email!: string
    
        @Column()
        password!: string
    }

Add the user entity to your db.ts file and include it in the entities array. For example:

    import { User } from "./models/User"

    const ormconfig = {
        // ...
        entities: [User],
    };

##### Controllers

In your controllers (e.g., userControllers.ts), import the User entity to use it in your application logic. For example:

    import { User } from "./models/User"

With these steps, you should have a basic Express application set up with TypeORM, and you can start building your user management system. Make sure to customize your routes, controllers, and services according to your specific requirements.

## On branch 'template-express-basic-routes'
### Template for backend projects using Node and Express written in TypeScript, with basic routes already defined.

#### Follow these steps to get started:

1. Install npm dependencies by running the command 'npm install'
2. Execute the command 'npm run dev' to run the index.ts file and start the local server on port 4000. You should see the following message in your console: "Server Running: ¡Hello World from localhost 4000!" 
3. Access open port in your localhost on http://localhost:4000/ in your browser or API platform.
4. Access / test endpoint on http://localhost:4000/test in your browser or API platform.
5. Compile your index.ts file into the ./build directory with the command 'npm build'
6. Launch the localhost server with the compiled ./build/index.js file using the command 'npm run start'

To stop the server, press 'ctrl' + 'c' in your terminal.

Feel free to customize and expand upon this template for your specific backend development needs.
