function verificar(){
    // alert('funcionou') 
    var data = new Date()
    var ano = data.getFullYear() //vai pegar o ano 4 digito
    var fano = document.getElementById('txtano')
    //formulario do ano
   // var img = document.getElementById('foto')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano || fano.value <1900 ){
        alert('[erro] verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
       
        var img = document.createElement('img') //cria id html tag
         img.setAttribute('id', 'foto')
        if (fsex[0].checked){
          
            if (idade >=0 && idade < 13){
                genero = 'menino'
              //criança
            // img.setAttribute('src', `${genero}/menino.png`)
             img.setAttribute('src', 'menino.png')
          //  img.innerHTML = '<img src="/menino.png">' 
            }else if ( idade <21){
                genero = 'um jovem'
                // img.innerHTML = '<img src="/homem.png">' 
               //jovem 
               img.setAttribute('src','homem.png')
            }else if (idade < 50){
                // img.innerHTML = '<img src="homem.png">' 
                //adulto
                genero = 'um homem'
                 img.setAttribute('src','homem.png')
            }else{
                // img.innerHTML = '<img src="idoso.png">' 
                //idoso
                genero = 'um idoso'
                img.setAttribute('src','idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >=0 && idade < 13){
                //criança
                genero = 'uma menina'
                img.setAttribute('src','menina.png')
               
              }else if ( idade <21){
                 //jovem 
                 genero = 'uma jovem'
                 img.setAttribute('src','mulher.png')
              }else if (idade < 50){
                  //adulto
                  genero = 'uma mulher'
                  img.setAttribute('src','mulher.png')
              }else{
                  //idoso
                  genero = 'uma idosa'
                  img.setAttribute('src','idosa.png')
              }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}