let fromUnit;
let toUnit;
const mass = {
  gram: 1,
  pound: 453 / 592,
  ounce: 28 / 3495,
  kg: 1000,
};

const length = {
  meter: 1,
  feet: 453 / 592,
  yard: 28 / 3495,
  km: 1000,
};

const volume = {
  liter: 1,
  gallon: 453 / 592,
  cubicfoot: 28 / 3495,
  cubicmeter: 1000,
};

const pressure = {
  pascal: 1,
  bar: 453 / 592,
  atm: 28 / 3495,
  torr: 1000,
};
const temprature = {
  celsius: 1,
  fahrenheit: 453 / 592,
  kelvin: 28 / 3495,
};
const area = {
  SqMeter: 1,
  SqFeet: 453 / 592,
  SqYard: 28 / 3495,
  SqKm: 1000,
};

// const fromDropdown = document.getElementById('from-dropdown');
const toDropdown = document.getElementById("to-dropdown");
const unitContainer = document.getElementById("unit-container");
const unitDropdown = document.getElementById("units-dropdown");

unitContainer.addEventListener("click", function () {
  unitDropdown.style.display = "flex";
  unitDropdown.style.flexDirection = "column";
  unitDropdown.style.alignItems = "center";
});
unitContainer.addEventListener("mouseleave", function () {
  unitDropdown.style.display = "none";
});

fromInput = document.getElementById("from-input");
toInput = document.getElementById("to-input");
fromText = document.getElementById("from-text");
toText = document.getElementById("to-text");

document.getElementById("mass").addEventListener("click", function (event) {
  unitDropdown.style.display = "none";
  document.getElementById("unit").innerHTML = "Mass";
  event.stopPropagation();

  const fromButton = document.getElementById("from-button");
  fromButton.lastChild.remove();
  const toButton = document.getElementById("to-button");
  toButton.lastChild.remove();

  // FROM DROPDOWNS
  fromDropDowns("gram", "pound", "ounce", "kg");

  // FROM BUTTON EVENTS
  fromButton.addEventListener("click", (e) => {
    fromButtonEvent(e, mass);
  });

  // TO DROPDOWNS
  toDropDowns("gram", "pound", "ounce", "kg");

  // TO BUTTON EVENTS

  toButton.addEventListener("click", (e) => {
    toButtonEvent(e, mass);
  });
});
document.getElementById("length").addEventListener("click", function (event) {
  unitDropdown.style.display = "none";
  document.getElementById("unit").innerHTML = "Length";
  event.stopPropagation();

  const fromButton = document.getElementById("from-button");
  fromButton.lastChild.remove();
  const toButton = document.getElementById("to-button");
  toButton.lastChild.remove();

  // FROM DROPDOWNS

  fromDropDowns("meter", "feet", "yard", "km");

  // FROM BUTTON EVENTS
  fromButton.addEventListener("click", (e) => {
    fromButtonEvent(e, length);
  });

  // TO DROP DOWNS

  toDropDowns("meter", "feet", "yard", "km");

  // TO BUTTON EVENTS

  toButton.addEventListener("click", (e) => {
    toButtonEvent(e, length);
  });
});
document.getElementById("volume").addEventListener("click", function (event) {
  unitDropdown.style.display = "none";
  document.getElementById("unit").innerHTML = "Volume";
  event.stopPropagation();

  const fromButton = document.getElementById("from-button");
  fromButton.lastChild.remove();
  const toButton = document.getElementById("to-button");
  toButton.lastChild.remove();

  // FROM DROPDOWNS

  fromDropDowns("liter", "gallon", "cubicfoot", "cubicmeter");

  // FROM BUTTON EVENTS

  fromButton.addEventListener("click", (e) => {
    fromButtonEvent(e, volume);
  });
  // TO DROP DOWNS

  toDropDowns("liter", "gallon", "cubicfoot", "cubicmeter");

  // TO BUTTON EVENTS
  toButton.addEventListener("click", (e) => {
    toButtonEvent(e, volume);
  });
});
document.getElementById("pressure").addEventListener("click", function (event) {
  unitDropdown.style.display = "none";
  document.getElementById("unit").innerHTML = "Pressure";
  event.stopPropagation();

  const fromButton = document.getElementById("from-button");
  fromButton.lastChild.remove();
  const toButton = document.getElementById("to-button");
  toButton.lastChild.remove();

  // FROM DROPDOWNS

  fromDropDowns("pascal", "bar", "atm", "torr");

  // FROM BUTTON EVENTS
  fromButton.addEventListener("click", (e) => {
    fromButtonEvent(e, pressure);
  });

  // TO DROP DOWNS

  toDropDowns("pascal", "bar", "atm", "torr");

  // TO BUTTON EVENTS
  toButton.addEventListener("click", (e) => {
    toButtonEvent(e, pressure);
  });
});
document
  .getElementById("temprature")
  .addEventListener("click", function (event) {
    unitDropdown.style.display = "none";
    document.getElementById("unit").innerHTML = "Temprature";
    event.stopPropagation();

    const fromButton = document.getElementById("from-button");
    fromButton.lastChild.remove();
    const toButton = document.getElementById("to-button");
    toButton.lastChild.remove();

    // FROM DROPDOWNS

    fromDropDowns("celsius", "fahrenheit", "kelvin", "");

    // FROM BUTTON EVENTS
    fromButton.addEventListener("click", (e) => {
      fromButtonEvent(e, temprature);
    });
    // TO DROP DOWNS

    toDropDowns("celsius", "fahrenheit", "kelvin", "");
    // TO BUTTON EVENTS
    fromButton.addEventListener("click", (e) => {
      toButtonEvent(e, temprature);
    });
  });
