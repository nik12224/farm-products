import React from "react";
import "./style.css";

export default function Button({ children }) {
	return (
		<button className="button">{children}</button>
	);
};
