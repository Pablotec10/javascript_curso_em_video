function horadia(){
     
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    
    var hora = new Date()
    var minute = new Date()
    // var agora = 19
     var agora = hora.getHours()
    var minuto = minute.getMinutes()
    msg.innerHTML=`agora são ${agora}:${minuto} horas`
    if (agora >= 0 && agora < 12){
        // img.scr = 'manha.jpg' 
        img.innerHTML = '<img src="manha.jpg">' 
        document.body.style.background = '#e2c29f'
    } else if (agora >=12 && agora <= 18){
        //boa tarde
        // img.scr = 'tarde.jpg'
        img.innerHTML = '<img src="tarde.jpg">' 
        document.body.style.background = '#b9846f'
    }else {
        //boa noite
        img.innerHTML = '<img src="noite.jpg">' 
        document.body.style.background = '#515154' 
    }


}

