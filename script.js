function calculate() {
    const weight = Number(document.getElementById("weight").value);
    const gender = document.getElementById("gender").value;
    const num_bottles = Number(document.getElementById("num_bottles").value);
    const time = Number(document.getElementById("time").value);
    
    let litres = num_bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let grams_left = grams - (burning * time);
    let result;
    if (gender === "male") {
      result = grams_left / (weight * 0.7);
    } else if (gender === "female") {
      result = grams_left / (weight * 0.6);
    } else {
      result = "Invalid gender";
    }
    if (result < 0) {
      result = 0;
    }
    document.getElementById("result").innerHTML = result;
  }