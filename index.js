const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate-button');
const bmiResult = document.getElementById('bmi-result');

 const cal = () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = weight / (height * height);
  bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}`;
};

calculateButton.addEventListener('click', cal);



