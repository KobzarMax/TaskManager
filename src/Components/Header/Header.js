import './Header.scss';

class Header {
    constructor() {
        this.header  = document.createElement('h2');

        this.header .className = 'header';
        this.header .textContent = 'Tasks Manager'

        return this.header ;
    }
}

export default Header;
