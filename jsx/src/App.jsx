function App() {
  const firstNumber = 20;
  const secondNumber = 10;

  return (
    <div>
      <h1>Total Number</h1>

      <p>Addition: {firstNumber + secondNumber}</p>
      <p>Subtraction: {firstNumber - secondNumber}</p>
      <p>Multiplication: {firstNumber * secondNumber}</p>
    </div>
  );
}

export default App;