import { Request, Response } from "express";
import { Test } from "../models/Test";

// get test
const getTest = async (req: Request, res: Response) => {
    const tests = await Test.find();
    return res.send(tests);
};
// get test by id
const getTestById = (req: Request, res: Response) => {
}

// post test
const createTest = async (req: Request, res: Response) => {
    try {
        const newTest = await Test.create(
            {
                testString1: req.body.testString1,
                testString2: req.body.testString2
            }
        ).save()
        return res.send(newTest);
    } catch (error) {
        return res.send(error);
    }
};

// post test by id
const createTestById = (req: Request, res: Response) => {
};

// put test
const updateTest = (req: Request, res: Response) => {
}

// put test by id
const updateTestById = async (req: Request, res: Response) => {
    try {
        const testIdToUpdate = req.params.id;
        const testUpdated = await Test.update(
            { id: parseInt(testIdToUpdate) },
            req.body);

        if (testUpdated.affected) {
            return res.json(`Se ha actualizado correctamente el test con id ${testIdToUpdate}`);
        }
        return res.json(`No se ha actualizado nada`);
    } catch (error) {
        return res.send(error);
    }
}

// delete film
const deleteTest = (req: Request, res: Response) => {
}

// delete test by id
const deleteTestById = async (req: Request, res: Response) => {
    try {
        const testIdToDelete = req.params.id;
        const testDeleted = await Test.delete(
            {
                id: parseInt(testIdToDelete)
            }
        );

        if (testDeleted.affected) {
            return res.send(`Se ha elminado correctamente el test con id ${testIdToDelete}`);
        }
        return res.send(`No se ha borrado nada`);
    } catch (error) {
        return res.send(error);
    }
}

// export crud
export {
    getTest,
    getTestById,
    createTest,
    createTestById,
    updateTest,
    updateTestById,
    deleteTest,
    deleteTestById
};
