import { useState } from "react";
import PriceForm from "./components/PriceForm";
import PriceTable from "./components/PriceTable";

function App() {
  const [prices, setPrices] = useState([]);

  return (
    <div className="App">
      <PriceForm onFormSubmit={(data) => setPrices([...prices, data])} />
      <PriceTable values={prices} />
    </div>
  );
}

export default App;
