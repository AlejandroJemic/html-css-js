// backtick `${}`
function write(text, tag = undefined, className = undefined, type = undefined) {
    if(tag === undefined || tag === '') tag ='p';
    let element = document.createElement(tag);
    if (className !== undefined) element.className = className;
    if (type !== undefined) element.type = type;
    element.innerHTML = text;
    document.body.append(element);
}

try {
    write("MASTER LEVEL Javavascript", "h1");
    write("wlecome to page 4. this is the advance level of javascript code", "div", "maincont");
   
    // Prototipos ****************************************************************************************************
    write('__prto__ and prototype','h2');
    write('see examples and commnents in soruce code');
    // es la forma antigua de hacer herencia y clases en JS
    
    let objeto = {"propiedad": "datos"}
    console.log(objeto.__proto__  === Object.prototype) //true
    // todos los prototipos tienen la propiedad __proto__ que es un objeto nativo
    // al hacer herencia se van a ir haciendo herencia de los prototipos
    // __proto__ es un objeto nativo
    // contiene la definicion de todos lso metodos nativos del tipo de dato, ej array.reverse()
    // What It Is: __proto__ is an internal property of objects that points to the prototype of the object’s constructor.
    // Purpose: It is used to access the prototype chain of an object. Essentially, __proto__ allows an object to inherit properties and methods from another object.
    // Usage: It's generally not recommended to use __proto__ directly in modern JavaScript because it's considered outdated. Instead, methods like Object.getPrototypeOf() and Object.setPrototypeOf() are preferred.

    function Person(name) { this.name = name; }
    
    Person.prototype.greet = function() {console.log('Hello, ' + this.name);};
    
    let alice = new Person('Alice');
    alice.greet(); // "Hello, Alice"
    
    console.log(alice.__proto__ === Person.prototype); // true
    // al crear una funcion automaticamente se crea un prototype, no confundir con __proto__
    // What It Is: prototype is a property of functions (specifically, constructor functions) that is used when creating new objects with that function. Every function in JavaScript has a prototype property, which is an object itself.
    // Purpose: The prototype property is used to set up inheritance. When you create a new object using a constructor function, the new object’s __proto__ is set to the constructor’s prototype.
    // Usage: It is commonly used when defining methods that should be available on all instances of a particular constructor function.

    // Caracteristicas de los prototipos
    // Dunder Proto 
    // Sobrescribir _proto_ vs método
    // los prototypes sun putable, lo que implica que puedo redefinir una clase o un objeto !!!
    class myObj { 
        constructor (){}
        hablar() { console.log("hola")}
    }
    const myObjInstance = new myObj();
    myObjInstance.__proto__.hablar = () => console.log("hablar fue modificado");
    // los prototipos se pueden cuasi heredar entre distintos tipos, como cajas de herramientas compartidas
    let arr = []
    arr.__proto__ = myObjInstance;
    arr.hablar();

    // Modo estricto (use strict)*************************************************************************************
    write('"use strict"','h2');
    write('see examples and commnents in soruce code');
    // comvierte todos lso errores de js en exepcciones
    // mejora los tiempos de ejecucuion
    // evita el uso de sintaxis obsoletas (post ES6)
    // como se usa:
    // "use strict"; // se agrega al principio del codigo, o bloque de codigo para scope local
    // las variables tienen que ser declaradas 
    const obj2 = { }
    // los objetos no pueden ser redefinidos o reasignados
    Object.defineProperty(obj2, "nombre", {value: "juan", writable: true});
    console.log(obj2);

    // obliga a seguir las reglas de extension definidas
    Object.preventExtensions(obj2); // inpider la extensión
    Object.isExtensible(obj2);      // habilita la extencion

    // no perimite agregar propiedades a lso strings
    const str1 = "hola";
    //str1.val1 = "hola"; // genera una exepcion

    // no existen las multiples variables en una funcion
    function fun1(texto,texto) {return texto;} // genera una exepcion
    // impide hacer delete en objetos y variables
    // delete obj2; // genera una exepcion, 
    // solo se pueden borrar propiedades
    delete obj2.nombre;
    // las palabras reservadas no pueden ser usadas como variables

    // cambia el this, se elimina y solo puede ser empleado desde la clase o methodo
    function saludar() { this.hola = "hola"; }
    const obj3 = new saludar(); // genera una exepcion, ya no se emplea el new
    obj3.hola = "hola";         // generea otra exepccion, hola solo existe dentro del scope de la funcion constructora
    // los numeros octales deden empesar con 0o
    console.log("0o25 =" + 0o25); // 21 , es el modo correcto
    // argument y eval no pueden ser variables


    // Funciones flecha ********************************************************************************************
    write('arrow functions','h2');
    write('see examples and commnents in soruce code');
    const arrowf = text => text; // return text
    const arrowf2 = (text, text2) => text+text2; // return text
    const arrowf3 = (text, text2) => {
        let final = text+text2;
        return final
    } // return text
    const arrowf4 = () => {console.log('this is an arrow function')} // logs message
    
    // no son apropiadas para ser usadas como metodos
    const obj4 ={
        nombre: "juan",
        saludar1: function() {console.log(this.nombre)}, // <---this ok 
        saludar2: () => {console.log(this.nombre)}       // <---this is a an error !!!!!!!!!!!
    }
    obj4.saludar1(); // is ok
    obj4.saludar2(); // is undefined becouse this (extern this) dont exist in arrorw functions, it references the window global object

     // no pueden ser usadas como constructores
    //  const arrowf5 = (p1,p2) =>{ 
    //     this.p1 = p1;
    //     this.p2 = p2;
    //  }
    //  const obj5 = new arrowf5(1,2); // genera una exepcion!!!!
    //el modo correcto  the definir funciones constructores es:
    function Fun1(text1, text2) {
       this.p1 = text1;
       this.p2 = text2; // solo puedo definir propiedades
    }
    // para agregar metodos debo emplear el prototype:
    Fun1.prototype.concat = function() { return this.p1 + this.p2;}
    let obj6 = new Fun1("1","2");
    console.log(obj6.concat());
    //pero hoy en dia es mas recomendado usar class!!!!!


    // This contextual
    // this referencia al objeto en el scope actual
    // las reglas sobre 'this' en sctrict mode son ignoradas con arrow func
    
    // arrow functions  sin call apply y bind
    // Arrow functions do not have their own this value. Instead, they inherit the this value from the surrounding scope. This means that if you use an arrow function inside a method of an object, it will have the same this value as the method it's inside of.

    // no tinenen objeto arguments
    // no tienen objeto prototype
    // no se puede usar Yield ( por tanto no sirven com ofunciones generadoras)



    // bind, call, and apply *****************************************************************************************
    write('bind call apply','h2');
    write('see examples and commnents in soruce code');
    // are methods in JavaScript that allow you to change the this value inside a function. 
    //They are used to control the execution context of a function.
    
    // bind creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
   
    // bind:
    const obj7 = { name: 'John' };
    const greet2 = function() { console.log(`Hello, ${this.name}!`); };
    const greetJohn = greet2.bind(obj7);
    greetJohn(); // Output: "Hello, John!"
   
    // call and apply are similar to bind, but they immediately invoke the function with the provided arguments. They take the this value as the first argument, followed by the arguments.
    // call:
    const obj8 = { name: 'John' };
    const greet3 = function(greeting) { console.log(`${greeting}, ${this.name}!`); };
    greet3.call(obj8, 'Hello'); // Output: "Hello, John!"
    
    // apply:
    const obj9 = { name: 'John' };
    const greet4 = function(greeting) { console.log(`${greeting}, ${this.name}!`); };
    greet4.apply(obj9, ['Hello']); // Output: "Hello, John!"
  
    // Recursividad
    // son funciones que se llaman a si mismas , ojo colapso de memoria
    function validarEdad(msg){
        try {
            if (msg) edad = promp(msg)
            else edad = promp("ingrese su edad")
            if(isNaN(parseInt(edad))) throw "no es un numero"
        } catch (err) { validarEdad(err)}
    }

    // Clausuras (o closures) ******************************************************************************************
    write('clousures','h2');
    write('see examples and commnents in soruce code');
    // son funciones que retornan otras funciones
    function saludar(texto) {
        return function() {return texto;}
    }
    let user = undefined
    let saludo1 = saludar("pedro");
    let saludo2 = saludar("hola desconosido");
    if(user) saludo1()
    else saludo2();

    // Destructuración 
    // Parametro Rest spread ***********************************************************************************
    write('destructuring with rest and spread','h2');
    write('see examples and commnents in soruce code');
    // Rest is used to represent an indefinite number of arguments as an array.
    function sumar (...numeros) { // tiene que ser el ultimo parametro siempre
        let total = 0
        numeros.forEach(num => total += num);
        return total;
    }
    sumar(12,14)
    // Spread is used to spread the elements of an iterable (array or string) into distinct elements of an array.
    array1 = [1,2,3]
    aaray2 = [...array1, 4,5,6]


    // Operador ternario (o condicional) **************************************************************************
    write('ternary operator','h2');
    write('see examples and commnents in soruce code');
    function restar(a,b) {
        b = b || 0;
        return b ? a-b : a; // si b resto a - b , si no retornar a
    }


    //  APIs  de js *******************************************************************************************************
    write('js internal APIs','h1');

    //  bjeto Date ****************************************************************************************************
    write('date object','h2');
    write('see examples and commnents in soruce code');
    let d = new Date();
    d.setTime(Date.now())
    console.log(d)
    console.log('getDate: ' + d.getDate());
    console.log('getDay: ' + d.getDay());
    console.log('getFullYear: ' + d.getFullYear());
    console.log('getHours: ' + d.getHours());
    console.log('getMilliseconds: ' + d.getMilliseconds());
    console.log('getMinutes: ' + d.getMinutes());
    console.log('getMonth: ' + d.getMonth());
    console.log('getSeconds: ' + d.getSeconds());
    console.log('getTime: ' + d.getTime());
    console.log('getUTCDate: ' + d.getUTCDate());
    console.log('getUTCHours: ' + d.getUTCHours());
    console.log('getUTCMilliseconds: ' + d.getUTCMilliseconds());
    console.log('getUTCMinutes: ' + d.getUTCMinutes());
    console.log('getUTCMonth: ' + d.getUTCMonth());
    console.log('getUTCSeconds: ' + d.getUTCSeconds());
    console.log('getYear: ' + d.getYear());
    console.log('toDateString: ' + d.toDateString());
    console.log('toGMTString: ' + d.toGMTString());
    console.log('toLocaleDateString: ' + d.toLocaleDateString());
    console.log('toLocaleTimeString: ' + d.toLocaleTimeString());
    console.log('toLocaleString: ' + d.toLocaleString());
    console.log('toString: ' + d.toString());
    console.log('valueOf: ' + d.valueOf());
    console.log('toJSON: ' + d.toJSON());

    d.setDate( d.getDate() + 1 )
    d.setFullYear( d.getFullYear() + 1 )
    d.setHours( d.getHours() + 1 )
    d.setMilliseconds( d.getMilliseconds() + 1 )
    d.setMinutes( d.getMinutes() + 1 )
    d.setMonth( d.getMonth() + 1 )
    d.setSeconds( d.getSeconds() + 1 )
    d.setTime( d.getTime() + 1 )
    d.setUTCDate( d.getUTCDate() + 1 )
    d.setUTCHours( d.getUTCHours() + 1 )
    d.setUTCMilliseconds( d.getUTCMilliseconds() + 1 )
    d.setUTCMinutes( d.getUTCMinutes() + 1 )
    d.setUTCMonth( d.getUTCMonth() + 1 )
    d.setUTCSeconds( d.getUTCSeconds() + 1 )
    d.setYear( d.getYear() + 1 )

    console.log(d)
    
    let d2 = new Date('2022-07-25T14:30:00');
    let d3 = new Date(2024,4,12,14,30,0,0);

    


    //using moment.js
    //cdn:
    //<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    // import moment from 'moment';
    // nodejs
    // npm install moment --save
    // require('moment')
    const fecha = moment('2022-07-25T14:30:00');
    console.log(fecha.format('MMMM D, YYYY h:mm:ss A')); // Julio 25, 2022 2:30:00 PM


    //  Reloj con Date
    write('clock with Date','H2');
    write('','div', 'secondcont reloj');
    let hr = document.createElement('div');
    let min = document.createElement('div');
    let sec = document.createElement('div');

    let reloj = document.querySelector('.reloj');
    reloj.append(hr, min, sec);

    setInterval(() => {
        let d = new Date();
        hr.innerHTML = d.getHours().toString().padStart(2, '0');
        min.innerHTML = d.getMinutes().toString().padStart(2, '0');
        sec.innerHTML = d.getSeconds().toString().padStart(2, '0');
    }, 1000);

    //  LocalStorage y SessionStorage *********************************************************************
    write('Localstorage y SessionStorage','h2');
    write('see examples and commnents in soruce code');
    //  LocalStorage es Caché local , solo se pierde al eliminarlo explisitamante, ojo con data sensible
    //  SessionStorage es Caché session, se pierde al cerrar la pagina
    // ambas tienen los mismos métodos y propiedades

    //  LocalStorage y SessionStorage son objetos de JavaScript
    localStorage.setItem('key', 'value');
    localStorage.getItem('key');
    localStorage.removeItem('key');
    localStorage.clear();

    sessionStorage.setItem('key', 'value');
    sessionStorage.getItem('key');
    sessionStorage.removeItem('key');
    sessionStorage.clear();

    //  Definir idioma con LocalStorage
    localStorage.setItem('idioma', 'es');
    localStorage.getItem('idioma');
    if(localStorage.getItem('idioma') === 'es'){
        document.documentElement.lang = 'es';
    }
    else{ document.documentElement.lang = 'en'; }


    //  Drag & Drop ***********************************************************************************

    write('DRAG AND DROP','h2');
    write('','div', 'secondcont dropcont');
    let cuadrado = document.createElement('div');
    cuadrado.classList.add('cuadrado');
    let circulo = document.createElement('div');
    circulo.classList.add('circulo');
    document.querySelector('.dropcont').append( cuadrado, circulo);

    circulo.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('clase', e.target.className);
    
    });
    circulo.addEventListener('drag', (e) => {});
    circulo.addEventListener('dragend', (e) => {});

    cuadrado.addEventListener('dragenter', (e) => {});
    cuadrado.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    cuadrado.addEventListener('drop', (e) => {
        console.log(e.dataTransfer.getData('clase'));
        circulo.style.left =  circulo.style.left - 115 + 'px';
    });
    cuadrado.addEventListener('dragleave', (e) => {});


    //  geolocation ************************************************************************************
    write('geolocation','h2');
    write('','div', 'secondcont geo');
    const geolocation = navigator.geolocation
    const position = (getCurrentPosition) => {
        console.log('position', position)
        let geo = document.querySelector('.geo');
        geo.innerHTML = `LAT: ${getCurrentPosition.coords.latitude} LONG: ${getCurrentPosition.coords.longitude}`
    }
    const err = (err) => {
        console.log('err', err)
    }
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
    geolocation.getCurrentPosition(position, err, options)
    let id = geolocation.watchPosition(position, err, options) // enable watching the position to get a continuous stream of position updates
    geolocation.clearWatch(id) // clear the watch
    
    
    //  History API ***********************************************************************************
    write('History API','h2');
    write('POR RAZONES DE SEGURIDAD NO SE PUEDE ACCEDER A LISTADO DEL HISTORIAL , SOLO USAR LOS METODOS PARA NAVEGAR POR EL','','yellow');
    write('history length: ' + window.history.length);
    write('history.back(): ' +  window.history[window.history.length-1]);
    write('history.forward(): ' +  window.history[window.history.length+1]);
    write('history.go(-2): ' +  window.history[window.history.length-2]);
    write('location.href :' +  window.location.href);
    write('history.state :' +  window.history.state);


    write('Puedes usar pushState o replaceState para modificar la URL y el estado de la sesión sin recargar la página:');
    
    write('window.history.pushState({page: 1}, "title 1", "?page=1");');
    write('window.history.replaceState({page: 2}, "title 2", "?page=2")');

    // Puedes escuchar cambios en el historial utilizando el evento popstate:

    window.addEventListener('popstate', function(event) {
        console.log('Location: ' + document.location + ', State: ' + JSON.stringify(event.state));
    });


    //  FileReader ******************************************************************************************
    write('input file and FileReader','h2');
    write('fileReader readAsText()','div', 'secondcont fileboard');
    write('','input', 'maincont filecont','file');

    const fileboard = document.querySelector('.fileboard');
    const archivo = document.querySelector('.filecont');

   
    let reader = new FileReader();
    const leerArchivo = (file) => {
        let name = document.createElement('P');
        name.innerHTML = 'selected file: ' + file.name
        fileboard.appendChild(name);
        // get the filename extencion
        let ext = file.name.split('.').pop();
        reader.readAsText(file);
        reader.onload = () => {
            if(ext !== 'json')
                writeFileCont( reader.result.substring(0, 200) + '...', fileboard)
            else {
                jsonData = JSON.parse(reader.result);
                writeFileCont(reader.result, fileboard)
            }
        }
    }
    archivo.addEventListener('change', (e) => {
        // archivo.files[0].text().then((text) => {
        //     console.log(text);
        // })
        leerArchivo(archivo.files[0]);
    });

    function writeFileCont(text, fileboard) {
        let content = document.createElement('P');
        content.innerHTML = 'content: ' +  text ;
        fileboard.appendChild(content);
    }

    write('FileReader readAsDataURL()','div', 'secondcont fileboard2');
    write('','input', 'maincont filecont2','file');

    const archivo2 = document.querySelector('.filecont2');
    archivo2.setAttribute('multiple', '');
    archivo2.accept = '.jpg,.jpeg,.png,.svg';
    const fileboard2 = document.querySelector('.fileboard2');
    archivo2.addEventListener('change', (e) => {
        // archivo.files[0].text().then((text) => {
        //     console.log(text);
        // })
        leerArchivoS(archivo2.files);
    });

    function leerArchivoS(files) {
        for (let i = 0; i < files.length; i++) {
            let name = document.createElement('P');
            name.innerHTML = 'selected file: ' + files[i].name
            fileboard2.appendChild(name);
            // get the filename extencion
            let ext = files[i].name.split('.').pop();
            let reader2 = new FileReader();
            reader2.readAsDataURL(files[i]);
            reader2.addEventListener('load', (ev) => {
                if (['jpg', 'jpeg', 'png', 'svg'].includes(ext))
                {
                    let content = `<img src='${ev.currentTarget.result}'>`;
                    fileboard2.innerHTML += (content);  
                    // fileboard2.appendChild(content);   // this throws an DOMException  !!!!! 
                } 
            }
            );
        }
    }
    

    //  FileReader + Drag &  ******************************************************************************
    write(' FileReader + Drag & Drop','h2')
    write('Drag a drop your image video or text file here','div', 'secondcont cuadrado2');
    write('','div', 'secondcont resultado');

    let zona = document.querySelector('.cuadrado2');
    zona.addEventListener('dragover', (e) => {
        e.preventDefault();
        changeStyle(e.target, 'green');
    });
    zona.addEventListener('dragleave', (e) => {
        e.preventDefault();
        resetStyle(e.target);
    });

    zona.addEventListener('drop', (e) => {
        e.preventDefault();
        resetStyle(e.target);
        CargarArchivo(e.dataTransfer.files[0]);
    });


    resultado = document.querySelector('.resultado');
    function CargarArchivo(file) {
        const reader = new FileReader();

        let ext = file.name.split('.').pop();
        if(['jpg', 'jpeg', 'png', 'svg'].includes(ext))
        {
            loadImage();
        }
        //validate if file is a video
        else if(['mp4', 'ogg', 'webm', 'mov', 'mkv','avi'].includes(ext))
        {

            appendProgressBar();
            reader.readAsArrayBuffer(file);
            reader.addEventListener('load', (ev) => {
                let video = new Blob([new Uint8Array( ev.currentTarget.result)], {type: 'video/' + ext});
               
                let url = URL.createObjectURL(video);
                let videoplayer = document.createElement('video');
                videoplayer.src = url;
                videoplayer.controls = true;
                resultado.appendChild(videoplayer);
                removeProgressBar();
                videoplayer.addEventListener('canplay', () => {
                    videoplayer.play(); // Reproduce el video cuando esté listo
                });
            
                // Establece el tamaño del video
                videoplayer.width = 640; // o el tamaño que desees
                videoplayer.height = 360; // o el tamaño que desees
            })
        }
        else
        {   
            loadTextFile();
        }

        function removeProgressBar() {
            zona.textContent = 'Drag a drop your image video or text file here';
            zona.removeChild(progressB);
        }

        function appendProgressBar() {
            let progressB = document.createElement('DIV');
            progressB.className = 'barra_progreso';
            zona.replaceChildren();
            zona.appendChild(progressB);
            reader.addEventListener('progress', (ev) => {
                let fileSize = file.size;
                let loaded = ev.loaded;
                let progres = Math.round((loaded / fileSize) * 100);

                progressB.textContent = `${progres}%`;
                progressB.style.width = `${progres}%`;
                progressB.style.left = `${50 - progres / 2}%`;
            });
        }

        function loadTextFile() {
            reader.readAsText(file);
            reader.addEventListener('load', (ev) => {
                resultado.textContent = ev.currentTarget.result;
               
            });
        }

        function loadImage() {
            appendProgressBar();
            reader.readAsDataURL(file);
            reader.addEventListener('load', (ev) => {
                let url = ev.currentTarget.result;
                let img = document.createElement('img');
                img.src = url;
                resultado.appendChild(img);
                removeProgressBar();
            });
        }
    };

    changeStyle = (obj, color) => {
        obj.style.color = color;
        obj.style.border = 'dashed 4px black';
    }
    function resetStyle(obj) {
        obj.style.color = 'black';
        obj.style.border = 'dashed 2px black';
    }
    
    //  IndexedDB
    //  IndexedDB + Drag & Drop

    //  MatchMedia
    //  Intersection Observer
    //  Lazy Load
    //  Notifications 
    //  Web Workers
    //  Same Origin Politic
    //  Objeto Navigator
    //  Memoization
    //  Caché
    //  Service Workers
    //  Reto del Chat Realtime
    //  Cachear sitio web y mostrarlo offline
    //  Cookies
    //  Crear aviso de uso de cookies
    //  Objeto Screen
    //  Objeto Canvas
    //  Crear un web paint


    //  Cargar páginas dinámicas

    write('','br')
    write('','br')
    write('this is the end. Thanks you for watching my code','h4');

    let a = document.createElement('A');
    a.href = '/page5.html';
    a.textContent = 'or continue in the next page to view aweresome javascript code';
    document.body.appendChild(a);
    window.scrollTo(0, document.body.scrollHeight);
      
  } catch (error) {
    write("Error " + error + " on line " + error.lineNumber,'div','yellow');
  }


  