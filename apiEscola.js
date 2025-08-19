import express from 'express';
import cors from 'cors';
import alunosRouters from './src/routes/alunosRouters.js'
import professoresRouters from './src/routes/professoresRouters.js'
import turmasRouters from './src/routes/turmasRouters.js'

const PORT = 3000;
const app = express();


app.use(cors());
app.use(express.json());

//Endpoints para produtos
app.use('/alunos', alunosRouters)
app.use('/professores', professoresRouters)
app.use('/turmas', turmasRouters)

app.listen(PORT, ()=> {
    console.log(`O servidor está rodando na porta ${PORT}`)
} );