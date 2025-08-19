import express from 'express';
import {professores} from '../dados.js';


const router = express.Router();

router.get('/', (req, res)=> {
    res.json(professores)
})

router.post('/', (req, res)=> {
    let dados = req.body;
    const id_atual = professores[professores.length - 1].id + 1
    dados.id = id_atual
    professores.push(dados)
    res.json(dados)
})

router.get('/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const professor = professores.find(professor => professor.id === id);
    
    if (professor) {
        res.json(professor)
    } else {
        res.json({'mensagem': 'Professor não encontrado'})
    }
})

router.put('/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    
    const {primeiro_nome, segundo_nome, natural, idade, materia} = req.body;
    let professor = professores.find(professor => professor.id === id);
    if (professor){
        professor.primeiro_nome = primeiro_nome;
        professor.segundo_nome = segundo_nome;
        professor.natural = natural;
        professor.idade = idade;
        professor.materia = materia;

        res.json(professor)
    } else{
        res.json({'mensagem': 'Professor não encontrado'})

    }
})

router.delete('/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    let professor = professores.find(professor => professor.id === id)
    const indice = professores.indexOf(professor)
    
    if(indice != -1) {
        professores.splice(indice, 1)
        res.json(professor)
    } else {
        res.json({'mensagem': 'Professor não localizado'})
    }
})

export default router;