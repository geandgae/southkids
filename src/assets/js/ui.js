"use strict";

// s : function
(function () {

  console.log("start");

  const motionTilde = document.querySelector("[data-motion=tilde]");
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      motionTilde.classList.add("active");
    } else {
      motionTilde.classList.remove("active");
    }
  })

 

})();
// e : function