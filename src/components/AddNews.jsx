import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddNews = ({ setOpenModalAddNews }) => {
  const dispatch = useDispatch();

  const [newsText, setNewsText] = useState("");
  const [newsName, setNewsName] = useState("");

  const handleAddNews = () => {
    if (newsName && newsText) {
      dispatch({ type: "ADD_NEWS", payload: { newsName, newsText } });
    }
    setNewsName("");
    setNewsText("");
    setOpenModalAddNews(false);
  };

  return (
    <div className="modal-window" onClick={() => setOpenModalAddNews(false)}>
      <div
        className="modal-window__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-window__add-news">
          <input
            className="input__add-news"
            value={newsName}
            onChange={(e) => setNewsName(e.target.value)}
            type="text"
            placeholder="название новости"
          />
          <textarea
            className="textarea__add-news"
            value={newsText}
            onChange={(e) => setNewsText(e.target.value)}
            type="text"
            placeholder="текст новости"
          />
          <button className="btn____add-news" onClick={handleAddNews}>
            добавить новость
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
