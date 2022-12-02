// Api for interacting with a fake server

export interface ToDo {
  id: string;
  label: string;
  done: boolean;
}

export class ApiClient {
  private LOCALSTORAGE_KEY = 'todos';

  constructor(private mockDelay: boolean) {}

  /**
   * Gets the list of all todos from the (localstorage) database
   */
  async getToDos(): Promise<ToDo[]> {
    await this.delay();
    const todosJson = localStorage.getItem(this.LOCALSTORAGE_KEY);
    return todosJson ? JSON.parse(todosJson) : [];
  }

  /**
   * Get a single ToDo by its ID
   */
  async getToDo(id: string): Promise<ToDo> {
    await this.delay();
    const todosJson = localStorage.getItem(this.LOCALSTORAGE_KEY);
    return todosJson
      ? JSON.parse(todosJson).find((todo: ToDo) => todo.id === id)
      : undefined;
  }

  /**
   * Appends a new todo to the end of the database
   * @param label The label for the new todo to create
   */
  async addTodo(label: string): Promise<ToDo> {
    await this.delay();
    const currentToDos = await this.getToDos();
    const id = String(Math.random() * 1e18);
    const newToDo = { id, label, done: false };
    await this.saveTodos([...currentToDos, newToDo]);
    return newToDo;
  }

  /**
   * Toggles the 'done' state of a todo
   * @param id The ID of the todo to toggle
   */
  async toggleDone(id: string): Promise<ToDo | undefined> {
    const currentToDos = await this.getToDos();
    const todoToUpdate = currentToDos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      todoToUpdate.done = !todoToUpdate.done;
    }
    await this.saveTodos(currentToDos);
    return todoToUpdate;
  }

  /**
   * Overwrites the existing DB with the provided todos
   * @param todos The todos to save
   */
  async saveTodos(todos: ToDo[]) {
    await this.delay();
    localStorage.setItem(this.LOCALSTORAGE_KEY, JSON.stringify(todos));
  }

  private async delay() {
    if (this.mockDelay) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}
