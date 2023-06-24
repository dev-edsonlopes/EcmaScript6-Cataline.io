# Configurando Babel

Para começar, vamos configurar o Babel em seu projeto. O Babel é uma ferramenta que converte o código EcmaScript 6+ para EcmaScript 5, que é amplamente suportado pelos navegadores.

Abra seu terminal e execute o seguinte comando para instalar as dependências necessárias do Babel:

    `npm i @babel/core @babel/cli @babel/preset-env -D`
                              
O parâmetro `-D` instala as dependências como desenvolvimento (devDependencies), pois o Babel será usado apenas durante o desenvolvimento para converter o código.

O Babel converte o código durante o desenvolvimento e gera o código convertido para produção.

Crie um arquivo chamado `.gitignore` e adicione a seguinte linha para evitar que a pasta node_modules seja adicionada ao repositório do 

Git:
node_modules

Agora, crie uma pasta chamada src, onde você irá colocar o arquivo main.js. Essa pasta será usada para armazenar seus arquivos de código-fonte.

Crie também uma pasta chamada public, onde você irá colocar o arquivo index.html. Essa pasta será usada para armazenar seus arquivos públicos, como a página HTML principal do seu projeto.

Crie um arquivo chamado .babelrc no diretório raiz do projeto. Nele, você pode configurar as opções do Babel. Por exemplo, para usar o preset @babel/preset-env, você pode adicionar o seguinte conteúdo ao arquivo json:


`{
  "presets": ["@babel/preset-env"]
}`
Agora, você pode executar o Babel usando a CLI (Interface de Linha de Comando) para converter seu código. No terminal, execute o seguinte comando:

shell
    `node_modules/.bin/babel ./src/main.js -o ./public/bundle.js -w`
Isso converterá o arquivo main.js na pasta src para o arquivo bundle.js na pasta public. O parâmetro -w indica que o Babel deve assistir as alterações nos arquivos e recompilar automaticamente quando houver modificações.

Se você deseja criar um atalho para o comando acima, pode adicioná-lo ao arquivo package.json no campo "scripts":

`
"scripts": {
  "dev": "babel ./src/main.js -o ./public/bundle.js -w"
}
`
Com isso, você pode executar o comando com o seguinte comando npm:


`npm run dev`
Isso executará o comando definido no script "dev".
