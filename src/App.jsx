import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [itemsCount, setItemsCount] = useState(0);
  return (
    <>
      <Header setItems={setItemsCount} itemsCount={itemsCount} />
      <Content setItems={setItemsCount} ItemsCount={itemsCount} />
    </>
  );
}

export default App;
