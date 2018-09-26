function animate(){
  var counter = 0;
  var star = "";
  var flag = 0;

  setInterval(function(){
    if(counter <= 5 && flag==0){
      if(counter==5){flag=1;}
      star = star + "*";
      console.log(star);
      counter++;
    }
    else if(flag==1){
      counter--;
      star = star.substr(1,counter);
      console.log(star);
      if(counter==1) flag=0;
    }
  }, 100);

  return;
}





/*
var counter = 0;
var star = "";
var flag = 0;


function animate(){
  ref = setInterval(makePattern, 100);
  return;
}


function makePattern(){
  if(counter <= 5 && flag==0){
    if(counter==5){flag=1;}
    star = star + "*";
    console.log(star);
    counter++;
  }
  else if(flag==1){
    counter--;
    star = star.substr(1,counter);
    console.log(star);
    if(counter==1) flag=0;
  }

return;
}
*/

/*
function starPattern(){
  noOfLines = 6;

  for(var i=0; i<noOfLines; i++){
    for(var j=0; j<=i; j++){
      console.log("*");
    }
    console.log("\n");
  }

  return;
}
*/
