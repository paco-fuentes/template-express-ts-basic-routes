// import express dependencies
import express from "express";
// import router from templateRoutes.ts
import { router } from "./routes/templateRoutes"

// express on const app
const app = express();
// port const
const PORT = process.env.PORT || 4000;

// express.json middleware
app.use(express.json());

// test endpoint with routes from imported templateRoutes.ts
app.use('/test', router);

// port listener and log
app.listen(PORT, () => {
    console.log(`Server Running: ¡Hello World from localhost ${PORT}!`);
});
