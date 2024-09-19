let texto= prompt("Escreva algo:")
texto.toLowerCase
let letra = "a"
let contadorletra = 0;

for (i= 0; i< texto.length; i++) {
    if(letra == texto[i]){
     contadorletra++;
    }
 }

    if(texto.includes("a")){
        alert(" A existência da letra ‘a’ no texto, ela aparece " + contadorletra + " vezes" )
    }else{
        alert("Não a existência da letra ‘a’ no texto ")
    }

 