import { useState } from "react";
import './App.css';

const Bookshelf = () => {
  return (
    <div className="bookshelfDiv">
      <div classNmae="formDiv">
        <h3>Add a Book</h3>
        {/*my form will be here*/}
      </div>
        <div className="bookCardsDiv"></div>
    </div>
  );
};

export default Bookshelf