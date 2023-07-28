import React from "react";
import ColorList from "./ColorList";
import ColorItem from "./ColorItem";

;
function App() {
  return (
    <div>
      <ColorList />
      <ColorItem color={'orange'} />
    </div>
  );
}

export default App;
