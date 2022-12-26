// This JSX file is for rest of the items in Navbar excluding the title 

import React from "react";
import NavItems from "./NavItems";

function NavList(props) {
    return (
        <div className="Nav2">
            <p className="NavItems1">{NavItems[0].name}</p>
            <p className="NavItems2">{NavItems[1].name}</p>
            <p className="NavItems3">{NavItems[2].name}</p>
        </div>
    )
}

export default NavList;