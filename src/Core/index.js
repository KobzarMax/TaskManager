import * as $ from "jquery";

import Form from "../Components/Form/Form";
import List from "../Components/List/List";
import Header from '../Components/Header/Header';
import {Task} from '../Components/Task/Task';
import tasks from '../Components/JSON/tasks';

import "../style/style.scss";


console.log('[tasks]', tasks);
$(function () {
  


  const components = 
  [
    new Header(), 
    new List(),
    new Form('' , ''),
  ]

  const root = document.querySelector('#root');
  root.append(...components)
  
  // document.querySelectorAll('li').forEach((el,i) => {el.id = i++})

  window.addEventListener('click',(e) => {
    if(e.target.className.includes('button')){
      e.preventDefault()

      const newTaskToArray = document.querySelector('.form-input');
      tasks.push(newTaskToArray.value)

      const ul = document.querySelector('ul')
      ul.prepend(new Task(newTaskToArray.value))

      document.querySelector('.form-input').value = ''

    }
    if(e.target.tagName == "LI"){
      e.target.classList.toggle('key')
    }

    if(e.target.tagName === 'I'){
      const trash = e.target.parentNode;
      const listItem = trash.parentNode;



      listItem.remove()
    }
  })



});
