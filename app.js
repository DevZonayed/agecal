let submit = document.getElementById("submit");
let namee = document.getElementById("userName");
let result = document.getElementById("result");
let errimg = document.querySelector(".erroeimg");
let validetion = document.querySelector(".validetion");

namee.onkeyup = () => {
  if (/^[a-z]{3,20}[ ]*[a-z]*$/i.test(namee.value) != true) {
    errimg.style.display = "inline-block";
    namee.style.border = "1px solid red";
    validetion.style.display = "inline-block";
    submit.style.cssText = `
            background: gray;
            color: black;
            pointer-events: none;
        `;
  } else {
    errimg.style.display = "none";
    namee.style.border = "none";
    validetion.style.display = "none";
    submit.style.cssText = `
        background: crimson;
        color: white;
        pointer-events: all;
    `;
  }
};

submit.onclick = () => {
  if (/^[a-z]{3,20}[ ]*[a-z]*$/i.test(namee.value) != true) {
    errimg.style.display = "inline-block";
    namee.style.border = "1px solid red";
    validetion.style.display = "inline-block";
    submit.style.cssText = `
            background: gray;
            color: black;
            pointer-events: none;
        `;
  } else {
    let ageclassification;
    if (age() <= 10) {
      ageclassification = "Baby";
    } else if (age() > 10 && age() < 18) {
      ageclassification = "Teenage";
    } else if (age() >= 18 && age() <= 32) {
      ageclassification = "Young";
    } else if (age() > 32 && age() <= 50) {
      ageclassification = "close to OLD";
    } else if (age() > 50 && age() <= 120) {
      ageclassification = "Old";
    } else {
      ageclassification = "Abnormal human";
    }
    result.innerHTML =
      (age() <= 0)
        ? `Hello ${namee.value}, Please input a valid birth day`
        :`Hello ${
            namee.value
          }, you are ${age()} year's old and you are ${ageclassification}`
    namee.value = "";
    inputdate.value = "";
  }
};
