class TodoService {

    constructor() {
        this._todos = [];
    }

    getAll() { 
        return this._todos;
    }

    add(name) { 
        if (!name || name.length == 0) {
            throw new Error("Not allow save todo!");
        }
        this._todos.push(name);
    }

    remove(indice) {
        this._todos.splice(indice, 1);
    }

    edit(indice, name) {
        this._todos[indice] = name;
    }

}

export default TodoService;