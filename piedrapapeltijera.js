var opt1 = "piedra";
var opt2 = "papel";
var opt3 = "tijera";

var player = opt1;
var machine = opt2;

function elJuego(){
    if (player != machine){
        if (player == opt1 && machine == opt2 || 
            player == opt2 && machine == opt3 ||
            player == opt3 && machine == opt1) {
       
               console.log("Machine won");
        }

        else if (player == opt2 && machine == opt1 || 
                player == opt3 && machine == opt2 ||
                player == opt1 && machine == opt3) 
        
                console.log("player won");
        
    }
    
    else {
        console.log("Draw");
    }


   
}

console.log(elJuego());