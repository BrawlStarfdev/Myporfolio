import React from "react";
import Loader from "react-loaders";
import card from "./card.json";
import "./index.scss";
import List_item from "./list_item";
const Experience = () => {
  console.log("card", card[1]);
  return (
    <>
      <div className="container-1">
        <div className="title-tag">
          <h3>My Experience</h3>
        </div>
        <div className="page-container-1">
          <div className="item_1">
            <List_item cardContent={card[0]} />
          </div>
          <div className="item_3"></div>
        </div>
        <div className="page-container-2">
          <div className="item_3"></div>
          <div className="item_2">
            <List_item cardContent={card[1]} />
          </div>
        </div>
        <div className="page-container-1">
          <div className="item_1">
            <List_item cardContent={card[2]} />
          </div>
          <div className="item_3"></div>
        </div>
      </div>

      <Loader type="ball-grid-pulse" />
    </>
  );
};

export default Experience;
