



  function showNewGrit() {
    var newGrit = document.getElementsByClassName("web--new-grit");

    if (window.pageYOffset>100) {
      newGrit.classList.remove("beforeScroll");
  }
};

window.onscroll = showNewGrit();


// function testScroll(ev){
//     if(window.pageYOffset>=150) startAnimation();
// }
//
// window.onscroll=testScroll
//
// var newGrit = document.getElementsByClassName("web--new-grit");
//
// function startAnimation() {
//
//   // newGrit.removeClass("beforeScroll");
//   newGrit.removeAttribute("beforeScroll");
//
// }

