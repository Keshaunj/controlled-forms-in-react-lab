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
const [books,setBooks] = useState([
  { tilte: 'Fourth Wing', author: 'Rebecca Yarros'},
  {title: 'The Lion, the Wicth and the Wardrobe',author: 'C.S.'}
])

export default Bookshelf