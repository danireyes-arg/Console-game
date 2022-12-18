function game(hand){
    let screen = document.getElementById('screen');
    const ops = ['piedra', 'papel', 'tijera']
    const bot = ops.at(Math.floor(Math.random() * ops.length))
    if(hand === bot) screen.textContent = `${hand} vs ${bot} \n> E M P A T E <`
    else if(hand === ops[0] && bot !== ops[1]) screen.textContent = `${hand} vs ${bot} \n> G A N A S T E <`
    else if(hand === ops[1] && bot !== ops[2]) screen.textContent = `${hand} vs ${bot} \n> G A N A S T E <`
    else if(hand === ops[2] && bot !== ops[0]) screen.textContent = `${hand} vs ${bot} \n> G A N A S T E <`
    else{ screen.textContent = `${hand} vs  ${bot} \n> P E R D I S T E <` }
}
console.log(game('tijera'))




// Para testear
// function game(hand){
//     // let screen = document.getElementById('screen');
//     const ops = ['piedra', 'papel', 'tijera']
//     const bot = ops.at(Math.floor(Math.random() * ops.length))
//     if(hand === bot) return `${hand} vs ${bot} \n> E M P A T E <`
//     else if(hand === ops[0] && bot !== ops[1]) return `${hand} vs ${bot} \n> G A N A S T E <`
//     else if(hand === ops[1] && bot !== ops[2]) return `${hand} vs ${bot} \n> G A N A S T E <`
//     else if(hand === ops[2] && bot !== ops[0]) return `${hand} vs ${bot} \n> G A N A S T E <`
//     else{ return `${hand} vs  ${bot} \n> P E R D I S T E <` }
// }
// console.log(game('tijera'))