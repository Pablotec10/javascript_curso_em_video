function calcular(){
    let ini = document.getElementById('txN1')
    let fim = document.getElementById('txN2')
    let passo = document.getElementById('txPasso')
    let res = document.getElementById('res')
    
    
    if ( ini.value.length == 0 || fim.value.length == 0 ||  passo.value.length == 0){
        // O "length" serve para fazer o "imput" vazio ou "null" virar 0
      alert ('errro nao deixe vazio')
    } else{
        res.innerHTML = 'contando:'
         let i = Number(ini.value)
         let f = Number(fim.value)
         let p = Number(passo.value)
        if ( i < f){
   
        for ( let c = i; c <= f; c += p){
            res.innerHTML += `${c}`
        }
    } else {
        for ( let c = i; c >=f; c-=p){
            res.innerHTML += `${c}`
        }
    }
}
}
