import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddNews = () => {
  const dispatch = useDispatch();

  const [newsText, setNewsText] = useState("");
  const [newsName, setNewsName] = useState("");

  const handleAddNews = () => {
    if (newsName && newsText) {
      dispatch({ type: "ADD_NEWS", payload: { newsName, newsText } });
    }
    setNewsName("");
    setNewsText("");
  };

  return (
    <div className="add__news-form">
      <input
        value={newsName}
        onChange={(e) => setNewsName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <textarea
        value={newsText}
        onChange={(e) => setNewsText(e.target.value)}
        type="text"
        placeholder="text"
      />
      <button onClick={handleAddNews}>добавить новость</button>
    </div>
  );
};

export default AddNews;
