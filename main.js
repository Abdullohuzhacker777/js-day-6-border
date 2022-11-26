const elForim = document.querySelector("#forim_itim");
const elInput1 = document.querySelector("#input1");
const elInput2 = document.querySelector("#input2");
const elBtn = document.querySelector("#button");

const elBox = document.querySelector("#fox_cart");

elForim.addEventListener("submit", function (e) {
  e.preventDefault();
  function BtnItim() {
    if (elInput1.value > 1000 && elInput2.value > 1000) {
      alert("qiymatidan ortiq son kirgizgansiz");
    } else {
      elBox.style = `width:${elInput1.value}px; height:${elInput2.value}px `;
    }
  }

  BtnItim();
});
