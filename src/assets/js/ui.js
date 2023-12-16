"use strict";

// s : function
(function () {

  console.log("start");

  const motionTilde = document.querySelector("[data-motion=tilde]");
  window.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
      motionTilde.classList.add("active");
    } else {
      motionTilde.classList.remove("active");
    }
  })
  
  const tourNav = document.querySelectorAll("[data-motion=tour] .tour-nav-wrap li");
  const tourList = document.querySelectorAll("[data-motion=tour] .tour-list-wrap li");

  for (const item of tourNav) {
    item.addEventListener("click", () => {
      tourNav.forEach(el => {
        el.classList.remove("on");
      });
      tourList.forEach(el => {
        el.classList.remove("on");
      });
      item.classList.toggle("on");
      const dataSet = item.getAttribute("data-tour");
      const target = document.querySelector(`[data-motion=tour] .tour-list-wrap [data-tour="${dataSet}"]`)
      target.classList.add("on");

      // const target = document.querySelector(`[data-motion=tour] .tour-list-wrap [data-tour="${dataSet}"]`).getBoundingClientRect().top;
      // const top = window.scrollY + target - 50;
      // console.log(target);
      // window.scrollTo({
      //   top: top,
      //   behavior: 'smooth'
      // });
    })
  }
  

 

})();
// e : function