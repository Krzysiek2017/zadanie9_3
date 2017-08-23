var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var textWrongDino = text.replace('Velociraptor', dinosaurUpperCased);

console.log(textWrongDino);

console.log(textWrongDino.slice(0, textWrongDino.length / 2));