import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  return (
    <main>
      <h1>Whistle Assessment</h1>

      <p>Current Step: {step}</p>

      <button onClick={() => setStep(step + 1)}>
        Next
      </button>
    </main>
  );
}

export default App;