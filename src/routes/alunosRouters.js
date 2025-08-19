import express from 'express';
import {alunos} from '../dados.js';


const router = express.Router();

router.get('/', (req, res)=> {
    res.json(alunos)
})

router.post('/', (req, res)=> {
    let dados = req.body;
    const id_atual = alunos[alunos.length - 1].id + 1
    dados.id = id_atual
    alunos.push(dados)
    res.json(dados)
})

router.get('/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const aluno = alunos.find(aluno => aluno.id === id);
    
    if (aluno) {
        res.json(aluno)
    } else {
        res.json({'mensagem': 'Aluno não encontrado'})
    }
})

router.put('/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    
    const {primeiro_nome, segundo_nome, natural, idade} = req.body;
    let aluno = alunos.find(aluno => aluno.id === id);
    if (aluno){
        aluno.primeiro_nome = primeiro_nome;
        aluno.segundo_nome = segundo_nome;
        aluno.natural = natural;
        aluno.idade = idade

        res.json(aluno)
    } else{
        res.json({'mensagem': 'Aluno não encontrado'})

    }
})

router.delete('/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    let aluno = alunos.find(aluno => aluno.id === id)
    const indice = alunos.indexOf(aluno)
    
    if(indice != -1) {
        alunos.splice(indice, 1)
        res.json(aluno)
    } else {
        res.json({'mensagem': 'Aluno não localizado'})
    }
})

export default router;