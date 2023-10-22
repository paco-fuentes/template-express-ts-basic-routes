import { Request, Response } from "express";
// IMPORT YOUR ENTITY

// get test
const getTest = async (req: Request, res: Response) => {
};
// get test by id
const getTestById = (req: Request, res: Response) => {
}

// post test
const createTest = async (req: Request, res: Response) => {
};

// post test by id
const createTestById = (req: Request, res: Response) => {
};

// put test
const updateTest = (req: Request, res: Response) => {
}

// put test by id
const updateTestById = async (req: Request, res: Response) => {
}

// delete film
const deleteTest = (req: Request, res: Response) => {
}

// delete test by id
const deleteTestById = async (req: Request, res: Response) => {
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
