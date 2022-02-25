const  paragraphs= document.getElementsByTagName("p");
console.log("parrafo: "+paragraphs);
if(paragraphs.length>0)
{
    const paragraph =paragraphs[0];
    paragraph.innerText='Hola Mundo';
}