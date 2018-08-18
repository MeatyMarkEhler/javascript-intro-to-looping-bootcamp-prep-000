function forLoop(){
  for (var i = 1; i < 25; i++) {
    if (i == 1) { console.log("I am 1 strange loop.");
    }else { console.log(`I am ${i} strange loops.`);
    }
    return;
  }
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