import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
// Забыл сказать, что все импорты main.css в client/pages я вынес сюда для избежания путаницы.
// Также переместил стиль для класса .way в main.css (Удалить после прочтения)
import "./styles/main.css"

export default function App() {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  );
}
