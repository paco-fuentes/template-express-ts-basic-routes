// me traigo router desde express
import { Router } from "express";

// import controllers
import {
    getTest,
    createTest,
    updateTestById,
    getTestById,
    deleteTestById
} from "../controllers/templateControllers"

// lo guardo
const router = Router();

router.get('/', getTest);
router.post('/', createTest);
// router.put('/', updateTestById);

// put con /:id desde postman recuperamos el /754765 en nuestra consola
router.put('/:id', updateTestById);
router.get('/:id', getTestById);


// delete film by id
router.delete('/:id', deleteTestById);

// para hacer un import primero se hace un export
export { router };