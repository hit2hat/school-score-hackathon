import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vk-connect";

import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";

// Init VK  Mini App
connect.send("VKWebAppInit");

// Scheme
connect.send("VKWebAppInit");
connect.subscribe(({ detail: { type, data }}) => {
	if (type === "VKWebAppUpdateConfig") {
		const schemeAttribute = document.createAttribute("scheme");
		schemeAttribute.value = data.scheme ? data.scheme : "bright_light";
		document.body.attributes.setNamedItem(schemeAttribute);
	}
});

ReactDOM.render(<App />, document.getElementById("root"));
