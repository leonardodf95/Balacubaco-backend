<h1 align='center'>PROJETO HACKATON - Back-end </h1>

Projeto desenvolvido para o hackaton realizado pela Let's Code em parceria com o Ifood.

Esta aplicação foi feita em Node.JS e para a utilização é necessário ter instalado no computador.(https://nodejs.org/en/download/). Além disso, é necessario realizar as instalações:

Framework Express.js: npm install express

Nodemon: npm install -g nodemon

Database: npm install --save pg pg-hstore 

Sequelize: npm install sequelize sequelize-cli path
DOC: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
	 https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/


A estrutura da aplicação foi divida da seguinte maneira:
    1.Raiz:
        * index.js -> Onde o servidor é inicializado e recebe as requisições e manda as respostas.
        
        * package.json -> As informações sobre a aplicação como a assinatura de depêndencias da aplicação, seu nome, a versão, entre outras.
        
        * src -> Diretório fonte onde está:
            
            * models -> Diretório onde fica as entidades do projeto com as suas funcionalidades.
                Entidades:
                    * User: Entidade de funcionalidades para os usuários - cadastro, login e interesses.
                    * Partners: Entidade de funcionalidades dos parceiros - cadastro, login e cursos oferecidos.
                    * Courses: Entidade de funcionalidades dos cursos cadastrados.
            
            * routes -> Diretório para divisão de rotas das funcionalidades de cada entidade.

            * controllers -> Diretório das funções controladoras de cada entidade, montando a resposta do servidor para cada funcionalidade requisitada pelo usuário.
                Controladoras:
                    * CoursesController: Função controladora das requisiçõs para os cursos e respostas do servidor.
                    * UserController: Função controladora das requisiçõs para os usuários e respostas do servidor.
                    * PartnerController: Função controladora das requisiçõs para os parceiros e respostas do servidor.

            * config -> Diretório de funções de configuração da aplicação.
                * config.json: Configuração do banco de dados.

        * migrations -> Cria tabela para o banco de dados.
        
            * seeds -> Cria dados para o banco de dados.

Este é apenas um mvp, no qual novas atualizações serão feitas com o tempo!!
