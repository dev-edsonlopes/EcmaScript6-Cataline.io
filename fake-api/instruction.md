# Instruções - Configurando uma API com JSON Server
Neste projeto, estamos criando uma API utilizando o pacote `json-server`. O objetivo é simular uma API para um projeto de lista de tarefas (todo list).

### Passo 1: Instalação do pacote `json-server`
No terminal, execute o seguinte comando para instalar o `json-server` como dependência de desenvolvimento:

```shel
npm install json-server --save-dev
```
### Passo 2: Criação do arquivo `db.json`
Crie um arquivo chamado db.json na raiz do projeto. Esse arquivo será usado para carregar os dados da nossa API. Você pode adicionar alguns dados iniciais para testar:

```json
{
  "todos": [
    {
      "id": 1,
      "title": "Fazer compras",
      "completed": false
    },
    {
      "id": 2,
      "title": "Estudar programação",
      "completed": true
    }
  ]
}
```
### Passo 3: Configuração do script de desenvolvimento
Abra o arquivo `package.json` e adicione o seguinte script no campo `"scripts"`:

```json
"scripts": {
  "dev": "json-server --watch db.json --port 3333"
}
```
Isso configurará um script chamado `dev` que iniciará o `json-server` e usará o arquivo `db.json` como a fonte de dados da API. O servidor será executado na porta `3333`.

### Passo 4: Executando a API
Para iniciar a API, execute o seguinte comando no terminal:

```shel
npm run dev
```
Agora você pode acessar a API através do endereço `http://localhost:3333`. Por exemplo, para obter a lista de tarefas, acesse `http://localhost:3333/todos`.

## Considerações finais
Com a API configurada e em execução, você pode utilizar as rotas disponíveis para realizar operações de criação, leitura, atualização e exclusão de tarefas na sua aplicação de lista de tarefas.

Lembre-se de consultar a documentação oficial do `json-server` para obter mais informações sobre como configurar e utilizar esse pacote.