function calcular(){
  let inicio = document.getElementById('txN1')
  let fim = document.getElementById('txN2')
  let passo = document.getElementById('txPasso')
  let res = document.getElementById('res')

  
 
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      alert ('não deixe vazio')
  } else {
    res.innerHTML = 'contando:'
    let ini = Number(inicio.value)
    let final = Number(fim.value)
    let passo1 = Number(passo.value)

    if(ini < final){

      for (let c = ini; c <= final; c +=passo1){
         res.innerHTML += `${c}`
      }
    }else {
        for ( let c = ini; c >= final; c -=passo1){
            res.innerHTML += `${c}`
        }
    }
  }
}