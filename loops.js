function forLoop(crackers){
  for (var i = 1; i < 25; i++) {
    if (i == 1) { crackers.push("I am 1 strange loop.");
    }else { crackers.push(`"I am ${i} strange loops."`);
    }
  }
  return crackers;
}
      

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return `done`
}


function doWhileLoop(array){
  do {
    array.pop ();
   
    }
    while (array.length > 0){
}
return array
}