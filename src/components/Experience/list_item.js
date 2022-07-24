import React from "react";
const List_item = (props) => {
  console.log("cardContent: ", props.cardContent);
  const content = props.cardContent;
  console.log(content.description.split("\n"));
  return (
    <>
      <div className="item-container text-zone-1">
        <div className="item-title-1">
          <p>{content.companyName}</p>
          &nbsp;&nbsp;&nbsp;<p>{content.location}</p>
          <hr />
          <p>{content.timeDate}</p>
        </div>
        <div className="item-title-1">
          <p>{content.title}</p>
          <hr />
          <p>{content.jobType}</p>
        </div>

        <p>
          {content.description.split("\n").map((e) => {
            return <li>{e}</li>;
          })}
        </p>
      </div>
    </>
  );
};
export default List_item;
