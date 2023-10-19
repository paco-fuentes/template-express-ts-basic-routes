import express from "express";
// import router from templateRoutes.ts
import { router } from "./routes/templateRoutes"

const app = express();
const PORT = process.env.PORT || 4000;

// express.json middleware
app.use(express.json());

// test endpoint
app.use('/test', router);

// server running on port ...
app.listen(PORT, () => {
    console.log(`Server Running: ¡Hello World from localhost ${PORT}!`);
});