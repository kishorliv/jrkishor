/* for slider in header*/
var sliderContent = document.getElementsByClassName('slider-content');
var leftArrow = document.getElementsByClassName('left-arrow')[0];
var rightArrow = document.getElementsByClassName('right-arrow')[0];

var noOfSlides = sliderContent.length;
var index = 0;

function hideOthers(ind) {
  for(var i=0; i<noOfSlides; i++){
    if(i != ind){
      sliderContent[i].style.display = 'none';
    }
  }

}


function gotoDiv(ind){
  console.log('outside',noOfSlides, ind);
  if(ind >= noOfSlides || ind < 0){
    console.log('inside',noOfSlides, ind);
    index = 0;
    sliderContent[index].style.display = 'block';
  }
  else{
    console.log('inside else',noOfSlides, ind);
    //sliderContent[ind+1].style.display = 'none';
    sliderContent[ind].style.display = 'block';
    index = ind;
  }
}


leftArrow.onclick = function(){
  index--;
  hideOthers(index);
  gotoDiv(index);
  console.log(index);

};

rightArrow.onclick = function(){
  index++;
  hideOthers(index);
  gotoDiv(index);
  console.log(index);
  //hideOthers(index);
};

hideOthers(index);





/*for dropdown in footer*/
function dropdown(){
	var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
}

dropdown();

//for video
var firstPost = document.getElementsByClassName("first-post")[0];
function playVideo() { 
    firstPost.play(); 
} 





