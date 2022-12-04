# BlogAppWithNodeJs

# Code Overview

## Dependencies

- expressjs - The server for handling and routing HTTP requests
- jsonwebtoken - For generating JWTs used by authentication
- mongoose - For modeling and mapping MongoDB data to JavaScript 
- bcrypt - Hashing Password
- dotenv - Zero-Dependency module that loads environment variables
- body-parser - For parse the req.body
- cookie-parser - Used for parse cookie
- ejs - View engine
- method-override - used for delete method 'cause form don't have delete method

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also inncludes the routes we'll be using in the application.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.
- `controllers/` - This folder contains controllers for our API.
- `public/` - This folder contains static files for our API.
- `middlewares/` - This folder contains middlewares for our API.
- `helpers/` - This folder contains helper functions for adapting 3rd party libraries for our API.
- `repository/` - This folder contains database process.
- `views/` - This folder contains view files (ejs view engine) .
