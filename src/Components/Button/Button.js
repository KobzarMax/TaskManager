import "./Button.scss";

class Button {
  constructor(type, className) {
    this.button = document.createElement("input");
    this.button.type = type;
    this.button.className = className;

    return this.button;
  }

}

export default Button;
