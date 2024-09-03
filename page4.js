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
    

    //  FileReader + Drag &  Drop ******************************************************************************
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
    
    //  IndexedDB *************************************************************************************
    write(' IndexedDB ','h2')
    write('see examples and coments in soruce code')
    write('or play in the console with the following CRUD commands:')
    write(' - AddObject(obj, "nombres")');
    write(' - readAllObjecs("nombres")');
    write(' - getObjectByKey("nombres", key)');
    write(' - updateObject(obj, key, "nombres")');
    write(' - deleteObject(key, "nombres")');
    write(' - getObjectByValue("nombres", property, value)');

    // es asincrona, es orientada a objetos, trabaja con eventos del DOM
    const storeName = 'nombres';
    let versionNum = 1;
    // abrir la connexión
    const IDBConnection = window.indexedDB.open('IDBStorage',versionNum); // abre/crea la base de datos
    
    // crear el alamacen de datos
    IDBConnection.addEventListener('upgradeneeded', (ev) => { // watch for upgradeneeded - create tables
        const  db =  IDBConnection.result;
        db.createObjectStore(storeName, 
            { autoIncrement: true}
            );
        db.addEventListener('success', (ev) => {console.log('created store')})
    });

    // ver estado de la connecxión
    IDBConnection.addEventListener('success', (ev) => { // watch for success 
        console.log('connection success',  IDBConnection.result);
    });
    IDBConnection.addEventListener('error', (ev) => { // watch for error
        console.log('connection error',  IDBConnection.result);
    });

    // CRUD
    // agregar datos(objetos) a un db store determinado
    function AddObject(obj, store) {
        const db = IDBConnection.result;
        const IDBtx = db.transaction([store], 'readwrite');
        const DBObject = IDBtx.objectStore(store);
        DBObject.add(obj);
        IDBtx.addEventListener('complete', (ev) => {
            console.log('added object to ' + store, obj);
        })
        IDBtx.complete;
    }

    //leer objetos de un store
    function readAllObjecs(store) {
        const db = IDBConnection.result;
        const IDBtx = db.transaction([store], 'readwrite');
        const DBObject = IDBtx.objectStore(store);
        const cursor = DBObject.openCursor(); // <----------------- openCursor !!!!!
        cursor.addEventListener('success', (ev) => {
            if (cursor.result) {
                console.log(cursor.result.value);
                cursor.result.continue();
            }
            else console.log('end of cursor');
        });
    }

    //actualizar objetos
    function updateObject(obj, key, store) {
        const db = IDBConnection.result;
        const IDBtx = db.transaction([store], 'readwrite');
        const DBObject = IDBtx.objectStore(store);
        DBObject.put(obj,key); //<------------------------------- PUT 1!!!!!  insert or update
        IDBtx.addEventListener('complete', (ev) => {
            console.log('update object to ' + store, obj);
        })
        IDBtx.complete;
    }

    // eliminar objetos
    function deleteObject(key, store) {
        const db = IDBConnection.result;
        const IDBtx = db.transaction([store], 'readwrite');
        const DBObject = IDBtx.objectStore(store);
        DBObject.delete(key); //<------------------------------- DELETE 1!!!!! 
        IDBtx.addEventListener('complete', (ev) => {
            console.log('deelte object to ' + store + ' at key ' + key);
        })
        IDBtx.complete;
    }


    // leer un objeto con una key espesifica
    function getObjectByKey(store, key) {
        const db = IDBConnection.result;
        const IDBtx = db.transaction([store], 'readonly');
        const DBObject = IDBtx.objectStore(store);
        const request = DBObject.get(key);
        request.addEventListener('success', (event) => {
            if (request.result) {
              console.log('se encontro el objeto ' + JSON.stringify(request.result));
        }});
    }
    

    // leer un objeto que contenga una propiedad con un valor espesifico
    // nombres => nombre = 'juan'
    function getObjectByValue(store, property, value) {
        const db = IDBConnection.result;
        const IDBtx = db.transaction([store], 'readonly');
        const DBObject = IDBtx.objectStore(store);
        const cursor = DBObject.openCursor();
        const results = [];  // Array para almacenar los objetos coincidentes
        cursor.addEventListener('success', (event) => {
            if (cursor.result) {
                if (cursor.result.value[property] === value) {
                    console.log(` se encotro un objeto ${property} = ${value} en ${store}`);
                    results.push(cursor.result.value);  // Añadir objeto coincidente al array
                }
                cursor.result.continue();
            } else {
               console.log('busqueda finalizada:', results);
            }
        });
    }

    // delete store object (empela el mismo evento upgradeneeded que para crearlas )
    // request.addEventListener('upgradeneeded', (ev) => {
    //     const db = ev.target.result;
    //         const deleteStoreName = 'tasks';
    //     // Verifica si el object store existe antes de intentar eliminarlo
    //     if (db.objectStoreNames.contains(deleteStoreName)) {
    //         db.deleteObjectStore(deleteStoreName);
    //         console.log('Object store ' + deleteStoreName + ' eliminado exitosamente.');
    //     } else {
    //         console.log('El object store ' + deleteStoreName +' no existe.');
    //     }
    // });





    //  MatchMedia ******************************************************************************
    write(' MatchMedia ','h2')
    write('see examples and coments in soruce code')
    // para trabajar con responsive desing pero cosas que no se pueden lograr con css normal
    // media querys
    write('','div',' secondcont mqdiv')
    mqdiv = document.querySelector('.mqdiv');

    const mq = window.matchMedia('(max-width: 600px)'); 
    function handleWidthChange(ev) {
        if (mq.matches) {
           mqdiv.textContent = 'el tamaño de la pantalla es de 600px';
        }
        else{
            mqdiv.textContent = 'max-width: 600px = dont match';
        }
    }
    mq.addEventListener('change', handleWidthChange);
    handleWidthChange();




    //  Intersection Observer *****************************************************************
    write(' Intersection Observer ','h2')
    write('','div',' secondcont observer')
    //es para ver si algo es visible o no en el viewport
    const observerdiv = document.querySelector('.observer');

    const obs_options ={
        rootMargin: '0px 0px 0px 0px', // margenes en el viewport para que se vea
        treshold: 0.5 // a que altura del elemento se considera viseble, 1: se ve completo, 0: apenas visible
    }
    const observer = new IntersectionObserver(calback_Observer, obs_options); //<-----------------
    
    function calback_Observer(entries){
        
        // for a single element 
        const entry = entries[0];
        if(entry.isIntersecting)
        {observerdiv.textContent = 'isIntersecting = true';}

        // for al the elements
        for(myEntry of entries){
           if(myEntry.isIntersecting){
               //{console.log('se esta viendo la caja ' + myEntry.target.textContent);
            }
        }
    }
    // for a single eleement
    observer.observe(observerdiv);

    // for al the elements
    divs = document.querySelectorAll('.secondcont');
    for (const currentDiv of divs) {
        observer.observe(currentDiv)
    }
    


    //  Lazy Load ***************************************************************************
    /*
    aprovechamos el IntersectionObserver
    para hacer lazy loading de elementos cuando tengo nuevo scroll
    */
   
    write(' Lazy Load ','h2')
    write('see examples and coments in soruce code')
    write('','div',' secondcont Lazy')

    //container
    let publications = document.querySelector('.Lazy');
    
    let contador = 1;
    let lastshow = false;
    // ftech and write publications
    const getPublicaciones = async (num) => {
        const req = await fetch('publications.json');
        const content = await req.json();
        const arr = content.publications;
        const fragment = document.createDocumentFragment();
        for(let i = 0; i < num; i++){
            if( arr[contador] !== undefined) 
            {
                const newPublication = document.createElement('div');
                newPublication.className = 'cuadrado3';
                newPublication.innerHTML = contador.toString() + '</br> ' + arr[contador].title + '</br> ' + arr[contador].text;
                fragment.appendChild(newPublication);
                contador++;
                if(i == num -1) observerLazy.observe(newPublication); //< ------------------- MOST IMPOTANT LINE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }else if(lastshow === false){
                let final = document.createElement('h4');
                final.textContent = "end of publications";
                fragment.appendChild(final);
                lastshow = true;
                break;
            }
        }  
        publications.appendChild(fragment);
    }


    const callback_publications = (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            getPublicaciones(2);
        }
    };
    const observerLazy = new IntersectionObserver(callback_publications );

    // write initial publications
    getPublicaciones(2);


    // visibility Change ***********************************************************************
    write(' visibility Change ','h2')
    write('see examples and coments in soruce code')
    // usefull to control stop playing videos or other elements when the page is not visible

    write('','div','visibility green')
    let visibility = document.querySelector('.visibility');

    window.addEventListener('visibilitychange', (ev) => {
        if(ev.target.visibilityState === 'visible')    
        {
            console.log('la pestana es visible'); 
            visibility.textContent = 'la pestana es visible';
        }
        else
        {console.log('la pestana es oculta');}
    
    })
    

    //  Notifications *****************************************************************************
    write(' Notifications ','h2')
    write('see examples and coments in soruce code')
    write('','input','notif-input','text');
    write('send','button','send-button');
    let textinput = document.querySelector('.notif-input');
    textinput.placeholder = 'enter notification text';

    //validate if the browser supports notifications
    if(!'Notification' in window){
        write('Notification API isn\'t supported','div','yellow');
    }else{
        write('Notification API is supported','div','green');
    }

    //request permission
    Notification.requestPermission( () => {
        if(Notification.permission === 'granted')
        {  
            console.info('Notifications are granted');
        }
        else
        {
            console.error('Notifications are not granted');
        }
    });


    document.querySelector('.send-button').addEventListener('click', () => {
        sendNotification(textinput.value);
        textinput.value = '';
    });

    function sendNotification(msg, body){
        if(Notification.permission === 'granted') new Notification(msg, {body: body});
        else  console.error('Notifications are not granted');
    }
    

    // Web Workers *****************************************************************************
    write(' Web Worker ','h2')
    write('see examples and coments in soruce code')
    // permiten ejecutar tareas en paralalo para no bloquear el hilo de la pagina
    // tipos (dedicated worker, shared worker, service worker, abstract worker)
    // dedicated worker: Worker() (constructor)
    // el worker no tiene el objeto window por tanto su api es mucho mas limitada
    // parametro options (type, credential y name)
    // metodo postMessage() (enviar mensajes entre el worquer y el script principal)
    // eneto onmessage (recibir mensajes entre el worquer y el script principal)
    // metodo terminate() (finalizar la ejecucion y destruir el worker)
    // politica de origen cruzado (same-origin, cross-origin)
    // event loop y modelo de concurrencia (single thread, multi thread)
    const myworker = new Worker('worker.js');

    write('','input','worker-input','text');
    let workerinput = document.querySelector('.worker-input');

    write('post Message','button','send-button2');
    postButton = document.querySelector('.send-button2');
    postButton.addEventListener('click', () => {
        console.log('sending message: ' + workerinput.value);
        myworker.postMessage(workerinput.value);
    })

    write('','div','secondcont worker','text');
    let textinput2 = document.querySelector('.worker');
 
    myworker.addEventListener('message', (ev) => { 
        textinput2.textContent = ev.data + ' (check out console logs)'; 
        postButton.innerHTML = 'no more messages';
        postButton.setAttribute('disabled', '');
        myworker.terminate();
        console.log('worker is terminated');
    });

   

 
    //  Objeto Navigator **********************************************************************
    write(' Objeto Navigato ','h2')
    write('see examples and coments in soruce code')
    // interfaces de objetos navigator:
    // navigatorID
    // navigatorLanguage
    // navigatorOnLine
    // navigatorContentUtils
    // navigatorStorageUtils
    // navigatorCookies
    // navigatorCurrentHardware
    // navigatorPlugins
    // navigatorUserMedia    

    //propiedades estandar del navegador
    // navigatorID.appCodeName // devuelve el nombre codigo del navegador. no siempre es el correcto
    // navigatorID.appName // devuelve el nombre oficial del navegador. no siempre es el correcto
    // navigatorID.appVersion // devuelve la version del navegador. no siempre es el correcto
    // networkInformation.conection // devuelve un objeto  networkInformation con informacion de la red
    
    // navigatorGeolocation.geolocation // devuelve un objeto navigatorGeoLocation
    // navigatorCurrentHardware.hardwareConcurrency // devuelve el numero de nucles logicos disponibles
    
    // navigatorLanguage.language // devuelve el idioma del navegador. no siempre es el correcto
    // navigatorLanguage.userLanguage // devuelve el idioma del navegador. no siempre es el correcto
    // navigatorLanguage.browserLanguage // devuelve el idioma del navegador. no siempre es el correcto
    // navigatorOnLine.onLine // devuelve un booleano que indica si el navegador se encuentra conectado a la red
    // navigatorContentUtils.cookieEnabled // devuelve un booleano que indica si las cookies estan habilitadas
    // navigatorStorageUtils.appCacheEnabled // devuelve un booleano que indica si el navegador acepta caches
    write('Properties', 'b'); write('','br')
    write('gives informetion about the currente broser and hardware');
    write('navigator.userAgent: ' + navigator.userAgent);
    write('navigator.appCodeName: ' + navigator.appCodeName,);
    write('navigator.appName: ' + navigator.appName);
    write('navigator.appVersion: ' + navigator.appVersion);
    write('navigator.connection: ' + navigator.connection);
    write('navigator.geolocation: ' + navigator.geolocation);
    write('navigator.hardwareConcurrency: ' + navigator.hardwareConcurrency);
    write('navigator.mimeTypes: ' + navigator.mimeTypes);
    write('navigator.language: ' + navigator.language);
    write('navigator.languages: ' + navigator.languages);
    write('navigator.onLine: ' + navigator.onLine);
    write('navigator.plugins: ' + navigator.plugins);
    write('navigator.cookieEnabled: ' + navigator.cookieEnabled);
    write('navigator.permissions: ' + navigator.permissions);
    write('navigator.platform: ' +  navigator.platform);
    write('navigator.serviceWorker: ' + navigator.serviceWorker);
    write('navigator.appCacheEnabled: ' + navigator.appCacheEnabled);


    console.log('navigator.userAgent:',  navigator.userAgent);
    console.log('navigator.appCodeName:',  navigator.appCodeName,);
    console.log('navigator.appName:',  navigator.appName);
    console.log('navigator.appVersion:',  navigator.appVersion);
    console.log('navigator.connection:',  navigator.connection);
    console.log('navigator.geolocation:',navigator.geolocation);
    console.log('navigator.hardwareConcurrency:',  navigator.hardwareConcurrency);
    console.log('navigator.language:',  navigator.language);
    console.log('navigator.languages:',  navigator.languages);
    console.log('navigator.mimeTypes:',  navigator.mimeTypes);
    console.log('navigator.onLine:',  navigator.onLine);
    console.log('navigator.plugins:',  navigator.plugins);
    console.log('navigator.cookieEnabled:',  navigator.cookieEnabled);
    console.log('navigator.permissions:' , navigator.permissions);
    console.log('navigator.platform:' , navigator.platform);
    console.log('navigator.serviceWorker:' , navigator.serviceWorker);
    console.log('navigator.appCacheEnabled:',  navigator.appCacheEnabled);

    // METHODS
    //  navigator.getUserMedia // solicita permiso y devuelve el stream de la camara o el mocrofono
    // navigator.mediaDevices.getUserMedia // solicita permiso y devuelve el stream de la camara o el mocrofono
    // navigator.mediaDevices.enumerateDevices // devuelve un array con los dispositivos de entrada y salida
    // navigator.mediaDevices.getSupportedConstraints // devuelve un array con las propiedades soportadas por el navegador
    // navigator.registerContentHeathers // permite al webs registrarso com oposibles controladores de un mime type
    // navigator.registerProtocolHandler // permite al navegador registrarse como controlodares de un protocolo
    // navigator.requestMediaKeySystemAccess // devuelve una promesa para un objeto MediaKeySystemAccess
    // navigator.javaEnabled // devuelve un booleano que indica si el navegador acepta java
    // navigator.sendBeacon // usado para trasmitir de forma asincrona conjuntos pequeños de datos http del agente usuario al servidor
    // navigator.vibrate // emite una secuencia de vibraciones

    write('Methods', 'b'); write('','br')
    write(' navigator.getUserMedia:   solicita permiso y devuelve el stream de la camara o el mocrofono');
    write('navigator.mediaDevices.getUserMedia:   solicita permiso y devuelve el stream de la camara o el mocrofono');
    write('navigator.mediaDevices.enumerateDevices:   devuelve un array con los dispositivos de entrada y salida');
    write('navigator.mediaDevices.getSupportedConstraints:   devuelve un array con las propiedades soportadas por el navegador');
    write('navigator.registerContentHeathers:   permite al webs registrarso com oposibles controladores de un mime type');
    write('navigator.registerProtocolHandler:   permite al navegador registrarse como controlodares de un protocolo');
    write('navigator.requestMediaKeySystemAccess:   devuelve una promesa para un objeto MediaKeySystemAccess');
    write('navigator.javaEnabled:   devuelve un booleano que indica si el navegador acepta java');
    write('navigator.sendBeacon:   usado para trasmitir de forma asincrona conjuntos pequeños de datos http del agente usuario al servidor');
    write('navigator.vibrate:   emite una secuencia de vibraciones');
    write('and many more...','b'); write('','br')








    //  Memoization ***********************************************************************************************
    // is a proccess that allow smaler execution time for a better performance and user experience
    write('Memoization','h2')
    write('is a proccess that allow smaller execution time for a better performance and user experience')
    write('see examples and coments in soruce code')

    // los valores son agregados a un array y se guardan, de modo aque si se requieren en el futuro ya se disponen del valor
    // los valores que ya se han solicitado, no se vuelven a solicitar
    function compute(num){
        let a = 0;
        let b = 0;
        let c = 0;
        for (let i = 0; i < num; i++){
            a += i
            for (let j = 0; j < num; j++){
                b += j
                c+= a*b;
            }
        }
        return c    
    }

    let cache = []
    const memorizer = func => {
        return e =>{
            const index = e.toString();
            if(cache[index] === undefined){
                cache[index] = func(e);
            }
            return cache[index];
        }
    }
    const computeWithMEN = memorizer(compute);

    const logExecution = func => {
        return (...args) => {
            const start = new Date();
            const result = func(...args);
            const end = new Date();
            console.log(result, `time: ${(end - start) / 1000} segundos`);
            return result;
        };
    };


    const loggedCompute = logExecution(compute);
    const loggedComputeWithMEN = logExecution(computeWithMEN);

    // Pruebas
    console.log('running normaly:');
    loggedCompute(6000);
    loggedCompute(6000);
    loggedCompute(6000);
    loggedCompute(6000);

    console.log('runing with memorization:');
    loggedComputeWithMEN(6000);
    loggedComputeWithMEN(6000);
    loggedComputeWithMEN(6000);
    loggedComputeWithMEN(6000);
    loggedComputeWithMEN(6000);

    
    //  Caché ***************************************************************************************************
    write('Caché','h2')
    write('see examples and coments in soruce code')

    // lo que trabajamos con cache  lo trabajamos con promesas
    // es una memoria a corto plaso que almacena informacion para que no se solicite muchas veses lo mismo

    const playCache = async () => await caches.open('archivos')
    .then(cache => {
        console.log('cache opened ok')
        
        // adding one file
        cache.add('page4.js') // fetch a put request
            .then(() =>     
            {    
                console.log('added page4.js')

                // fetch a file form cache
                cache.match('page4.js')
                    .then(file => console.log('got file form cache', file))
                    .catch(err => console.log(err))

                // delete a file form cache
                cache.delete('page4.js')
                    .then(() => console.log('delete file form cache'))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err)) 
       
        // adding many files
        cache.addAll(['page2.js','page3.js'])
            .then(() => {
                console.log('added page2.js and page3.js')

                 // fetching many files from cache
                cache.matchAll(['page2.js','page3.js'])
                .then(files => console.log('got fileS form cache', files))
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

        //fetch and cache.put en conjunto
        fetch('pages.css')
            .then(res => cache.put('pages.css', res) )
            .catch(err => console.log(err))

        // listing cache keys
        cache.keys()
            .then(keys => console.log('cache keys', keys))
            .catch(err => console.log(err))
       
    }).catch(err => console.log(err))

    playCache();


    //  Service Workers *******************************************************************************************
      write('Service Workers','h2')
      write('see examples and coments in soruce code')

      // es un script js que intercepta todas las peticiones del navegador
      // tanto de ida como de vuelta
      // tiene muchos add event listener ya que escucha muchos susesos
      // son archivos que quedan istalados en el computador, y funcionan incluso si deje la pagina o cerre el browser
      // ya que corren en un hilo aparte y quedan guardados en el almacenamiento local del usuario/dispositivo
      // lifecicle
      // https://developer.chrome.com/docs/workbox/service-worker-lifecycle?hl=es-419
        //1 registrar, 2 esperar activacion, 3 activado(ready)

      if(navigator.serviceWorker !== undefined)
      {
        write ('service worker is supported','div','green sw')
        let swpanel = document.querySelector('.sw');

        navigator.serviceWorker
        .register('./serviceWorker.js')
        .then(reg => {
            console.log('service worker registered', reg)
            let psw = document.createElement('p');
            psw.textContent = 'serviceWorker.js was registered as service worker';
            swpanel.appendChild(psw);

           
        })
        .catch(err => console.error('error service worker not registered', err))

        navigator.serviceWorker.ready.then((res) => {
          console.log('service worker is ready', res);
          let psw0 = document.createElement('p');
          psw0.textContent = 'serviceWorker.js is ready';
          swpanel.appendChild(psw0);
          let cont = 1;
          const ping = setInterval(() => {
            if (cont <= 3) {
              console.log('pinging service worker');
              let psw2 = document.createElement('p');
              psw2.textContent = ' ping to service worker';
              swpanel.appendChild(psw2);
              res.active.postMessage('ping');
              cont++;
            } else {
              clearInterval(ping);
              console.log('ping stopped');
              let psw3 = document.createElement('p');
              psw3.textContent = ' ping stoped';
              swpanel.appendChild(psw3);
            }
          }, 2000);
        });

        navigator.serviceWorker.addEventListener('message', (event) => {
            console.log('main script got response from service worker', event.data);
            let psw = document.createElement('p');
            psw.textContent = 'pong from serviceWorker.js';
            swpanel.appendChild(psw);
        });
      }
      else{ write ('service worker not supported','div','yellow') }


    //  Cachear sitio web y mostrarlo offline *************************************************
    write('offline browsing support with servise Worker','h2')
    write('check out serviceWorker.js for code example')




    //  Cookies **********
    write('Cookies','h2')
    write('see examples and coments in soruce code')
    // son simples datos o archivos que se guardaron en el navegador del usuario
    // exeptuadas
    /*
      Cookies de entrada del usuario
      Cookies de identificacion o autenticacion (unicamante session)
      Cookies de seguridad del usuario
      Cookies de privacidad
      Cookies de reproductor multimedia
      Cookies de sesion para equilibrar la carga
      cookies de personalizacion de la interfaz del usuario
      cookies de complemento plug in para intercambiar contenidos socieles
    */
    // no exeptuadas
    /*
      cookies de configuracion
      cookies de historial
      cookies de publicidad
    */
    // cookies propias(mi pagina) o de terceros
    // por finalidad
    /*
    de analisis
    publicitarias
    sociales necesarias por las redes sociales
    */
    
    // 4 kb

      //crar una cookie
      // name=value;atr;atr...
      document.cookie = "name=valor";
      
    let cookieAtr = [
        "expires=10",
        "path='/'",
        "age=10",
        "domain='localhost'",
        "secure=true",
        "sameSite='strict'"
    ]
    function crearCokkie(name, value, cookieAtr){
      document.cookie = `${name}=${value};${cookieAtr.join(';')};`;
    }
    document.cookie = crearCokkie('name', 'valor', cookieAtr);

    // leer las cookies
    let cookies = document.cookie;
    if(cookies) write(cookies,'div','green');
    else write('no cookies','div','yellow');

    function obtenerCookies(){
    let cookies = document.cookie;
    return cookies.split(';');
    }

    function obtenerCookieValue(name){
    let cookies = obtenerCookies();
    for(let i = 0; i < cookies.length; i++){
        let cookie = cookies[i].split('=');
        if(cookie.toString().startsWith(name) ) return cookie[1]; // return the value
    }
    return null;
    }

    //actualizar una cookie
    document.cookie = "name=valornuevo";

    // borrar una cookie
    document.cookie = "name=0;max-age=0";

    write('en caso de usar cookies que recopilen datos SE DEBE PREGUNTAR AL USUARIO SI PERMITE USAR COOKIES','div','yellow');




    //  Objeto Screen ********************************************************************    
    write('Objeto Screen','h2')

    ancrhoPantalla = screen.width;
    altoPantalla = screen.height;

    anchoDisponible = screen.availWidth; // es el espacion sin la barra de tareas 
    altoDisponible = screen.availHeight; // es el espacio sin la barra de tareas

    viewportHeight = screen.innerHeight;
    viewportWidth = screen.innerWidth;

    resolucionPantalla = screen.width + 'x' + screen.height;
    resolucion = screen.pixelDepth ; // resolucion de color de la pantalla
    profuncidad = screen.colorDepth; // profundidad de bis de la paleta de colores

    write('anchura de la pantalla: ' + ancrhoPantalla);
    write('altura de la pantalla: ' + altoPantalla);
    write('anchura de la pantalla disponible: ' + viewportWidth);
    write('altura de la pantalla disponible: ' + viewportHeight);
    write('anchura disponible: ' + anchoDisponible);
    write('altura disponible: ' + altoDisponible);
    write('resolución de la pantalla: ' + resolucionPantalla);
    write('resolución: ' + resolucion);
    write('profundidad: ' + profuncidad);

    //  Objeto Canvas ********************************************************************
    
    
    write('Objeto Canvas','h2')
    // los navegadores actuales vienen optimizados por la aceleracion de hardware por GPU
    write('','div','secondcont canvascont')
    let canvascont = document.querySelector('.canvascont');
    let canvas = document.createElement('canvas');



    
    canvas.style.border = '1px solid black';
    canvas.style.backgroundColor = '#fff';
    canvas.style.width = (window.innerWidth -100).toString() + 'px';
    canvas.style.height = '300px';
    canvas.style.margin = 'auto';
    canvas.style.display = 'block';
    canvascont.style.padding = 'auto';
    canvascont.appendChild(canvas);


    
    // se requiwere el contexto directwrite y direct2d para hacer graficos
    let ctx = canvas.getContext('2d');
    //draw rectangule
    // ctx.lineWidth = 3;
    // ctx.strokeStyle = 'red';
    // // fillRect(x,y,width,height)
    // ctx.strokeRect(10,10,100,100);
    // ctx.fillStyle = 'white';
    // ctx.fillRect(30,30,100,100);
    // ctx.strokeRect(30,30,100,100);

    //lineTo(x,y)
    // ctx.strokeStyle = 'darkviolet';
    // ctx.beginPath();
    // ctx.moveTo(10,10);
    // ctx.lineTo(30,25);
    // ctx.lineTo(135,25);
    // ctx.lineTo(155,40);
    // ctx.lineTo(155,115);
    // ctx.lineTo(135,130);
    // ctx.lineTo(30,130);
    // ctx.lineTo(10,110);
    // ctx.stroke();
    // ctx.closePath();

    //  Crear un web paint
    let painting;
    const dif = canvas.getBoundingClientRect();

    canvas.addEventListener('mousedown', (e) => {
        painting = true;
        ctx.strokeStyle = 'darkblue';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(e.clientX - dif.left, e.clientY - dif.top);
    });
    canvas.addEventListener('mousemove', (e) => {
        if (painting) {
            ctx.lineTo(e.clientX - dif.left, e.clientY - dif.top);
            ctx.stroke();
        }
    });
    canvas.addEventListener('mouseup', () => {
        painting = false;
        ctx.closePath();
    });
    canvas.addEventListener('mouseleave', () => {
        painting = false;
        ctx.closePath();
    });

    drawLandScape();

    function drawLandScape(){
        console.log('dibujando');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSky();
        //montañas
        drawMountain(0.1, 0.75, 0.3, 0.25, '#556B2F');
        drawMountain(0.3, 0.75, 0.4, 0.375, '#6B8E23');
        drawMountain(0.5, 0.75, 0.3, 0.25, '#8B4513');
    
        // Dibuja árboles
        drawTree(0.15, 0.85);
        drawTree(0.65, 0.85);
    }

    function drawSky(){   
        // Cielo
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Sol
        ctx.beginPath();
        //arc(x,y,radius,startAngle,endAngle,anticlockwise)
        ctx.arc(canvas.width * 0.8, canvas.height * 0.3, 20, 0, Math.PI * 2, false);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.closePath();

        // Hierba
        ctx.fillStyle = '#228B22';
        ctx.fillRect(0, canvas.height * 0.75, canvas.width, canvas.height * 0.25);
    }

    function drawMountain(xFactor, yFactor, widthFactor, heightFactor, color) {
        const x = canvas.width * xFactor;
        const y = canvas.height * yFactor;
        const width = canvas.width * widthFactor;
        const height = canvas.height * heightFactor;
    
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + width / 2, y - height);
        ctx.lineTo(x + width, y);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawTree(xFactor, yFactor) {
        const x = canvas.width * xFactor;
        const y = canvas.height * yFactor;
    
        // Tronco
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(x, y, canvas.width * 0.02, canvas.height * 0.1);
    
        // Hojas
        ctx.beginPath();
        ctx.moveTo(x - canvas.width * 0.05, y);
        ctx.lineTo(x + canvas.width * 0.01, y - canvas.height * 0.1);
        ctx.lineTo(x + canvas.width * 0.05, y);
        ctx.closePath();
        ctx.fillStyle = '#006400';
        ctx.fill();
    }

    window.addEventListener("resize", () => {
        const viewportWidth = window.innerWidth;
        console.log(`The viewport's width is now ${viewportWidth}px`);
        canvas.style.width = (window.innerWidth - 200).toString() + 'px';
        ctx = canvas.getContext('2d');
        drawLandScape();
    });





    
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


  