import express from 'express';
import {alunos, turmas} from '../dados.js';


const router = express.Router();

router.get('/', (req, res)=> {
    turmas.map(turma => turma.totalAlunos = alunos.filter(aluno => aluno.turma === turma.id).length)
    res.json(turmas)
})

router.post('/', (req, res)=> {
    let dados = req.body;
    const id_atual = turmas[turmas.length - 1].id + 1
    dados.id = id_atual
    turmas.push(dados)
    res.json(dados)
})

router.get('/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    let turma = turmas.find(turma => turma.id === id);
    const alunosTurma = alunos.filter(aluno => aluno.turma === id)
    turma.alunos = alunosTurma
    
    if (turma) {
        res.json(turma)
    } else {
        res.json({'mensagem': 'Turma não encontrado'})
    }
})

router.put('/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    
    const {nome, turno} = req.body;
    let turma = turmas.find(turma => turma.id === id);
    if (turma){
        turma.primeiro_nome = primeiro_nome;
        turma.segundo_nome = segundo_nome;
        turma.natural = natural;
        turma.idade = idade


        res.json(turma)
    } else{
        res.json({'mensagem': 'Turma não encontrado'})

    }
})

router.delete('/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    let turma = turmas.find(turma => turma.id === id)
    const indice = turmas.indexOf(turma)
    
    if(indice != -1) {
        turmas.splice(indice, 1)
        res.json(turma)
    } else {
        res.json({'mensagem': 'Turma não localizado'})
    }
})

export default router;