const  { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');
const multer = require('multer');



exports.signUpUser = async (req, res) => {

  
  
    
    const {
        name,
        username,
        email,
        aboutYou,
        password,
    } = req.body
    


    console.log("dados", req.body);


    // Validações
    if(!username){
        return res.status(422).json({ msg: "O seu nome é obrigatório!"})
    }
    if(!email){
        return res.status(422).json({ msg: "O email é obrigatório!"})
    }
    if(!password){
        return res.status(422).json({ msg: "A senha é obrigatória!"})
    }

    //Checar se o usuário existe
    const checkUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

     if(checkUser){
            return res.json({ error: "Email ja cadastrado!"})
        }

    // Criar senha
    const salt = await bcrypt.genSalt(12)
    const hasspassword = await bcrypt.hash(password, salt)

    try {
        const user = await prisma.user.create({
            data: {
                name,
                username,
                email,
                aboutYou,
                password: hasspassword,
            } 
        })
        res.status(201).send(user).send({status: "ok"})
    } catch (error) {
        res.status(400).json(error)
        console.log(error)
    }
}

exports.userLogin = async (req, res) => {
    const { username, email, password } = req.body


    if(!username){
        return res.status(422).json({ msg: "O Username é obrigatório!"})
    }

    if(!email){
        return res.status(422).json({ msg: "O email é obrigatório!"})
    }
    if(!password){
        return res.status(422).json({ msg: "A senha é obrigatória!"})
    }

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    
    
    
    if(!user) {
        return res.status(404).json({ msg: "Usuario não encontrado!"})
    }
    
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword){
        return res.status(422).json({ msg: "Senhas inválida!"})
    }

    req.session.user = user.username;
    req.session.name = user.name
    req.session.userId = user.id
    

    console.log(req.session.user)
    console.log(req.session.name)
    console.log(req.session.userId)
        try {
        req.session.loggedin = true  
        res.status(200).json({ msg: "Autenticação realizada com sucesso", user:req.session.user, name:req.session.name})
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}   


exports.getUser = async (req, res) => {
    try {
        const response = await prisma.user.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


exports.getUserById = async (req, res) => {  
    try {
        const response = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id)
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
  
  exports.updateUser = async (req, res) => {
    const { name, username, aboutYou } = req.body
    try {
        const user = await prisma.user.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: name,
                username: username,
                aboutYou: aboutYou
            },
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


    
    
