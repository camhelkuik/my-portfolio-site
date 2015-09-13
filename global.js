// (document).ready(function(){
//   //Take your div into one js variable
//   var newGrit = document.getElementsByClassName("web--new-grit");
//   //Take the current position (vertical position from top) of your div in the variable
//   var pos = div.position();
//   //Now when scroll event trigger do following
//   (window).scroll(function () {
//    var windowpos = (window).scrollTop();
//    //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
//    // I am taking 100px scroll, you can take whatever you need
//    if (windowpos >= (pos.top - 10)) {
//      div.addClass("AfterScroll");
//    }
//  });
// });

window.onload
function showNewGrit(){
  var newGrit = document.getElementsByClassName("web--new-grit");
  
  var posNewGrit = newGrit.position();
  
  (window).scroll(function(){
    var windowPos = (window).scrollTop();
    if (windowPos >= (posNewGrit.top - 50)){
      newGrit.addClass("afterScroll");
    }
  });
};

showNewGrit();


var scrollObject = {};
window.onscroll = getScrollPosition;

function getScrollPosition(){
    scrollObject = {
       x: window.pageXOffset,
       y: window.pageYOffset
    }
    // If you want to check distance
    if(scrollObject.y > 200) {
        // add class
    } else {
        // remove class
    }
}