let userName = prompt("Welcome to GC mini golf! What is your name?");
let rounds = prompt( `Hi ${userName}! Would you like to play 3 or 6 rounds? `);
let hole = 1;
let total = 0;
let par = 0;


if (Number(rounds) === 3) {
    for(i = 0; i < Number(rounds); i++){
    let putts = prompt(`How many putts for hole ${hole}? (par is 3)`);
     hole = hole + 1 ;
    console.log(`Total Putts After Round: ${total += Number(putts)}`);
    }
    par = total - 9;
    } else if (Number(rounds) === 6){

    for(i = 0; i < Number(rounds); i++){
        let putts = prompt(`How many putts for hole ${hole}? (par is 6)`);
        hole = hole + 1;
      console.log(`Total Putts After Round: ${total += Number(putts)}`);
    }
    par = total - 18;
    } else {
    alert("Invalid Answer! Enter 3 or 6!")
    }
 

if (par > 0) {
    console.log(`Nice try, ${userName}... Your total par was: +${par}.`)
}  else if (par < 0) {
    console.log(`Great job, ${userName}! Your total par was: ${par}.`)
} else if (par === 0) {
    console.log(`Good game, ${userName}. Your total par was: ${par}.`)
}










