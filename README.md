# API-DevHouse

<h1 align="center">API DevHouse</h1>
<p align="center">
    <a href="#sobre">Sobre |</a>
    <a href="#tecnologias">Tecnologias |</a>
    <a href="#instalação">Instalação de dependências e uso |</a>
    <a href="#endpoints">Endpoints</a>
</p>

<hr>

## Sobre
API REST desenvolvida no curso 'Curso completo de APIs com Nodejs, Express + MongoDB, SQL', do instrutor Matheus Fraga, na Udemy.

Trata-se de uma API para aplicação de alocação de imóvel, onde é possível iniciar sessão e, com o usuário logado, cadastrar, atualizar, deletar e listar os imóveis cadastrados. 

![img1](https://user-images.githubusercontent.com/76854209/164293507-228e150d-39df-47e6-8cc5-dd56a82a4452.jpg)
![img2](https://user-images.githubusercontent.com/76854209/164293513-de7ccc0a-95cd-46a7-b51f-805809a9745b.jpg)
![img3](https://user-images.githubusercontent.com/76854209/164293514-c428345c-cd4f-40f5-b9ff-415647228087.jpg)

## Experiência adquirida:
- API
- MongoDB
- Mongoose
- Javascript
- NodeJS
- Express
- Cors
- Padrões REST
- Verbos HTTPS
- Status Code
- Endpoints amigáveis
- Params, Querys e afins
- ESlint
- Editorconfig
- Yup
- Multer
- Insominia

<hr>

## Tecnologias
<ul>
    <li><a href="https://nodejs.org/" alt="Node.js">Node.js</a></li>
    <li><a href="https://mongoosejs.com/" alt="">Mongoose</a></li>
    <li><a href="https://www.mongodb.com/pt-br" alt="MySQL">MongoDB</a></li>
</ul>

## Instalação

> Este guia assume que você já tem o Node.js instalado. 

```bash
$ git clone https://github.com/leandrolimadeveloper/API-DevHouse.git
$ cd API-DevHouse
```

Para executar o servidor, execute:
```
$ yarn dev
```
 
## Endpoints 
(Demonstração de alguns endpoints)
> Para testar a API é necessário ter um cliente de API REST como as ferramentas Insomnia e Postman. 

### Sessions: POST /sessions
Endpoint para logar/cadastrar usuário. Caso o email já esteja cadastrado, ele loga.

```
{
  "email: "name@name.com"
}
```

#### Parametros
Nenhum

#### Respostas 
OK! 200 (Sucesso na requisição) — Cadastra/loga o usuário<br>
BAD REQUEST! 400 (Servidor não entendeu a requisição) — 'Error: Falha na validação de dados'

### Houses: POST /houses
Rota para cadastrar um novo imóvel. 

A imagem cadastrada é enviada através do req.file (filename) e o ID do usuário através do req.headers.

#### Parametros
Nenhum

#### Respostas 
OK! 200 (Sucesso na requisição) — Cadastra os dados<br>
BAD REQUEST! 400 (Servidor não entendeu a requisição) — 'Error: Falha na validação de dados'

Exemplo:
``` 
POST /houses
```

### Houses: GET /houses
Retorna a lista dos imóveis com status 'true' cadastrados no banco de dados.

#### Parametros
true

#### Respostas 
OK! 200 (Sucesso na requisição) — Os dados são retornados.

Exemplo:
``` 
GET /houses/?status=true
```
 