document.getElementById("area").addEventListener("click", function (event) {
  unitDropdown.style.display = "none";
  document.getElementById("unit").innerHTML = "Area";
  event.stopPropagation();

  const fromButton = document.getElementById("from-button");
  fromButton.lastChild.remove();
  const toButton = document.getElementById("to-button");
  toButton.lastChild.remove();

  // FROM DROPDOWNS
  fromDropDowns("SqMeter", "SqFeet", "SqYard", "SqKm");

  // FROM BUTTON EVENTS
  fromButton.addEventListener("click", (e) => {
    fromButtonEvent(e, area);
  });

  // TO DROP DOWNS
  toDropDowns("SqMeter", "SqFeet", "SqYard", "SqKm");
  // TO BUTTON EVENTS
  toButton.addEventListener("click", (e) => {
    toButtonEvent(e, area);
  });
});

fromInput.addEventListener("input", calculation1);
toInput.addEventListener("input", calculation2);

function calculation1() {
  result = parseFloat(fromInput.value) * (fromUnit / toUnit);
  toInput.value = result;
}
function calculation2() {
  result = parseFloat(toInput.value) * (toUnit / fromUnit);
  fromInput.value = result;
}

function fromDropDowns(unit1, unit2, unit3, unit4) {
  const fromButton = document.getElementById("from-button");
  fromButton.lastChild.remove();

  const fromDropdown = document.createElement("div");
  fromDropdown.className = "from-dropdown";
  fromDropdown.id = "from-dropdown";

  fromButton.appendChild(fromDropdown);

  const fromUnit1 = document.createElement("button");
  fromUnit1.innerHTML = `${unit1}`;
  fromUnit1.className = `from-${unit1} button`;

  const fromUnit2 = document.createElement("button");
  fromUnit2.innerHTML = `${unit2}`;
  fromUnit2.className = `from-${unit2} button`;

  const fromUnit3 = document.createElement("button");
  fromUnit3.innerHTML = `${unit3}`;
  fromUnit3.className = `from-${unit3} button`;

  const fromUnit4 = document.createElement("button");
  fromUnit4.innerHTML = `${unit4}`;
  fromUnit4.className = `from-${unit4} button`;

  fromDropdown.appendChild(fromUnit1);
  fromDropdown.appendChild(fromUnit2);
  fromDropdown.appendChild(fromUnit3);
  fromDropdown.appendChild(fromUnit4);

  // FROM DROPDOWNS DYNAMICALLY

  fromButton.addEventListener("click", function () {
    fromDropdown.style.display = "flex";
    fromDropdown.style.flexDirection = "column";
    fromDropdown.style.alignItems = "center";
  });
  fromButton.addEventListener("mouseleave", function () {
    fromDropdown.style.display = "none";
  });
}

function toDropDowns(unit1, unit2, unit3, unit4) {
  const toButton = document.getElementById("to-button");
  toButton.lastChild.remove();

  const toDropdown = document.createElement("div");
  toDropdown.className = "to-dropdown";
  toDropdown.id = "to-dropdown";

  toButton.appendChild(toDropdown);

  const toUnit1 = document.createElement("button");
  toUnit1.innerHTML = `${unit1}`;
  toUnit1.className = `to-${unit1} button`;

  const toUnit2 = document.createElement("button");
  toUnit2.innerHTML = `${unit2}`;
  toUnit2.className = `to-${unit2} button`;

  const toUnit3 = document.createElement("button");
  toUnit3.innerHTML = `${unit3}`;
  toUnit3.className = `to-${unit3} button`;

  const toUnit4 = document.createElement("button");
  toUnit4.innerHTML = `${unit4}`;
  toUnit4.className = `to-${unit4} button`;

  toDropdown.appendChild(toUnit1);
  toDropdown.appendChild(toUnit2);
  toDropdown.appendChild(toUnit3);
  toDropdown.appendChild(toUnit4);

  // TO DROPDOWNS DYNAMICALLY

  toButton.addEventListener("click", function () {
    toDropdown.style.display = "flex";
    toDropdown.style.flexDirection = "column";
    toDropdown.style.alignItems = "center";
  });
  toButton.addEventListener("mouseleave", function () {
    toDropdown.style.display = "none";
  });
}

function fromButtonEvent(e, unit) {
  if (e.target.classList.contains(`from-${Object.keys(unit)[0]}`)) {
    fromText.innerText = Object.keys(unit)[0];
    fromUnit = Object.values(unit)[0];
    if (fromInput.value !== "") {
      calculation1();
    }
    console.log("1");
  } else if (e.target.classList.contains(`from-${Object.keys(unit)[1]}`)) {
    fromText.innerText = Object.keys(unit)[1];
    fromUnit = Object.values(unit)[1];
    if (fromInput.value !== "") {
      calculation1();
    }
    console.log("2");
  } else if (e.target.classList.contains(`from-${Object.keys(unit)[2]}`)) {
    fromText.innerText = Object.keys(unit)[2];
    fromUnit = Object.values(unit)[2];
    if (fromInput.value !== "") {
      calculation1();
    }
    console.log("3");
  } else if (e.target.classList.contains(`from-${Object.keys(unit)[3]}`)) {
    fromText.innerText = Object.keys(unit)[3];
    fromUnit = Object.values(unit)[3];
    if (fromInput.value !== "") {
      calculation1();
    }
    console.log("4");
  }
}

function toButtonEvent(e, unit) {
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
