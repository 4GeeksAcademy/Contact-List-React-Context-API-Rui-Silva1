import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeList from "./views/homelist.jsx"
import NewContact from "./views/addcontact.jsx"
import ContactCard from "./component/contactcard.jsx";
import injectContext from "./store/appContext";
import UpdateContact from "./component/updatecontact.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<HomeList />} />
					<Route path="/addcontact" element={<NewContact />} />
					<Route path="/contactcard/:id" element={<ContactCard />} />
					<Route path="/updatecontact/:id" element={<UpdateContact />} />
					<Route path="*" element={<h1>Page not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
