// //herramientas
// //console.log("hola mundo")
// //console.warn("¡advertencia!")
// //console.error("error grandeee")



// //pasando un argumento
// //console.error(new Error("ocurrio un error"))


// //-----------------------------------------------

// //modeulo process

// //provee informacion sobre el proceso de node.js
// //que se esta ejecutando
// //puede tener cierto control sobre el proceso

// //console.log(process)
// //console.log(process.version)

// //modulo os (sistema operativo)

// // const os= require('os')
// // console.log(os.type())     // S.O
// // console.log(os.homedir())  //ruta
// // console.log(os.uptime())   //tiempo que tarda en correr       ctrl k c u -descomentar
// // console.log(os.userInfo())   //datos usuario                  ctrl k c  -comentar

// //modulos timer (temporizador o cronometro)

// //contiene fuenciones que ejecutan codigo 
// //luego de cierto periodo de tiempo 

// //setTimeout(funcion, retraso, argumentos)
// //sirve para ejecutar codigo luego de un numero especifico 
// //especifico de milisegundos


// function Sumar (a,b){
//    console.log (a+b);
// }

// //setTimeout(Sumar, 10000, 1 , 2);

// //SetInmediate()
// //para ejecutar el codigo asincrono en la proxima iteracion de ciclo de eventos(lo mas pronto posible)
// //se ejecuta despues del codigo sincrono
// //SetInmediate(funciom,argumentos)

// // console.log("antes")

// // setImmediate(Sumar, 1,2);

// // console.log("despues")

// //setInterval()
// //para ejecutar codigo un numero infinito de veces con un retraso especifico de milisegundos
// //setinterval

// setInterval(Sumar, 1500, 3, 4)


//modulo fs (file system)
//modulo que contiene funcionalidad muy util para trabajar con el sistema de archivos
//operaciones utiles :leer, modificar, copiar, eliminar, cambiar nombre
//todos los metodos de este modulo son asincronos por defecto se puede hacer syncrono si se le agrega sync al final


//readfile 

const fs=require('fs')
// fs.readFile('index.html' , 'utf-8', (err, contenido) => {
// if(err){console.log(err)
// }
// else{
//     console.log(contenido)
// }
// })

//  //rename
//  fs.rename('index.html' , 'index.html' , (err)=>{
//     if(err){
//         throw err

// }
// else{
//     console.log("archivo actualizado")
// } 
// })

// // //appedFile
// fs.appedFile('index.html', '<p> hola, soy yo </p>', (err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log("archivo actualizado")
//     }
// })

// fs.writeFile('index.html', 'contenido nuevo', (err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log("contenido reemplazado exitosamente")
//     }
// }
// )

// fs.unlink('index.html',(err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log("contenido eliminado exitosamente")
//     }
// }
// )






