function somar (n1, n2 =3){
   return n1 + n2
 
}
console.log(somar(2))

function fatorial(n){
    if ( n== 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))