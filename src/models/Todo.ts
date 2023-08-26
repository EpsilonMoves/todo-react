export class Todo {
  title: string;
  completed: boolean;
  id: string;

  constructor({
    title,
    id,
    completed = false,
  }: {
    title: string;
    id: string;
    completed?: boolean;
  }) {
    this.title = title;
    this.completed = completed;
    this.id = id;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
