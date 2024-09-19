function sequencia(num) {
    
    if (num < 0) return false;

    let a = 0, b = 1;

    while (a <= num) {
        if (a === num) return true;
        [a, b] = [b, a + b]; 
    }
    return false;
}


function verificar() {
    let numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));

    
    if (sequencia(numero)) {
        alert(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        alert(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }
        }
    verificar()