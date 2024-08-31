
function write(text, tag = undefined, className = undefined, type = undefined) {
    if(tag === undefined) tag ='p';
    let element = document.createElement(tag);
    if (className !== undefined) element.className = className;
    if (type !== undefined) element.type = type;
    element.innerHTML = text;
    document.body.append(element);
  }

try {
      write("MID LEVEL Javavascript", "h1");
      write("wlecome to page 3. this is the intermediate level of javascript code", "div", "maincont");


    // WINDOW ELEMENT METHODS ************************************************************************************************
    // hereda las propiedades de event.target
    write("window element methods", "h2");
    write('open(), close(), closed, stop()','b')
    // open()       abre una ventana nueva
    let newWin = window.open();
    // close()      la cierra si esta abierta
    if(newWin)   {
        // closed
        if (newWin.closed) {
            write("newWin is closed", "div", "red");
        } }
    // name
    // stop()      detiene el envio de eventos o la carga de la pagina
    //window.stop();

    write('','br')
    write('alert(), print(), prompt(), confirm()','b')
    // prompt()     permite el ingreso de un dato
    let data = window.prompt("enter your name", " ");
    // alert()      muestra mensaje emergente
    alert('your name is ' + data);
    // print()      imprime la pagina
    window.print();
    // confirm()    alrte con si no 
    let conf = window.confirm("do you want to print this page?");
    if (conf) {
        write("you printed the page", "div", "green");
        // print()      imprime la pagina
        window.print();
    } else {
        write("you canceled", "div", "red");
    }

    write('screen, screenLeft, screenTop','b')
    // screen
    write(' the  screen is ' + screen.width +' x '+ screen.height ) 
    // screeenleft      indicates the left position of the window relative to de device screen
    // screenTop        indicates the top position of the window relative to de device screen
    write(' the  screen position is ' + window.screenTop +' left '+ window.screenTop + ' top') 
    
    write('scrollX, scrollY, scroll()','b')
    // scrollX          devuelve el n pixels que el scroll esta desplazado en x
    // scrollY          devuelve el n pixels que el scroll esta desplazado en y
    write (' the scroll position is ' + window.scrollX +' left '+ window.scrollY + ' top')
    // scroll(x, y)     desplaza el scroll en x e y
    window.scroll(100, 100);

    // minimize()       is deprecated

    write('resizeBy(), resizeTo(), moveTo(), moveBy()','b')
    // resizeBy()
    window.resizeBy(10, 10);
    // resizeTo()
    window.resizeTo(1000, 1000);
    // moveTo()
    window.moveTo(100, 100);
    // moveBy()
    window.moveBy(100, 100);

    /* objetos barprops
    - locationbar 
    - menubar
    - scrollbars
    - statusbar
    - toolbar
    */

    // WINDOW LOCATION METHODS ************************************************************************************************
    // hereda las propiedades de location
    write("window location methods", "h2");

    write('href, hostname, pathname, protocol','b')
    // location.href        is the cuerent url
    write ('the url is ' + window.location.href)
    // location.hostname    is the hostname of de server or domain
    write ('the hostname is ' + window.location.hostname)
    // location.pathname    is the path  and name of the current page
    write ('the pathname is ' + window.location.pathname)
    // location.protocol    is the protocol of the current url
    write('the protocol is ' + window.location.protocol)

    
    write('reload(), replace(), assign()','b')
    write('window.location.reload()   recarga la pagina');
    write('window.location.replace(\'https://google.com\')  reemplaza la url actual');
    write('window.location.assign(\'https://google.com\') loads a new url in the curent window');

    write('EVENTS', 'h2');
    // EVENTS ************************************************************************************************
    // any change in the page trigers an events
    write('addEventListener, removeEventListener','b');
    write('','br');
    let button = document.createElement('BUTTON');
    button.innerHTML = 'click me';
    // event listeners
    let clickcounter = 0;
    document.body.append(button);
    write('clickcounter: ' + clickcounter, 'b','counter');
    button.addEventListener('click', clickHandler);
    
    function clickHandler() {
        clickcounter++;
        document.querySelector('.counter').innerHTML = 'clickcounter: ' + clickcounter
    }

    let button2 = document.createElement('BUTTON');
    button2.innerHTML = 'click to remove the event listener';
    // event handler  
    button2.onclick = () => {
        clickcounter = 0;
      document.querySelector('.counter').innerHTML = 'clickcounter: ' + clickcounter
      // removeEventListener
      button.removeEventListener('click', clickHandler)
      button.innerHTML = '😭'
    }
    document.body.append(button2);
   
    // event object
    write('','br');
    write('event.target, event.currentTarget', 'b');
   
    let button3isclicked = false;
    let button3 = document.createElement('BUTTON');
    button3.innerHTML = 'what is clicked?';
    button3.addEventListener('click', (event) => {
        if (!button3isclicked) {
            button3isclicked = true;
            button3.previousSibling.innerHTML += ' ' + event.target;
        }
    })
    document.body.append(button3);
   
    // event flow: bubbling vs capturing
    write('','br');
    write('event flow: bubbling vs capturing','h3');
    write('by default event flow is bubbling, from the most specific to the most general');
    write('to change the flow, use the method or add the event listener using event capture paramater as true'); 
    write('e.stpopPropagation() to discard the event flow');


    // MOUSE EVENTS ********************************************************************************************
    // click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleavem, contextmenu
    write('Mouse Events','h3');
    write('click','b'); write('ocurs when the mouse button is clicked');
    write('dblclick,','b'); write('ocurs when the mouse button is double clicked');
    write('mousedown,','b'); write('ocurs when the mouse button is pressed down');
    write('mouseup','b'); write('ocurs when the mouse button is released');
    write('mousemove,','b'); write('ocurs when the mouse is moved');
    write('mouseover','b'); write('ocurs when the mouse enters the element');
    write('mouseout,','b'); write('ocurs when the mouse leaves the element');
    write('mouseenter,','b'); write('ocurs when the mouse enters the element');
    write('mouseleavem,','b'); write('ocurs when the mouse leaves the element');
    write('contextmenu','b'); write('ocurs when the right mouse button is pressed down');


    // KEYBOARD EVENTS *****************************************************************************************
    // keydown, keypress, keyup
    write('Keyboard Events','h3');
    write('keydown,','b'); write('ocurs when a key is pressed down');
    write('keypress,','b'); write('ocurs when a key is pressed');
    write('keyup','b'); write('ocurs when a key is released');
    write('the most common keys are: ','b');
    write('backspace, tab, enter, escape, space, pageup, pagedown, end, home, left, up, right, down, insert, delete, numlock, scrolllock, capslock, f1-f12');
    write('other keys are: ','b');
    write('alt, altgr, ctrl, shift, ctrl+alt, ctrl+shift, ctrl+alt+shift');
    write('to captured the key use the method: event.keycode or event.keyCode');
    write('press any key to discover the keycode: ','b'); write('','br');
    write('keydown: ','b', 'keydown');
    
    document.addEventListener('keydown', (event) => {
        let key = "";
        key +=" key: " + event.key + ", ";
        key +=" keyCode: " + event.keyCode + ", ";
        key +=" which: " + event.which + ", ";
        key +=" code: " + event.code;
        document.querySelector('.keydown').innerHTML = 'keydown: ' +key
    })
    
    write('','br')
    
    // INTERFACE EVENTS *******************************************************************************************
    // abort , error , load, unload, loadend, loadstart, beforeunload, progress, resize, scroll, select, selected
    write('Interface Events','h3');
    write('abort , error , load, unload, loadend, loadstart, beforeunload, progress, resize, scroll, select, selected');

    // FORM EVENTS ********************************************************************************************
    // change, select, submit, reset, focus, blur, input, focusin, focusout
    write('Form Events','h3');
    write('change, select, submit, reset, focus, blur, input, focusin, focusout');


    // DOCUMENT EVENTS ******************************************************************************************
    // DOMContentLoaded, load
    write('Document Events','h3');
    write('DOMContentLoaded, load');

    // PAGE EVENTS ********************************************************************************************
    // pagehide, pageshow, popstate, hashchange
    write('Page Events','h3');
    write('pagehide, pageshow, popstate, hashchange');

    // HISTORY EVENTS *******************************************************************************************
    // beforeunload, unload, popstate, hashchange
    write('History Events','h3');
    write('beforeunload, unload, popstate, hashchange');

    const eventURL = 'https://www.w3schools.com/jsref/dom_obj_event.asp';
    let eventsLink = document.createElement('A');
    eventsLink.href = eventURL;
    eventsLink.textContent = 'to lern more about events click here';
    document.body.appendChild(eventsLink);

    //TIMERS ************************************************************************************************
    // setTimeout, setInterval, clearTimeout, clearInterval
    write('TIMERS','h2');
    write('setTimeout, setInterval, clearTimeout, clearInterval');

    const timer = setTimeout(() => {
        write('this is a timer', 'b', 'yellow');
    }, 3000);

    clearTimeout(timer);

    const interval = setInterval(() => {
        write('this is an interval', 'b', 'yellow');
    }, 3000);

    clearInterval(interval);
    write('','br')

     

    // TRY CATCH ************************************************************************************************
    // Try Catch hrow error finaly
    write('TRY CATCH','h2');
    write('Try, Catch, throw, error, finaly');

    // tipos de errores
    write('Tipos de errores','h3');
    try {
        
        // SyntaxError
        // ReferenceError
        // TypeError
        // RangeError
        // URIError
        // EvalError
        // AggregateError
        // InternalError
        // DOMException
        write('try');
        write(' throw new InternalError(\'this is an error\');');
        throw new InternalError('this is an error');

    } catch (error) {
        if (error instanceof SyntaxError) {
            write('SyntaxError' );
        } else if (error instanceof ReferenceError) {
            write('ReferenceError ocurs' );
        } else if (error instanceof TypeError) {
            write('TypeErrorr' );
        } else if (error instanceof RangeError) {
            write('RangeErrorr' );
        } else if (error instanceof URIError) {
            write('URIErrorr' );
        } else if (error instanceof EvalError) {
            write('EvalErrorr' );
        } else if (error instanceof AggregateError) {
            write('AggregateErrorr' );
        } else if (error instanceof InternalError) {
            write('InternalErrorr' );
        } else if (error instanceof DOMException) {
            write('DOMExceptionr' );;
        } else {
            write('error desconocido');
        }
    }
    finally {
        write('this is a finaly');
    }


    // CALLBACKS **************************************************************************************** 
    write('CALLBACKS','h2');
    function myCallback(param) {
        write('this is a callback and the param was ' + param);
    }

    function run(myCallback, param){
        write('running my main function');
        myCallback(param);
    }
    run(myCallback, 'testing');

    // PROMISES ****************************************************************************************
    write('PROMISES','h2');

    write('this is the promeses message board','div','secondcont promise');
    let cont = document.querySelector('.promise');
    function createP(text) {
        let P = document.createElement('P');
        P.innerHTML = text;
        return P;
    }
    function promesa(mostrar) {
        return new Promise((resolve, reject) => {
           try {
                if (mostrar == null) throw new Error('mostrar is null');
                cont.appendChild(createP('the promise is running and saying: ' + mostrar));
                resolve();
           } catch (error) {
                cont.appendChild(createP('this is an error in the promise: ' + error));
                reject(error);
           }});
        }

    promesa('primera vez').then(() => {
        cont.appendChild(createP('resolved'));
    }).catch((err) => {
        cont.appendChild(createP('rejected '+ err));
    }).finally(() => {
       cont.appendChild(createP('finaly'));
    })

    promesa(null).catch((err) => {
        cont.appendChild(createP('rejected: '+ err));
    })

    Promise.all([promesa('segunda vez'), promesa('tercera vez')]).then(() => {
        cont.appendChild(createP('all done'));
    })
    Promise.race([promesa('cuarta'), promesa('quinta')]).then(() => {
        cont.appendChild(createP('race done'));
    })
    

    // ASYNC AWAIT ************************************************************************************************
    // async await
    write('ASYNC AWAIT','h2');

    write('this is the async await message board','div','secondcont asyncawait');
    let cont2 = document.querySelector('.asyncawait');

    async function asyncAwait(mostrar,time) {
        try {
            if (mostrar == null) throw new Error('mostrar is null');
            cont2.appendChild(createP('waiting'));
            await setTimeout(() => {
                
                cont2.appendChild(createP('the async  is running and saying: ' + mostrar));
            }, time)
        } catch (error) {
            cont2.appendChild(createP('this is an error in the async : ' + error));
            throw error;
        }
    }

    asyncAwait('primera vez', 1000).then(() => {
        cont2.appendChild(createP('resolved'));
    })
    asyncAwait(null, 1500).catch((err) => {
        cont2.appendChild(createP('rejected: '+ err));
    })
 

    // HTTP GET POST ************************************************************************************************
    // http get 
    write('HTTP GET and POST','h2');
    write('http GET requested XMLHttpRequest','h3');
    write('this is the  get message board','div','secondcont get');
    let cont3 = document.querySelector('.get');

    const httpGet = (url, callback, err = console.error) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = async () => await callback(request.responseText);
      request.onerror = () => err(request);
      request.send();
    };

    const clearJsonToHTML = (json) => {
        let div = document.createElement('div');
        div.innerHTML = json;
        return div;
    }
    let dataObject
    let dataString
    let getp = createP('geting https://jsonplaceholder.typicode.com/todos/1 ...');
    cont3.appendChild( getp);
    httpGet('https://jsonplaceholder.typicode.com/todos/1', (data) => {
        getp = createP(' response is:')
        cont3.appendChild( getp);
        cont3.appendChild( clearJsonToHTML(data));

        dataObject = JSON.parse(data);
        dataString = JSON.stringify(dataObject);
        // write (dataString, 'div', 'green');
    })


    const peticion = new XMLHttpRequest();
    peticion.addEventListener('load', () => {
        if (peticion.readyState == 4 && peticion.status == 200) {
            cont3.appendChild( createP('peticion response is:' + peticion.responseText));
        }
    })
    peticion.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    peticion.send();
    

    //polyfill for internet explorer IE7
    let peticion2
    if (window.XMLHttpRequest) {
        peticion2 = new XMLHttpRequest();
    } else{
        peticion2 = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // luego funciona todo igual

    // http post
    write('http POST requested XMLHttpRequest','h3');
    write('this is the  post message board','div','secondcont postb');
    let cont4 = document.querySelector('.postb');

    const httpPost = (url, data, callback, err = console.error) => {
      const request = new XMLHttpRequest();
      request.open('POST', url, true);
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      request.onload = () => callback(request.responseText);
      request.onerror = () => err(request);
      request.send(data);
    };
     getp = createP('posting to https://jsonplaceholder.typicode.com/todos/1 ...');
    cont4.appendChild( getp);
    postData = {name: 'Juan'}
    httpPost('https://jsonplaceholder.typicode.com/todos', JSON.stringify(postData), (data) => {
        cont4.appendChild( createP(' response is:'));
        cont4.appendChild( clearJsonToHTML(data));

        dataObject = JSON.parse(data);
        dataString = JSON.stringify(dataObject);
    })



    // using fetch 

    write('fetcth','h3');

    write('this is the  fetch message board','div','secondcont fetch');
    let cont5 = document.querySelector('.fetch');

    getp = createP('fetching https://jsonplaceholder.typicode.com/todos/1 ...');
    cont5.appendChild( getp);

    fetch('https://jsonplaceholder.typicode.com/todos/1')           // GET is default, retunrns a promise
        .then(res => res.json())                                // to resolve the promise and get the data
        .then(data => {                                         // to return data as json object
            cont5.appendChild( clearJsonToHTML(JSON.stringify(data)));
        })   
   
    // full fetch get
    // fetchPeticion = fetch('https://jsonplaceholder.typicode.com/todos/1') // GET is default
    // fetchPeticion.then( (response) => {
    // if (response.status >= 200 && response.status < 300) {
    //     return response.json();
    // } else {
    //     throw new Error('Network response was not ok.');
    // }
    // }).then( (data) => {
    //     cont5.appendChild( createP(' response is:'));
    //     cont5.appendChild( clearJsonToHTML(JSON.stringify(data)));
    // }
    // ).catch( (error) => {
    //     cont5.appendChild( createP(' fetch error: ' + error));
    // });

    //fetch POST
    cont5.appendChild( createP('now POSTing to https://reqres.in/api/users: ...'));
    fetch('https://reqres.in/api/users', {
            method: 'POST', // or 'PUT
            body: JSON.stringify({
                "nombre": "lucas", "apellido": "perez"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            cont5.appendChild( createP('POST response is:'));
            cont5.appendChild( clearJsonToHTML(JSON.stringify(data)));
        })
        .catch((error) => {
            cont5.appendChild( createP(' fetch error: ' + error));
        });
    
   
    //fetch async await
    const asyncFetch = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    cont5.appendChild( createP('async fetch to  https://jsonplaceholder.typicode.com/todos/3 ...'));
    asyncFetch('https://jsonplaceholder.typicode.com/todos/3').then((data) => {
        cont5.appendChild( createP('async fetch response is:'));
        cont5.appendChild( clearJsonToHTML(JSON.stringify(data)));
    })
        



    //using axios
    write('axios','h3');

    write('this is the  axios message board','div','secondcont axios');
    let cont6 = document.querySelector('.axios');


    //get with axios
    getp = createP('axios get https://jsonplaceholder.typicode.com/todos/1 ...');
    cont6.appendChild( getp);

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then( (response) => {
            cont6.appendChild( createP('axios get response is:'));
            cont6.appendChild( clearJsonToHTML(JSON.stringify(response.data)));
        })
        .catch( (error) => {
            cont6.appendChild( createP(' axios error: ' + error));
        });

    // post with axios
    cont6.appendChild( createP('now POSTing to https://reqres.in/api/users: ...'));
    axios.post('https://reqres.in/api/users', {
            "nombre": "lucas", "apellido": "perez"
        })
        .then((response) => {
            cont6.appendChild( createP('axios POST response is:'));
            cont6.appendChild( clearJsonToHTML(JSON.stringify(response.data)));
        })
        .catch((error) => {
            cont6.appendChild( createP(' axios error: ' + error));
        });

        // axios async await
        const asyncAxios = async (url) => {
            const response = await axios.get(url);
            return response.data;
        }

        cont6.appendChild( createP('async axios to  https://jsonplaceholder.typicode.com/todos/3 ...'));
        asyncAxios('https://jsonplaceholder.typicode.com/todos/3').then((data) => {
            cont6.appendChild( createP('async axios response is:'));
            cont6.appendChild( clearJsonToHTML(JSON.stringify(data)));
        })
        
    



    write('','br')
    write('','br')
    write('this is the end. Thanks you for watching my code','h4');

    let a = document.createElement('A');
    a.href = '/page4.html';
    a.textContent = 'or continue in page 4 to view the advance level of javascript code';
    document.body.appendChild(a);
    window.scrollTo(0, document.body.scrollHeight);
    
} catch (error) {
  write("Error " + error + " on line " + error.lineNumber,'div','yellow');
}



