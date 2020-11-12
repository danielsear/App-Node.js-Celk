criar o arquivo package.jon

> npm init -y

Gerencia as requisições, rotas e URLs, entre outra funcionalidades

> npm install express --save

Inicializador do servidor

> npm install nodemon --save

Instalar banco de dados mongodb

> npm install mongodb --save

Instalar mongoose- ele traduz os dados para objetos js para serem utilizados na app

> npm install --save mongoose

Permitir acesso a API

> npm install --save cors

Gerar o backup do banco de dados

> mongodump --db celke --out >local onde quer salvar>c:\data\db

Restaurar o backup do banco de dados

> mongorestore --db celke c:\data\db\celke

Gerar o backup do banco de dados MongoDB

> Obs: o novo mongodb4.4 não roda os comandos de backup e restrore e outros,
> isso acontece porque usamos o mongo 4.4 e o mongodump, mongorestore etc não estão vindo mais vinculados nessa versão.
> Segue abaixo os passos pra você realizar o procedimento:

- Primeiro vá até o site do Mongo DB e baixe a versão MongoDB 4.2 (release Candidate)
  no input que contém MSI altere para .Zip.
- Depois de baixado o arquivo zip, extraia o mesmo e entre dentro da pasta /bin.
  Copie os arquivos: mongodump, mongoexport, mongofiles, mongoimport e mongorestore.
- Vá até o diretório: C:\Program Files\MongoDB\Server\4.4\bin e cole eles lá.
