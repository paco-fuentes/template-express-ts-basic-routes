// aqui se aplica la lógica correspondiente
// importado desde emmet con req: Request y res : Response
import { Request, Response } from "express";

// get
const getTest = (req : Request, res : Response) => {
    return res.send('GET FILMS');
};

// get by id
const getTestById = (req : Request, res : Response) => {
    const TestId = req.params.id;
    return res.send('GET FILM CON EL ID: ' + TestId);
}

// post
const createTest = (req : Request, res : Response) => {
    // logica para crear las peliculas
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.director);
    return res.send('POST-CREATE FILMS');
};

// put by id
const updateTestById = (req : Request, res : Response) => {
    // recuperamos la id
    // recuperamos la info que quiero actualizar
    // validamos la info
    // comprobamos que existe y es mia
    // guardamos la info
    // devolvemos la respuesta

    console.log(req.params);
    const TestId = req.params.id;
    return res.send('UPDATE FILM CON EL ID ' + TestId);
}

// delete film by id
const deleteTestById = (req : Request, res : Response) => {
    // logica para eliminar peliculas

    // 1 recuperar la id con req.params
    // 2 comprobar que existe esa id, y que es mia
    // 3 borraremos la pelicula

    const TestId = req.params.id;
    return res.send('DELETE FILM CON EL ID: ' + TestId);
}

export { getTest, createTest, updateTestById, getTestById, deleteTestById };
