const inputs = document.querySelectorAll("input");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    const currentValue = +e.target.value;

    switch (e.target.name) {
      case "celsius":
        kelvin.value = (currentValue + 273).toFixed(2);
        fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
        break;
      case "fahrenheit":
        celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
        kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
        break;
      case "kelvin":
        celsius.value = (currentValue - 273.32).toFixed(2);
        fahrenheit.value = ((currentValue - 273.32) * 1.8 + 273.32).toFixed(2);
        break;

      default:
        break;
    }
  });
});
