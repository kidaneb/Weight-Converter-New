const mass = {
  gram: 1,
  pound: 453 / 592,
  ounce: 28 / 3495,
  kg: 1000,
};

function toButtonEvent(unit) {
  if (e.target.classList.contains(`to-${Object.keys(unit)[0]}`)) {
    toText.innerText = Object.keys(unit)[0];
    toUnit = Object.values(unit)[0];
    if (toInput.value !== "") {
      calculation2();
    } else {
      calculation1();
    }
    console.log("1");
  } else if (e.target.classList.contains(`to-${Object.keys(unit)[1]}`)) {
    toText.innerText = Object.keys(unit)[1];
    toUnit = Object.values(unit)[1];
    if (toInput.value !== "") {
      calculation2();
    } else {
      calculation1();
    }
    console.log("1");
  } else if (e.target.classList.contains(`to-${Object.keys(unit)[2]}`)) {
    toText.innerText = Object.keys(unit)[2];
    toUnit = Object.values(unit)[2];
    if (toInput.value !== "") {
      calculation2();
    } else {
      calculation1();
    }
    console.log("1");
  } else if (e.target.classList.contains(`to-${Object.keys(unit)[3]}`)) {
    toText.innerText = Object.keys(unit)[3];
    toUnit = Object.values(unit)[3];
    if (toInput.value !== "") {
      calculation2();
    } else {
      calculation1();
    }
    console.log("1");
  }
}

