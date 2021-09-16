export function appendTasks(arr, htmlSelecor) {

    if (Array.isArray(arr)) {
      arr.map((el, i) => {
       const li = document.createElement('li');
       
       li.className = `${el}_${i}`;
       li.textContent = el;

       document.querySelector(htmlSelecor).append(li)
      });
    }

  }

export function justAppend(selector, element) {
    document.querySelector(selector).append(element)
  }