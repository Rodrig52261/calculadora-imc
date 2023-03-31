const calcular = document.getElementById('calcular')


function IMC(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
       
        const valorIMC = (peso / (altura*altura)).toFixed(1);

        let classificacao = "";
        if(valorIMC <18.5){
            classificacao = 'abaixo do peso';
        }
        else if(valorIMC <25){
            classificacao = 'seu peso está ideal, continue assim!!!'
        }
        else if(valorIMC <30){
            classificacao = 'você está um pouco acima do peso'
        }
        else if(valorIMC <35){
            classificacao = 'você está com obesidade grau 1';
        }
        else if (valorIMC <40){
            classificacao = 'você está com obesidade grau 2'
        }
        else{
            classificacao = 'você está com obesidade grau 3. Cuidado!!'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} ${classificacao}!`;

    }
    else{
        resultado.textContent = 'preencha todos os campos!';
    }
}

calcular.addEventListener('click', IMC);