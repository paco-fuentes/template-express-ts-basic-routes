// 'Router' dependecies from 'express'
import { Router } from "express";

// import from templateControllers.ts
import {
    getTest,
    getTestById,
    createTest,
    createTestById,
    updateTest,
    updateTestById,
    deleteTest,
    deleteTestById
} from "../controllers/testControllers"

// template routes const
const router = Router();

// route crud
router.get('/', getTest);
router.get('/:id', getTestById);
router.post('/', createTest);
router.post('/:id', createTestById);
router.put('/', updateTest);
router.put('/:id', updateTestById);
router.delete('/', deleteTest);
router.delete('/:id', deleteTestById);

// export template routes to index.ts
export { router };
