var agora = new Date()
var diaSem = agora.getDay()
/*
o = domingo
1 = segunda...
6 = sabado
*/
// suit pra testar com numero inteiro e string -- intervalo usa if suit usa valores pontuais  é limitado
switch ( diaSem){
    case 0:
        console.log ('Domingo')
        break
        case 1:
        console.log ('Segunda')
        break 
        case 2:
        console.log ('terça')
        break
        case 3:
        console.log ('quarta')
        break
        case 4:
            console.log ("quinta")
            break
        default :
        console.log ('dia invalido')
        break
        
         
}