let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}

function checker(input){
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #49FC49; color: #00000";
            result_ref.innerHTML = "Vyhrál jsi <br> +1 Bod Pro tebe";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #F94141; color: #00000";
            result_ref.innerHTML = "PC Vyhrál <br> +1 Bod pro PC";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #848484; color: #00000";
            result_ref.innerHTML = "Stejně";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}