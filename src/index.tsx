import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./layout/index";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<>
		<Provider store={store}>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</Provider>
	</>
);
