function tabuada(){
    let numero = document.getElementById('numero')
    // let res = document.getElementById ('res')
    let tab = document.getElementById('seltab')
    if (numero.value.length == 0 ){
        alert ('não deixe vazio ')
    
    } else { 
        let numb = Number(numero.value)
    
        tab.innerHTML = ""  //pra limpar a tabuada pra nao repetir
      for (let i = 1; i <= 10; i++){
         let item = document.createElement('option') //criei um option direto no js
         item.text  = `${i} x ${numb} = ${i*numb}`; //parte de dentro do option
         item.value = `tab ${i}` //saber o item q foi selecionado 
         tab.appendChild(item)  //adicionar um elemento filho - pra aparecer a tabuada 
 }
        // for (let n1 = numb; numb * n1; n1++){
        //     res.innerHTML = `${n1} x ${numb}`

      //  res.innerHTML += (`${i} x ${numb} = ${i*numb}`);
        // }
    }
}