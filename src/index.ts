import express from "express";
const app = express();

// get
app.get('/run-test', (req, res) => {
    // lógica para hacer y devolver
    return res.send('GET THINGS');
});

// post
app.post('/run-test', (req, res) => {
    // lógica para crear, test
    return res.send('POST-CREATE THINGS');
});

// put con /:id desde postman recuperamos el /754765 en nuestra consola
app.put('/run-test/:id', (req, res) => {
    // lógica para actualizar películas

    // con el metodo de req, params, recuperamos el id de /:id
    console.log(req.params);

    //lo guardamos en una variable
    const testId = req.params.id;
    return res.send('UPDATE TEST CON EL ID ' + testId);
});

// // put
// app.put('/run-test', (req, res) => {
//     // logica para actualizar peliculas
//     return res.send('UPDATE FILMS');
// });

// delete
app.delete('/run-test/:id', (req, res) => {
    // logica para borrar test

    //lo guardamos en una variable
    const testId = req.params.id;
    return res.send('DELETE TEST CON EL ID: ' + testId);
});

// server running on port ...
app.listen(4000, () => {
    console.log("Server Running: ¡Hola mundo from localhost 4000!");
});