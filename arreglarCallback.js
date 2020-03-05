function suma(numero_uno,numero_dos){
    setTimeout(function(){
       var resultado = numero_uno + numero_dos;
       return resultado;
    }, 1000);
}
 
//var resultado = suma(2,5)
 
// console.log(resultado);
 
 
 
function sumaBien(num1,num2,callback){
    setTimeout(function(){
        var resultado = num1 + num2;
        callback(resultado);
     }, 1000);
}
  

//* Descomentá esta parte para probar la función sumaBien
sumaBien(2,5,function(resultado){
    console.log(resultado);
})


