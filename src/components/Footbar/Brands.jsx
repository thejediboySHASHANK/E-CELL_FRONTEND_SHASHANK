import React from "react";
import Trello from "../Main/Images/Trello.png"
import Google from "../Main/Images/images.jpeg"
import Notion from "../Main/Images/Notion.png"
import Slack from "../Main/Images/Slack.png"
import Monday from "../Main/Images/monday.png"

function Brands() {
    return (
        <div>
        <div className="whitespace">
        <img className="google" src={Google} alt="google.jpg"/>
        <img className="trello" src={Trello} alt="trello.png" />
        <img className="notion" src={Notion} alt="trello.png" />
        <img className="slack" src={Slack} alt="trello.png" />
        <img className="monday" src={Monday} alt="trello.png" />


        
            
        </div>
        </div>
    )
}

export default Brands;