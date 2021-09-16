import "./Task.scss";

export class Task {
  constructor(task) {
    this.task = document.createElement("li");
    this.task.className = "list-item";
    this.task.innerHTML = `${task}
     <div class="list-item__trash"><i class="fas fa-trash"></i></div>
     `;

    return this.task;
  }
}
