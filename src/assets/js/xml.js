"use strict";

// s : function
(function () {

  console.log("start");

  // 참조 https://tcpschool.com/xml/xml_dom_xmlHttpRequest
  // 참조 https://kyung-a.tistory.com/18
  window.addEventListener("load", function () {
    const allElements = document.getElementsByTagName("*");
    console.log(allElements);
    Array.prototype.forEach.call(allElements, function (el) {
      const includePath = el.dataset.includePath;
      console.log(el);
      console.log(`incpath : ${includePath}`);
      if (includePath) {
        const xhttp = new XMLHttpRequest();
        console.log(xhttp)
        xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            // DONE (숫자 4) : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨.
            // 200 : 서버에 문서가 존재함.
            // console.log(xhttp.response);
            // console.log(this.responseText);
            el.outerHTML = this.responseText;
          }
        };
        xhttp.open("GET", includePath, true);
        xhttp.send();
      }
    });
  });

  // const testPad = () => {
  //   let padtrg = document.querySelector("#idfNo2");
  //   padtrg.addEventListener("click", () => {
  //     let pad = document.querySelector("#mtk_idfNo2");
  //     pad.style.position = "fixed";
  //     pad.style.top = "unset";
  //     pad.style.bottom = 0;
  //     console.log(pad);
  //   })
  //   console.log(padtrg);
  // }
  // testPad();

  // const testPad2 = () => {
  //   let padtrg = document.querySelector("#idfNo2");
  //   padtrg.addEventListener("click", () => {
  //     console.log(padtrg);
  //   })
    
  // }
  // testPad2();

})();
// e : function
