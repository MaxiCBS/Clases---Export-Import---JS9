export default class Calculadora{
    sumar(a,b){
        return a + b;
    }

    restar(a,b){
        return a - b;
    }
    
    multiplicar(a,b){
        return a * b;
    }

    dividir(a,b){
        if(b == 0){
            return "error";
        }
        else{
            return a/b;
        }
    }
}