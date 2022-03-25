function mensaje(prefijo)
{
    return function(texto)
    {
        return prefijo+" "+ texto;
    }
}
 



const mensaje = (prefijo, format) =>(texto) => format(prefijo,texto);
const bienvenida = mensaje("hola",(a,b)=> "¡" + a + " " + b + "!");
const despedida = mensaje("adios",(a,b)=> a + " " + b + "... :(");
 
console.log(bienvenida("mundo"));
console.log(despedida("mundo"));