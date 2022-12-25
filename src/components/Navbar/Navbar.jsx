// Compilation of all the NavBar items 

import React from "react";
import Title from "./NavTitle";
import NavItems from "./NavItems";
import NavList from "./NavList";

function CreateNavItems(NavItems) {
    return (
        <NavList
            key={NavItems.id}
            name={NavItems.name}
        />
    )
}

function NavBar() {
    return (
        <div>
            <Title />
            {/* {NavItems.map(CreateNavItems)} */}
            {/* <NavList /> */}


        </div>
    )
}

export default NavBar;