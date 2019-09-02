import React from "react";

import "./Tab.scss";

const Tab = ({ id, name, image }) => {
    return (
        <li className="tab" key={id}>
			<img src={image} alt={name} />
        </li>
    );
}

export default Tab;