import "./Input.scss";

class Input {
  constructor(type, className) {
    this.input = document.createElement("input");
    this.input.className = className;
    this.input.type = type;

    return this.input;
  }
}

export default Input;
