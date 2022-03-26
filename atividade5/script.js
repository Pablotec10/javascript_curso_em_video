
let tab = document.getElementById('area')
let res = document.getElementById('resultado')
let vetores = []  //variavel composta vazia para receber o valor futuramente
function inserir(){
    // let numero = document.getElementById('num')
    // let tab = document.getElementById('area')
    // let numero = document.getElementById('num')
    // let numb = Number(numero.value)
    let numero = Number(document.querySelector('input#num').value) //pega o valor e o converte para number
    if ( numero == 0 || numero <= 0  || numero > 100 ){ //verifica se a caixa esta vazia ou contem numero negativo ou se é maior que 100 e devolve com erro caso encontre
        alert ('[ERRO] insira um número entre 1 a 100')
    } else {
        // let numb = Number(numero.value)
        let item = document.createElement('option')
        item.text = `o número ${numero} foi adicionado`
        item.value = `${numero}`
        tab.appendChild(item) //cria a option com o texto dentro do select
        vetores.push(numero) //coloca o número digitado no ultimo indice
        //O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array
    }
   
}

 function finalizar(){ 
     let soma = 0
    let numero = Number(document.querySelector('input#num').value) //pega o valor e o converte para number
    if (numero == 0){
        alert ('insira um número antes de finalizar')
    } else{
       for ( n=0; n < vetores.length; n++) { //soma o vetor
           soma += vetores[n]
            /* Desta forma criamos um loop for, baseado no compri
            mento máximo do array, ou seja, a quantidade de elementos do mesmo

            Utilizamos o operador de atribuição para inserir o
            valor do índice atual na soma, realizando o cálculo com base no andar do loop */

       } 
       vetores.sort()//resultado na div
       res.innerHTML += `<p> temos o total de ${vetores.length} digitos </p>`
       res.innerHTML += `<p> o maior valor é ${Math.max(...vetores)} </p>`
       res.innerHTML += `<p> o menor valor é ${Math.min(...vetores)} digitos </p>`
       res.innerHTML += `<p> a soma dos numeros é ${soma}</p>`
       res.innerHTML += `<p> a media dos valores é de ${soma/vetores.length} </p>`
    }
}

function limpar(){ //botao de limpar que remove o resultado da DIV e do SELECT respectivamente
    res.innerHTML = ""

    tab.length = "0"

}