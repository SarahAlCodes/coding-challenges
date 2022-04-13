//8 kyu A wolf in sheep's clothing

//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

//Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:


function warnTheSheep(queue){
    let orderedQueue = queue.reverse()
    for (let i = 0; i < queue.length; i++)
    if(orderedQueue[0] === 'wolf'){
        return ("Pls go away and stop eating my sheep");
    }else {
        return(`Oi! Sheep number ${orderedQueue.indexOf('wolf')}! You are about to be eaten by a wolf!`);
    }
}

//alternative solutions

function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

function warnTheSheep(queue) {
    let sheepIndex = queue.length - queue.indexOf('wolf') - 1;
    if (sheepIndex === 0)
        return 'Pls go away and stop eating my sheep';
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}


const warnTheSheep = a => (a = a.length - a.indexOf('wolf') - 1) ?
  `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`:
  'Pls go away and stop eating my sheep';

