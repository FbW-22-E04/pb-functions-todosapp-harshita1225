const toDosStore = ["Shopping", "Home work", "Go to the gym"];

class ToDoApp {
  constructor(name) {
    this.name = name;
    this.todolist = [];
  }

  insertTodo(task) {
    this.todolist.push(task);
  }

  updateTodos(arr) {
    this.todolist.push(...arr);
  }

  createTodo(arr) {
    this.todolist.push(...arr);
  }

  removeTodo(task) {
    this.todolist = this.todolist.filter((item) => item !== task);
  }

  editTOdo(num, newtask) {
    this.todolist.splice(num, 1, newtask);
  }

  RenderToDosListTemplate() {
    if (this.todolist === []) {
      console.log(` to do list is empty!!`);
    } else {
      this.todolist.forEach((item, i) => console.log(`${i} : ${item} \n`));
    }
  }
}

const testData = [
  "yoga session",
  "shopping",
  "Meet with PR department",
  "Pay bills ",
  "By milk",
  "Visiting Tommy",
  "Check the internet connection",
  "Go to supermarket",
  "Meet with Ghassan",
  "New test",
];
const harshita = new ToDoApp("harshita");
console.log(harshita);
harshita.RenderToDosListTemplate();

/*
console.log(`-----------------------------`);
harshita.insertTodo(testData[1]);
harshita.insertTodo(testData[2]);
harshita.insertTodo(testData[4]);
harshita.insertTodo(testData[5]);
harshita.removeTodo(testData[3]);
harshita.removeTodo(testData[5]);
harshita.insertTodo("Call Alex!!");
harshita.editTOdo(3, "Pay bills..");
harshita.editTOdo(5, "Visiting Tommy");
harshita.updateTodos([testData[0], testData[9]]);
harshita.createTodo([
  "Go to supermarket",
  "Meet with Ghassan",
  "make presentation",
]);
console.log(harshita);

harshita.RenderToDosListTemplate();
*/
