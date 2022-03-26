let valores = [2,5,3,8,9]
valores.sort() // colocar em ordem
valores[5]=10 //adiciona valor na posicao 1 do vetor

console.log(valores)
let pos = valores.indexOf(8)
console.log(`o valor 8 esta na posicao ${pos} `)


 for ( let posicao = 0; posicao < valores.length; posicao ++ ){
    console.log (`a posicao ${posicao} tem o valor ${valores[posicao]}`)
}


//for in só funciona em array -- serve  o indexOf(7) busca o valor 7 dentro do vetor se tem se tiveer mostra se nao  - 1