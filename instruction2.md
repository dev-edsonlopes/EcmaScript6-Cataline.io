# Instruções - Configuração do Front-end com Chamada da API
Neste passo, vamos configurar o front-end para fazer chamadas à API utilizando a biblioteca Axios.

### Passo 1: Instalação da biblioteca Axios
No terminal, execute o seguinte comando para instalar a biblioteca Axios:

`npm install axios`
Isso adicionará o Axios como uma dependência do seu projeto.

### Passo 2: Criação do arquivo `axios.js`
Dentro da pasta src, crie uma pasta chamada `utils`. Em seguida, crie um arquivo chamado `axios.js` dentro dessa pasta.

No arquivo `axios.js`, importe o pacote Axios e exporte uma instância personalizada de configuração do Axios com a URL base da sua API:

```javascript
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3333'
});
```
Essa configuração define a URL base para todas as chamadas da API.

### Passo 3: Criação da pasta api e do arquivo todos.js
Dentro da pasta `src`, crie uma pasta chamada `api`. Dentro dessa pasta, crie um arquivo chamado `todos.js`.

No arquivo `todos.js`, importe a instância personalizada do Axios que foi criada anteriormente:

```javascript
import axios from '../utils/axios';
```
Em seguida, exporte uma classe chamada Todos, que conterá os métodos do CRUD relacionados à entidade "todos":

```javascript
export default class Todos {
  async index() {
    const response = await axios.get('/todos'); // Teste GET
    return response;
  }

  // Implemente aqui os demais métodos do CRUD (create, update, delete)
} 
```
Essa classe contém um método `index()` que faz uma requisição `GET` para a rota `/todos` da API. Você pode implementar os demais métodos do *CRUD* conforme necessário.

### Passo 4: Utilizando a API no arquivo `main.js`
No arquivo `main.js` (ou qualquer outro arquivo onde você queira utilizar a API), importe a classe `Todos` da pasta `api`:

```javascript
import Todos from './api/todos';
```
Em seguida, crie uma função assíncrona para executar a requisição à API:

```javascript
async function exec() {
  const todos = new Todos();
  const response = await todos.index();
  console.log(response);
}

exec();
```
Essa função cria uma instância da classe `Todos` e chama o método `index()` para obter a lista de `todos`. O resultado da requisição é exibido no console.