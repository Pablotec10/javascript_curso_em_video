let num = [2,1,9,8,4,3]
num.sort() //colocar em ordem
num[3]=10  //adicionar valor na posicao 1

console.log(num)
let pos = num.indexOf(9)
console.log(`o valor 9 esta na posicao ${pos} `)

for (let posicao = 0; posicao < num.length; posicao ++){
    console.log (`a posição ${posicao} tem o valor ${num[posicao]}`)
}