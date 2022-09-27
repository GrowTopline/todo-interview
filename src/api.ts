// Api for interacting with a fake server

export interface ToDo {
  id: number;
  label: string;
  done: boolean;
}

export class ApiClient {
  private LOCALSTORAGE_KEY = 'todos';

  // Gets the list of all todos from the (localstorage) database
  async getToDos(): Promise<ToDo[]> {
    const todosJson = localStorage.getItem(this.LOCALSTORAGE_KEY);
    return todosJson ? JSON.parse(todosJson) : [];
  }

  // Appends a new todo to the end of the database
  async addTodo(label: string): Promise<void> {
    const currentToDos = await this.getToDos();
    const newToDo = { label, done: false, id: Math.random() * 1e18 };
    console.log('ho');
    localStorage.setItem(
      this.LOCALSTORAGE_KEY,
      JSON.stringify([...currentToDos, newToDo])
    );
  }

  // Toggles the 'done' state of a todo
  async toggleDone(id: number): Promise<void> {
    const currentToDos = await this.getToDos();
    const updatedToDos = currentToDos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    localStorage.setItem(this.LOCALSTORAGE_KEY, JSON.stringify(updatedToDos));
  }
}
