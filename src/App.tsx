import { GlobalStyles } from "./Components/GlobalStyles";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Planet from "./pages/Planet";
import Home from "./pages/Home";

function App() {
  console.log("rendered");

  return (
    <>
      <Header />
      <main>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Planet />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
