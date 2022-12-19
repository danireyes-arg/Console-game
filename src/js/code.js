const game = (hand) => {
    const screen = document.getElementById('screen');
    const ops = ['piedra', 'papel', 'tijera']
    const bot = ops.at(Math.floor(Math.random() * ops.length))
    if(hand === bot) screen.innerText = `${hand} vs ${bot}\n` + '> E M P A T E'
    else if(hand === ops[0] && bot !== ops[1]) screen.innerText = `${hand} vs ${bot}\n` + '> G A N A S T E'
    else if(hand === ops[1] && bot !== ops[2]) screen.innerText = `${hand} vs ${bot}\n` + '> G A N A S T E'
    else if(hand === ops[2] && bot !== ops[0]) screen.innerText = `${hand} vs ${bot}\n` + '> G A N A S T E'
    else{ screen.innerText = `${hand} vs  ${bot}\n` + '> P E R D I S T E' }
}