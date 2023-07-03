let fromUnit;
let toUnit;

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

  const fromDropdown = document.createElement("div");
  fromDropdown.className = "from-dropdown";
  fromDropdown.id = "from-dropdown";

  fromButton.appendChild(fromDropdown);

  const fromGram = document.createElement("button");
  fromGram.innerHTML = "Gram";
  fromGram.className = "from-gram button";

  const fromPound = document.createElement("button");
  fromPound.innerHTML = "Pound";
  fromPound.className = "from-pound button";

  const fromOunce = document.createElement("button");
  fromOunce.innerHTML = "Ounce";
  fromOunce.className = "from-ounce button";

  const fromKg = document.createElement("button");
  fromKg.innerHTML = "kiloGram";
  fromKg.className = "from-kg button";

  fromDropdown.appendChild(fromGram);
  fromDropdown.appendChild(fromPound);
  fromDropdown.appendChild(fromOunce);
  fromDropdown.appendChild(fromKg);

  // FROM DROPDOWNS DYNAMICALLY

  fromButton.addEventListener("click", function () {
    fromDropdown.style.display = "flex";
    fromDropdown.style.flexDirection = "column";
    fromDropdown.style.alignItems = "center";
  });
  fromButton.addEventListener("mouseleave", function () {
    fromDropdown.style.display = "none";
  });

  // FROM BUTTON EVENTS
  fromButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("from-gram")) {
      fromText.innerText = "gram";
      fromUnit = 1;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("1");
    } else if (e.target.classList.contains("from-pound")) {
      fromText.innerText = "pound";
      fromUnit = 453.592;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("2");
    } else if (e.target.classList.contains("from-ounce")) {
      fromText.innerText = "ounce";
      fromUnit = 28 / 3495;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("3");
    } else if (e.target.classList.contains("from-kg")) {
      fromText.innerText = "Kg";
      fromUnit = 1000;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("4");
    }
  });

  // TO DROPDOWNS

  const toDropdown = document.createElement("div");
  toDropdown.className = "to-dropdown";
  toDropdown.id = "to-dropdown";

  toButton.appendChild(toDropdown);

  const toGram = document.createElement("button");
  toGram.innerHTML = "Gram";
  toGram.className = "to-gram button";

  const toPound = document.createElement("button");
  toPound.innerHTML = "Pound";
  toPound.className = "to-pound button";

  const toOunce = document.createElement("button");
  toOunce.innerHTML = "Ounce";
  toOunce.className = "to-ounce button";

  const toKg = document.createElement("button");
  toKg.innerHTML = "kiloGram";
  toKg.className = "to-kg button";

  toDropdown.appendChild(toGram);
  toDropdown.appendChild(toPound);
  toDropdown.appendChild(toOunce);
  toDropdown.appendChild(toKg);

  // TO DROPDOWN DYANMICALLY

  toButton.addEventListener("click", function () {
    toDropdown.style.display = "flex";
    toDropdown.style.flexDirection = "column";
    toDropdown.style.alignItems = "center";
  });
  toButton.addEventListener("mouseleave", function () {
    toDropdown.style.display = "none";
  });

  // TO BUTTON EVENTS

  toButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("to-gram")) {
      toText.innerText = "gram";
      toUnit = 1;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("1");
    } else if (e.target.classList.contains("to-pound")) {
      toText.innerText = "pound";
      toUnit = 453.592;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("2");
    } else if (e.target.classList.contains("to-ounce")) {
      toText.innerText = "ounce";
      toUnit = 28 / 3495;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("3");
    } else if (e.target.classList.contains("to-kg")) {
      toText.innerText = "Kg";
      toUnit = 1000;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("4");
    }
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

  const fromDropdown = document.createElement("div");
  fromDropdown.className = "from-dropdown";
  fromDropdown.id = "from-dropdown";

  fromButton.appendChild(fromDropdown);

  const fromMeter = document.createElement("button");
  fromMeter.innerHTML = "Meter";
  fromMeter.className = "from-meter button";

  const fromFeet = document.createElement("button");
  fromFeet.innerHTML = "Feet";
  fromFeet.className = "from-feet button";

  const fromYard = document.createElement("button");
  fromYard.innerHTML = "Yard";
  fromYard.className = "from-yard button";

  const fromKm = document.createElement("button");
  fromKm.innerHTML = "kiloMeter";
  fromKm.className = "from-km button";

  fromDropdown.appendChild(fromMeter);
  fromDropdown.appendChild(fromFeet);
  fromDropdown.appendChild(fromYard);
  fromDropdown.appendChild(fromKm);

  // FROM DROPDOWN DYNAMICALLY

  fromButton.addEventListener("click", function () {
    fromDropdown.style.display = "flex";
    fromDropdown.style.flexDirection = "column";
    fromDropdown.style.alignItems = "center";
  });
  fromButton.addEventListener("mouseleave", function () {
    fromDropdown.style.display = "none";
  });

  // FROM BUTTON EVENTS
  fromButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("from-meter")) {
      fromText.innerText = "Meter";
      fromUnit = 1;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("1");
    } else if (e.target.classList.contains("from-feet")) {
      fromText.innerText = "Feet";
      fromUnit = 453.592;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("2");
    } else if (e.target.classList.contains("from-yard")) {
      fromText.innerText = "Yard";
      fromUnit = 28 / 3495;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("3");
    } else if (e.target.classList.contains("from-km")) {
      fromText.innerText = "Km";
      fromUnit = 1000;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("4");
    }
  });

  // TO DROP DOWNS

  const toDropdown = document.createElement("div");
  toDropdown.className = "to-dropdown";
  toDropdown.id = "to-dropdown";

  toButton.appendChild(toDropdown);

  const toMeter = document.createElement("button");
  toMeter.innerHTML = "Meter";
  toMeter.className = "to-meter button";

  const toFeet = document.createElement("button");
  toFeet.innerHTML = "Feet";
  toFeet.className = "to-feet button";

  const toYard = document.createElement("button");
  toYard.innerHTML = "Yard";
  toYard.className = "to-yard button";

  const toKm = document.createElement("button");
  toKm.innerHTML = "kiloMeter";
  toKm.className = "to-km button";

  toDropdown.appendChild(toMeter);
  toDropdown.appendChild(toFeet);
  toDropdown.appendChild(toYard);
  toDropdown.appendChild(toKm);

  // TO DROPDOWN DYNAMICALLY

  toButton.addEventListener("click", function () {
    toDropdown.style.display = "flex";
    toDropdown.style.flexDirection = "column";
    toDropdown.style.alignItems = "center";
  });
  toButton.addEventListener("mouseleave", function () {
    toDropdown.style.display = "none";
  });

  // TO BUTTON EVENTS

  toButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("to-meter")) {
      toText.innerText = "Meter";
      toUnit = 1;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("1");
    } else if (e.target.classList.contains("to-feet")) {
      toText.innerText = "Feet";
      toUnit = 453.592;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("2");
    } else if (e.target.classList.contains("to-yard")) {
      toText.innerText = "Yard";
      toUnit = 28 / 3495;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("3");
    } else if (e.target.classList.contains("to-km")) {
      toText.innerText = "Km";
      toUnit = 1000;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("4");
    }
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

  const fromDropdown = document.createElement("div");
  fromDropdown.className = "from-dropdown";
  fromDropdown.id = "from-dropdown";

  fromButton.appendChild(fromDropdown);

  const fromLiter = document.createElement("button");
  fromLiter.innerHTML = "Liter";
  fromLiter.className = "from-liter button";

  const fromCubicMeter = document.createElement("button");
  fromCubicMeter.innerHTML = "Cubic Meter";
  fromCubicMeter.className = "from-cubicmeter button";

  const fromGallon = document.createElement("button");
  fromGallon.innerHTML = "Gallon";
  fromGallon.className = "from-gallon button";

  const fromCubicFoot = document.createElement("button");
  fromCubicFoot.innerHTML = "Cubic Foot";
  fromCubicFoot.className = "from-cubicfoot button";

  fromDropdown.appendChild(fromLiter);
  fromDropdown.appendChild(fromGallon);
  fromDropdown.appendChild(fromCubicFoot);
  fromDropdown.appendChild(fromCubicMeter);

  // FROM DROPDOWN DYNAMICALLY
  fromButton.addEventListener("click", function () {
    fromDropdown.style.display = "flex";
    fromDropdown.style.flexDirection = "column";
    fromDropdown.style.alignItems = "center";
  });
  fromButton.addEventListener("mouseleave", function () {
    fromDropdown.style.display = "none";
  });

  // FROM BUTTON EVENTS

  fromButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("from-liter")) {
      fromText.innerText = "Liter";
      fromUnit = 1;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("1");
    } else if (e.target.classList.contains("from-gallon")) {
      fromText.innerText = "Gallon";
      fromUnit = 453.592;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("2");
    } else if (e.target.classList.contains("from-cubicfoot")) {
      fromText.innerText = "Cubic Foot";
      fromUnit = 28 / 3495;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("3");
    } else if (e.target.classList.contains("from-cubicmeter")) {
      fromText.innerText = "Cubic Meter";
      fromUnit = 1000;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("4");
    }
  });
  // TO DROP DOWNS

  const toDropdown = document.createElement("div");
  toDropdown.className = "to-dropdown";
  toDropdown.id = "to-dropdown";

  toButton.appendChild(toDropdown);

  const toLiter = document.createElement("button");
  toLiter.innerHTML = "Liter";
  toLiter.className = "to-liter button";

  const toCubicMeter = document.createElement("button");
  toCubicMeter.innerHTML = "Cubic Meter";
  toCubicMeter.className = "to-cubicmeter button";

  const toGallon = document.createElement("button");
  toGallon.innerHTML = "Gallon";
  toGallon.className = "to-gallon button";

  const toCubicFoot = document.createElement("button");
  toCubicFoot.innerHTML = "Cubic Foot";
  toCubicFoot.className = "to-cubicfoot button";

  toDropdown.appendChild(toLiter);
  toDropdown.appendChild(toGallon);
  toDropdown.appendChild(toCubicFoot);
  toDropdown.appendChild(toCubicMeter);

  // TO DROPDOWN DYNAMICALLY
  toButton.addEventListener("click", function () {
    toDropdown.style.display = "flex";
    toDropdown.style.flexDirection = "column";
    toDropdown.style.alignItems = "center";
  });
  toButton.addEventListener("mouseleave", function () {
    toDropdown.style.display = "none";
  });

  // TO BUTTON EVENTS
  toButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("to-liter")) {
      toText.innerText = "Liter";
      toUnit = 1;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("1");
    } else if (e.target.classList.contains("to-gallon")) {
      toText.innerText = "Gallon";
      toUnit = 453.592;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("2");
    } else if (e.target.classList.contains("to-cubicfoot")) {
      toText.innerText = "Cubic Foot";
      toUnit = 28 / 3495;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("3");
    } else if (e.target.classList.contains("to-cubicmeter")) {
      toText.innerText = "Cubic Meter";
      toUnit = 1000;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("4");
    }
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

  const fromDropdown = document.createElement("div");
  fromDropdown.className = "from-dropdown";
  fromDropdown.id = "from-dropdown";

  fromButton.appendChild(fromDropdown);

  const fromPascal = document.createElement("button");
  fromPascal.innerHTML = "Pascal";
  fromPascal.className = "from-pascal button";

  const fromBar = document.createElement("button");
  fromBar.innerHTML = "Bar";
  fromBar.className = "from-bar button";

  const fromatm = document.createElement("button");
  fromatm.innerHTML = "atm";
  fromatm.className = "from-atm button";

  const fromTorr = document.createElement("button");
  fromTorr.innerHTML = "Torr";
  fromTorr.className = "from-torr button";

  fromDropdown.appendChild(fromPascal);
  fromDropdown.appendChild(fromBar);
  fromDropdown.appendChild(fromatm);
  fromDropdown.appendChild(fromTorr);

  // FROM DROPDOWN DYNAMICALLY

  fromButton.addEventListener("click", function () {
    fromDropdown.style.display = "flex";
    fromDropdown.style.flexDirection = "column";
    fromDropdown.style.alignItems = "center";
  });
  fromButton.addEventListener("mouseleave", function () {
    fromDropdown.style.display = "none";
  });

  // FROM BUTTON EVENTS
  fromButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("from-pascal")) {
      fromText.innerText = "Pascal";
      fromUnit = 1;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("1");
    } else if (e.target.classList.contains("from-bar")) {
      fromText.innerText = "Bar";
      fromUnit = 453.592;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("2");
    } else if (e.target.classList.contains("from-atm")) {
      fromText.innerText = "atm";
      fromUnit = 28 / 3495;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("3");
    } else if (e.target.classList.contains("from-torr")) {
      fromText.innerText = "Torr";
      fromUnit = 1000;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("4");
    }
  });

  // TO DROP DOWNS
  const toDropdown = document.createElement("div");
  toDropdown.className = "to-dropdown";
  toDropdown.id = "to-dropdown";

  toButton.appendChild(toDropdown);

  const toPascal = document.createElement("button");
  toPascal.innerHTML = "Pascal";
  toPascal.className = "to-pascal button";

  const toBar = document.createElement("button");
  toBar.innerHTML = "Bar";
  toBar.className = "to-bar button";

  const toatm = document.createElement("button");
  toatm.innerHTML = "atm";
  toatm.className = "to-atm button";

  const toTorr = document.createElement("button");
  toTorr.innerHTML = "Torr";
  toTorr.className = "to-torr button";

  toDropdown.appendChild(toPascal);
  toDropdown.appendChild(toBar);
  toDropdown.appendChild(toatm);
  toDropdown.appendChild(toTorr);

  // TO DROPDOWN DYNAMICALLY
  toButton.addEventListener("click", function () {
    toDropdown.style.display = "flex";
    toDropdown.style.flexDirection = "column";
    toDropdown.style.alignItems = "center";
  });
  toButton.addEventListener("mouseleave", function () {
    toDropdown.style.display = "none";
  });

  // TO BUTTON EVENTS
  toButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("to-pascal")) {
      toText.innerText = "Pascal";
      toUnit = 1;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("1");
    } else if (e.target.classList.contains("to-bar")) {
      toText.innerText = "Bar";
      toUnit = 453.592;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("2");
    } else if (e.target.classList.contains("to-atm")) {
      toText.innerText = "atm";
      toUnit = 28 / 3495;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("3");
    } else if (e.target.classList.contains("to-torr")) {
      toText.innerText = "Torr";
      toUnit = 1000;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("4");
    }
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

    const fromDropdown = document.createElement("div");
    fromDropdown.className = "from-dropdown";
    fromDropdown.id = "from-dropdown";

    fromButton.appendChild(fromDropdown);

    const fromCelsius = document.createElement("button");
    fromCelsius.innerHTML = "Degree Celsius";
    fromCelsius.className = "from-celsius button";

    const fromFahrenheit = document.createElement("button");
    fromFahrenheit.innerHTML = "Fahrenheit";
    fromFahrenheit.className = "from-fahrenheit button";

    const fromKelvin = document.createElement("button");
    fromKelvin.innerHTML = "Kelvin";
    fromKelvin.className = "from-kelvin button";

    fromDropdown.appendChild(fromCelsius);
    fromDropdown.appendChild(fromFahrenheit);
    fromDropdown.appendChild(fromKelvin);

    // FROM DROPDOWN DYNAMICALLY
    fromButton.addEventListener("click", function () {
      fromDropdown.style.display = "flex";
      fromDropdown.style.flexDirection = "column";
      fromDropdown.style.alignItems = "center";
      fromDropdown.style.marginTop = "6.2em";
    });
    fromButton.addEventListener("mouseleave", function () {
      fromDropdown.style.display = "none";
    });
    // FROM BUTTON EVENTS
    fromButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("from-celsius")) {
        fromText.innerText = "Celsius";
        fromUnit = 1;
        if (fromInput.value !== "") {
          calculation1();
        }
        console.log("1");
      } else if (e.target.classList.contains("from-fahrenheit")) {
        fromText.innerText = "Fahrenheit";
        fromUnit = 453.592;
        if (fromInput.value !== "") {
          calculation1();
        }
        console.log("2");
      } else if (e.target.classList.contains("from-kelvin")) {
        fromText.innerText = "Kelvin";
        fromUnit = 28 / 3495;
        if (fromInput.value !== "") {
          calculation1();
        }
        console.log("3");
      }
    });
    // TO DROP DOWNS

    const toDropdown = document.createElement("div");
    toDropdown.className = "to-dropdown";
    toDropdown.id = "to-dropdown";

    toButton.appendChild(toDropdown);

    const toCelsius = document.createElement("button");
    toCelsius.innerHTML = "Degree Celsius";
    toCelsius.className = "to-celsius button";

    const toFahrenheit = document.createElement("button");
    toFahrenheit.innerHTML = "Fahrenheit";
    toFahrenheit.className = "to-fahrenheit button";

    const toKelvin = document.createElement("button");
    toKelvin.innerHTML = "Kelvin";
    toKelvin.className = "to-kelvin button";

    toDropdown.appendChild(toCelsius);
    toDropdown.appendChild(toFahrenheit);
    toDropdown.appendChild(toKelvin);
    // TO DROPDOWN DYNAMICALLY
    toButton.addEventListener("click", function () {
      toDropdown.style.display = "flex";
      toDropdown.style.flexDirection = "column";
      toDropdown.style.alignItems = "center";
      toDropdown.style.marginTop = "6.2em";
    });
    toButton.addEventListener("mouseleave", function () {
      toDropdown.style.display = "none";
    });
    // TO BUTTON EVENTS
    toButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("to-celsius")) {
        toText.innerText = "Celsius";
        toUnit = 1;
        if (toInput.value !== "") {
          calculation2();
        } else {
          calculation1();
        }
        console.log("1");
      } else if (e.target.classList.contains("to-fahrenheit")) {
        toText.innerText = "Fahrenheit";
        toUnit = 453.592;
        if (toInput.value !== "") {
          calculation2();
        } else {
          calculation1();
        }
        console.log("2");
      } else if (e.target.classList.contains("to-kelvin")) {
        toText.innerText = "Kelvin";
        toUnit = 28 / 3495;
        if (toInput.value !== "") {
          calculation2();
        } else {
          calculation1();
        }
        console.log("3");
      }
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
  const fromDropdown = document.createElement("div");
  fromDropdown.className = "from-dropdown";
  fromDropdown.id = "from-dropdown";

  fromButton.appendChild(fromDropdown);

  const fromSqMeter = document.createElement("button");
  fromSqMeter.innerHTML = "Square Meter";
  fromSqMeter.className = "from-SqMeter button";

  const fromSqFeet = document.createElement("button");
  fromSqFeet.innerHTML = "Square Feet";
  fromSqFeet.className = "from-SqFeet button";

  const fromSqYard = document.createElement("button");
  fromSqYard.innerHTML = "Square Yard";
  fromSqYard.className = "from-SqYard button";

  const fromSqKm = document.createElement("button");
  fromSqKm.innerHTML = "Square KM";
  fromSqKm.className = "from-SqKm button";

  fromDropdown.appendChild(fromSqMeter);
  fromDropdown.appendChild(fromSqFeet);
  fromDropdown.appendChild(fromSqYard);
  fromDropdown.appendChild(fromSqKm);

  // FROM DROPDOWN DYNAMICALLY
  fromButton.addEventListener("click", function () {
    fromDropdown.style.display = "flex";
    fromDropdown.style.flexDirection = "column";
    fromDropdown.style.alignItems = "center";
  });
  fromButton.addEventListener("mouseleave", function () {
    fromDropdown.style.display = "none";
  });

  // FROM BUTTON EVENTS
  fromButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("from-SqMeter")) {
      fromText.innerText = "Square Meter";
      fromUnit = 1;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("1");
    } else if (e.target.classList.contains("from-SqFeet")) {
      fromText.innerText = "Square Feet";
      fromUnit = 453.592;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("2");
    } else if (e.target.classList.contains("from-SqYard")) {
      fromText.innerText = "Square Yard";
      fromUnit = 28 / 3495;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("3");
    } else if (e.target.classList.contains("from-SqKm")) {
      fromText.innerText = "Square KM";
      fromUnit = 1000;
      if (fromInput.value !== "") {
        calculation1();
      }
      console.log("4");
    }
  });

  // TO DROP DOWNS
  const toDropdown = document.createElement("div");
  toDropdown.className = "from-dropdown";
  toDropdown.id = "from-dropdown";

  toButton.appendChild(toDropdown);

  const toSqMeter = document.createElement("button");
  toSqMeter.innerHTML = "Square Meter";
  toSqMeter.className = "to-SqMeter button";

  const toSqFeet = document.createElement("button");
  toSqFeet.innerHTML = "Square Feet";
  toSqFeet.className = "to-SqFeet button";

  const toSqYard = document.createElement("button");
  toSqYard.innerHTML = "Square Yard";
  toSqYard.className = "to-SqYard button";

  const toSqKm = document.createElement("button");
  toSqKm.innerHTML = "Square KM";
  toSqKm.className = "to-SqKm button";

  toDropdown.appendChild(toSqMeter);
  toDropdown.appendChild(toSqFeet);
  toDropdown.appendChild(toSqYard);
  toDropdown.appendChild(toSqKm);

  // TO DROPDOWN DYNAMICALLY

  toButton.addEventListener("click", function () {
    toDropdown.style.display = "flex";
    toDropdown.style.flexDirection = "column";
    toDropdown.style.alignItems = "center";
  });
  toButton.addEventListener("mouseleave", function () {
    toDropdown.style.display = "none";
  });
  // TO BUTTON EVENTS
  toButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("to-SqMeter")) {
      toText.innerText = "Square Meter";
      toUnit = 1;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("1");
    } else if (e.target.classList.contains("to-SqFeet")) {
      toText.innerText = "Square Feet";
      toUnit = 453.592;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("2");
    } else if (e.target.classList.contains("to-SqYard")) {
      toText.innerText = "Square Yard";
      toUnit = 28 / 3495;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("3");
    } else if (e.target.classList.contains("to-SqKm")) {
      toText.innerText = "Square KM";
      toUnit = 1000;
      if (toInput.value !== "") {
        calculation2();
      } else {
        calculation1();
      }
      console.log("4");
    }
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
