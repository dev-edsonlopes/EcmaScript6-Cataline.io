import Todos from "./api/todos";

async function exec() {
    const todos = new Todos()
    const response = await todos.index()
    console.log("---- Listar ----")
    console.log(response)

    const create = await todos.store({ 
        text: "Passeio com DOG", 
        done: false 
    })
    console.log("---- Criar ----")
    console.log(create)

    const update = await todos.update({ 
        id: 3,
        text: "Passear com o DOG de 14hrs",
        done: false
    })
    console.log("---- Atualizar ----")
    console.log(update)
    
    const del = await todos.destroy({ id: 3})
    console.log("---- Apagar ----")
    console.log(response)
}

exec()