//Cadastrar Email
//cadastrar nome de usuario
//cadatrar senha



/*static createUser = (req, res) => {
    let user = new user(req.body);

    user.save((err) => {

      if(err) {
          res.status(500).send({message: `${err.message} - falha ao cadastrar usuário.`})
      } else {
        res.status(201).send(autor.toJSON())
      }
    })
}

static  updateUser= (req, res) => {
    const id = req.params.id;

    user.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Usuário atualizado com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}

static deleteUser = (req, res) => {
  const id = req.params.id;

  user.findByIdAndDelete(id, (err) => {
      if(!err){
          res.status(200).send({message: 'Usuário removido com sucesso'})
      } else {
          res.status(500).send({message: err.message})
      }
  })
}

}*/

//----------------------------------------------------------------
//const bcrypt = req ('bcrypt-nodejs')

/*async createUser (req,res){
    const {name, email, password} = req.body;
    let data = {};
    let user =  await User.findOne({name_user});
    
    if(!user){
        data = {name, email, password};

        user = await User.create(data);
        return res.status(200).json(user);
    }else{
        return res.status(500).json(user);
    }
  },

  async details(req,res){  
    const {_id} = req.params;
    const user = await User.findOne({_id}); //findOne: encontrar apenas um Usuario
    res.json(user);
  },

  async delete(req,res){
    const { _id } = req.params;
    const user = await User.findByIdAndDelete({_id});
    return res.json(user);
},

async update(req,res){
  const { _id, name, email, password} = req.body;
  const data = {name,email,password};
  const user = await User.findOneAndUpdate({_id},data,{new:true}); //new:treu ->vai salvar os dados da nova aquisição
  res.json(user);
},

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
