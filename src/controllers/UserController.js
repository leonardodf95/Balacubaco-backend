const userdb = require('../models');

class UserController{
    
    static async findAllUsers(req, res) {
        try {
            const allUsers = await userdb.Users.findAll()
            return res.status(200).json(allUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findByUuid(req, res) {
        const { id } = req.params

        try {
            //onde a coluna id do banco for igual ao id.req.params
            const user = await userdb.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createUser (req, res) {
        const{name, email, password} = req.body;

        try {
            const newUser = await userdb.User.create({name, email, password})
            return res.status(200).json(newUser)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async updateUser (req, res) {
        const { id } = req.params;
        const changes = req.body

        try {
            await userdb.update(changes, { where: { id: Number(id) } } )
            const changeUser = await userdb.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(changedUser)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async deletUser(req, res) {
        const { id } = req.params;

        try {
            await userdb.destroy(changes, { where: { id: Number(id) } } )
            return res.status(200).json({ data: `o user do id ${id} foi deletado!`} )
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async teste(req, res) {
        const { name, age } = req.body;

        try {
            return res.status(200).json({ data: `o nome é ${name} e sua idade é ${age} `} )
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

}

module.exports = UserController


/*
async login(req,res){
    const { email, senha } = req.body;
    User.findOne({email_usuario: email}, function(err,user){
        if(err){
            console.log(err);
            res.status(200).json({erro: "Erro no servidor. Por favor, tente novamente"});
        }else if (!user){
            res.status(200).json({status:2, error: 'E-mail não encontrado no banco de dados'});
        }else{
          user.isCorrectPassword(password,async function (err,same){
            if(err){
              res.status(200).json({error:"Erro no servidor. Por favor, tente novamente!"});
            }else if(!same){
              res.status(200).json({status:2, error:"A senha não confere!"})
            }else {
              const payload = { email };
              
          })
                 
        }
      })
    }*/