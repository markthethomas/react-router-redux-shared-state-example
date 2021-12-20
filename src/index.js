import React from "react";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cash from "./routes/cash";
import Transactions from "./routes/transactions";

import { render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="cash" element={<Cash />} />
                        <Route path="transactions" element={<Transactions />} />
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);
