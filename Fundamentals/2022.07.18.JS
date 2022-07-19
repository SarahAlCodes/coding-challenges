// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

const rooms = {
    room1: {
      name:'a', description:'b', completed:'c'
    },
    room2: {
      name:'a', description:'b', completed:'c'
    },
    room3: {
      name:'a', description:'b', completed:'c'
    }
}

//Alternative Solutions

var rooms = {}
for (var i = 0; i < 3; i++) {
    rooms[`room${i}`] = {'a': 1, 'b': 2, 'c': 3}
}

var rooms = {
    first: {name: 'first', desc: 'number 1', comp: 3},
    second: {name: 'second', desc: 'number 2', comp: 4},
    trees: {name: 'trees', desc: 'number 3', comp: 3}
}