import { Task } from '../Task/Task';
import tasks from '../JSON/tasks';
import "./List.scss";

const array = []
const i = 0 
for (let task of tasks){
  array.push(new Task(task))
  
}

class List {
  
  constructor() {
    this.list = document.createElement("ul");
    this.list.className = "list";
    this.list.append(...array)

    return this.list;
  }
}

export default List;
