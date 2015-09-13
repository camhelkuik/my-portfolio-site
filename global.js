

var newGrit = document.getElementsByClassName("web--new-grit");

  window.onscroll = showNewGrit;

  function showNewGrit() {
    if (window.pageYOffset>100) {
      newGrit.classList.remove("beforeScroll");
  }
}



// window.onload
// function showNewGrit(){
//   var newGrit = document.getElementsByClassName("web--new-grit");
//
//   // var posNewGrit = newGrit.position();
//
//   var posNewGrit = {};
//   window.onscroll = getScrollPosition;
//
//   function getScrollPosition(){
//       posNewGrit = {
//          y: window.pageYOffset
//       }
//       // If you want to check distance
//       if(posNewGrit.y > 200) {
//         newGrit.addClass("afterScroll");
//       }
//   }
  
  // (window).scroll(function(){
 //    var windowPos = (window).scrollTop();
 //    if (windowPos >= (posNewGrit.top - 50)){
 //      newGrit.addClass("afterScroll");
 //    }
 //  });
// };

// showNewGrit();


// var scrollObject = {};
// window.onscroll = getScrollPosition;
//
// function getScrollPosition(){
//     scrollObject = {
//        y: window.pageYOffset
//     }
//     // If you want to check distance
//     if(scrollObject.y > 200) {
//       newGrit.addClass("afterScroll");
//     }
// }