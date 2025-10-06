const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Criando conexão com o banco de dados MySQL.
const sequelize = new Sequelize('db_fullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definindo o modelo para tabela no banco de dados.
const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    email: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true // NÃO PODE REPETIR
    }
});

const app = express(); // INICIALIZA O EXPRESS
app.use(cors()); // PERMITE QUE API ACEITE CONEXÃO DO FRONT-END.
app.use(express.json()); // HABILITA O EXPRESS PARA ENTENDER REQUISIÇÕES COM JSON;

const port = 3000; // PORTA QUE A APLICAÇÃO VAI RODAR

// ROTA DE TESTE
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

// ROTA PARA LISTAR TODOS OS USUÁRIOS
app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

// ROTA PARA CRIAR UM NOVO FUNCIONÁRIO
app.post('/cliente', async (req, res) => {
    try {
        const { nome,cpf, rg, matricula, dataNascimento, salario, telefone, email  } = req.body;
        const novoFuncionario = await Funcionario.create({ nome, cpf, rg, matricula, dataNascimento, salario, telefone, email });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(400).json({ mensagem: "Funcionário já cadrastado" });
    }
});

// ROTA PARA CRIAR UM NOVO PRODUTO
app.post('/produtos', async (req, res) => {
    try {
        const { nome, validade, lote } = req.body;
        const novoProduto = await Produto.create({ nome, validade, lote });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ mensagem: "Produto já cadrastado" });
    }
});

// ROTA PARA CRIAR UM NOVO CLIENTE
app.post('/cliente', async (req, res) => {
    try {
        const { nome, dataNascimento, protocoloAtendimento } = req.body;
        const novoCliente = await Cliente.create({ nome, dataNascimento, protocoloAtendimento });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ mensagem: "Cliente já cadastrado." });
    }
});



// SINCRONIZA O MODELO COM O BANCO DE DADOS E INICIA O SERVIDOR
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀API rodando em http://localhost:${port}`);
        console.log('🚀Conectado ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:');
});