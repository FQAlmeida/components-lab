import React from "react";
import Diferenciais from "./components/diferenciais/atrium/deferenciais-2.0";
import "./components/global/style/fonts.css";
import "./components/global/style/style.css";
import Servicos from "./components/servicos/atrium/services-2.0";
import Parceiros from "./components_test/parceiros/v1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ padding: "black 2px solid" }}>
          {/* <Diferenciais /> */}
          {/*<Servicos/>*/}
          <Parceiros />
        </div>
      </header>
    </div>
  );
}

export default App;
