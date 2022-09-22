import style from "./App.css";
import ResponsiveAppBar from "./components/Header/Header";
import GamePage from "./pages/GamePage";
import { Route, Routes } from "react-router-dom";
import BasicTable from "./components/WordList/WordList";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className={style.App}>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<BasicTable />}></Route>
        <Route path="/game" element={<GamePage />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
