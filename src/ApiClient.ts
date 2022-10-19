// Api for interacting with the server
export interface ToDo {
  id: string;
  label: string;
  done: boolean;
}

const url = 'http://localhost:8080/todo';
const headers = { 'content-type': 'application/json' };

export class ApiClient {
  /**
   * Gets the list of all todos from the (localstorage) database
   */
  async getToDos(): Promise<ToDo[]> {
    const response = await fetch(url, { headers });
    return await response.json();
  }

  /**
   * Appends a new todo to the end of the database
   * @param label The label for the new todo to create
   */
  async addTodo(label: string): Promise<ToDo> {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ label }),
    });
    return await response.json();
  }

  /**
   * Toggles the 'done' state of a todo
   * @param id The ID of the todo to toggle
   */
  async toggleDone(id: string): Promise<ToDo> {
    const response = await fetch(`${url}/${id}`, { method: 'PUT', headers });
    return await response.json();
  }
}
