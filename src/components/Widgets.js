import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "../styles/Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgetsArticle">
      <div className="widgetsArticleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgetsArticleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgetsHeader">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Mr. Sherzod Coding", "Coding - 7885 readers")}
      {newsArticle(
        "Planning to spend time in Tashkent",
        "Cities - 2512 readers"
      )}
      {newsArticle(
        "Tesla producing new car Model s plaid",
        "News - 7885 readers"
      )}
      {newsArticle(
        "Coronivirus again spreading fastly",
        "Virus - 5231 readers"
      )}
      {newsArticle("Just do it fund started", "Funding - 5555 readers")}
      {newsArticle(
        "Uzbekistan at tokyo olympics won its first gold",
        "Sport - 4125 readers"
      )}
    </div>
  );
}

export default Widgets;
