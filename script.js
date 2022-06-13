function calcularIMC(){
    var altura = parseFloat(document.getElementById('altura').value)/100;
    console.log(altura);
    var peso = parseFloat(document.getElementById('peso').value);
    console.log(peso);

    if(isNaN(altura) || isNaN(peso)){
        alert('debe ingresar solo numeros');
        return;
    }
    if(altura==0 || peso==0){
        alert('debe cargar numeros mayores a cero');
        return;
    }
    if(altura<0.1 || altura>2.72){
        alert('debe cargar un número entre 10 y 272');
        return;
    }

    var imc = (peso/(altura*altura)).toFixed(2);
    console.log(imc);
    document.getElementById('resultado').value = imc;

    document.getElementById('tablareferencia').hidden = false;
    if(imc<18.5)
        document.getElementById('filainferior').hidden = false;
    else if (imc<25)
        document.getElementById('filanormal').hidden = false;
    else if (imc<30)
        document.getElementById('filasuperior').hidden = false;
    else
        document.getElementById('filaobesidad').hidden = false;
}