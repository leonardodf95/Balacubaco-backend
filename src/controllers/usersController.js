//Cadastrar Email
//cadastrar nome de usuario
//cadatrar senha



/*static cadastrarUser = (req, res) => {
    let user = new user(req.body);

    user.save((err) => {

      if(err) {
          res.status(500).send({message: `${err.message} - falha ao cadastrar usuário.`})
      } else {
        res.status(201).send(autor.toJSON())
      }
    })
}

static atualizarAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Autor atualizado com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
}

static excluirAutor = (req, res) => {
  const id = req.params.id;

  autores.findByIdAndDelete(id, (err) => {
      if(!err){
          res.status(200).send({message: 'Autor removido com sucesso'})
      } else {
          res.status(500).send({message: err.message})
      }
  })
}

}