var opt1 = "piedra";
var opt2 = "papel";
var opt3 = "tijera";

var player = opt1;
var machine = opt2;


    switch(true){     
        case (player == opt1 && machine == opt2):
            console.log("Machine won");
            break;
        case (player == opt2 && machine == opt3):
            console.log("Machine won");
            break;
        case (player == opt3 && machine == opt1):
            console.log("Machine won");
            break;
        case (player == opt2 && machine == opt1):
            console.log("Player won");
            break;
        case (player == opt3 && machine == opt2):
            console.log("Player won");
            break;
        case (player == opt1 && machine == opt3):
            console.log("Player won");
            break;
        default:
            console.log("Draw")
            break;
    }


console.log(elJuego());