const  { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')


exports.signUpUser = async (req, res) => {
    const {
        id,
        username,
        email,
        password,
    } = req.body

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
                id,
                username,
                email,
                password: hasspassword,
            } 
        })
    
        res.status(201).json(user).send({status: "ok"})
    } catch (error) {
        res.status(400).send({ status: "error" }, error)
    }
}

exports.userLogin = async (req, res) => {
    const { email, password } = req.body

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

    req.session.user = user;
    console.log(req.session.user)

    try {
        req.session.loggedin = true  
        res.status(200).json({ msg: "Autenticação realizada com sucesso"})
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


exports.getUser = async (req, res) => {  
        const ses = req.session.user 
        try{
            console.log(ses)
        }catch(error){
            console.log(error)
        }
  };
  
exports.updateUser = async (req, res) => {
    const { username } = req.body
    try {
        const product = await prisma.product.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                username: username,
            },
        })
}catch(error){
    console.log(error)
 }
}


    
    
