import Input from '../Input/Input';
import Button from '../Button/Button';
import './Form.scss';

class Form {
    constructor(method , action) {
        this.form = document.createElement('form');

        this.form.method = method;
        this.form.action = action;

        this.form.className = 'form';
        this.form.append(new Input('text' ,'form-input includes' ),new Button('submit' , 'form-button includes'))
        return this.form;
    }
    
}

export default Form;

