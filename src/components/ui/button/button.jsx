import React from "react";
import "./style.css";

export default function Button({ children, minWidth }) {
	return (
		<button min-width={minWidth} className="button">{children}</button>
	);
};
