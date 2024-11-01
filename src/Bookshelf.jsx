import { useState } from "react";
import './App.css';

const Bookshelf = () => {
  
  const [books, setBooks] = useState([
    { title: 'PePe University', author: 'Macrus Pepe' },
    { title: 'The Changed Man, and the Digital Law', author: 'Keshaun D jones' }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    author: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prevFormData) => ({
      ...prevFormData,     
      [name]: value       
    }));
  };

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, formData]); 
    setFormData({ title: '', author: '' }); n
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"          
              value={formData.title} 
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Author:
            <input
              type="text"
              name="author"         
              value={formData.author} 
              onChange={handleInputChange} 
            />
          </label>
          <br />
          <button className="SubmitBttn" type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        <h3>Bookshelf</h3>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bookshelf;
