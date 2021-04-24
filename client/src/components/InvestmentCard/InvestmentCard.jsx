import React from "react";
import "./InvestmentCard.css";

export default function InvestmentCard(props) {
  console.log("what?");
  return (
    <div className="card-container">
      <p>{props.investment.name}</p>
      <img
        style={{ height: "200px" }}
        src={props.investment.imgURL}
        alt={props.investment.name}
      />
      <p>{props.investment.price}</p>
    </div>
  );
}

// {allInvestments.map((investment) => (
//   <div style={{ backgroundColor: "red" }}>
//     <p>{investment.name}</p>
// <img
//   style={{ height: "200px" }}
//   src={investment.imgURL}
//   alt={investment.name}
// />
//     <p>{investment.price}</p>
//   </div>
// ))}
