var op1= "piedra";
var op2= "papel";
var op3= "tijera";

function ppt (jugador1, jugador2){
  if (jugador1 == op1 && jugador2 == op2){
      console.log("Gana jugador2 porque tiene " + op2);
    } else if (jugador1 == op1 && jugador2 == op3){
      console.log("Gana jugador1 porque tiene " + op3);
}else if (jugador1 == op1 && jugador2 == op1){
      console.log("Es un empate porque los dos sacaron " + op1)
}

else if (jugador1 == op2 && jugador2 == op1){
            console.log("Gana jugador1 porque tiene " + op2);
      } else if (jugador1 == op2 && jugador2 == op3){
            console.log("Gana jugador1 porque tiene " + op2);
      }else if (jugador1 == op3 && jugador2 == op3){
            console.log("Es un empate porque los dos sacaron " + op3)
      }

else if (jugador1 == op3 && jugador2 == op1){
      console.log("Gana jugador2 porque tiene " + op1);
    } else if (jugador1 == op3 && jugador2 == op2){
      console.log("Gana jugador2 porque tiene " + op3);
}else if (jugador1 == op2 && jugador2 == op2){
      console.log("Es un empate porque los dos sacaron " + op2)
}
}