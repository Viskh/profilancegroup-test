import React from "react";
import { useDispatch, useSelector } from "react-redux";

const NewsItem = ({ newsItem }) => {
  const dispatch = useDispatch();

  const { users, authorized } = useSelector((state) => state.usersReducer);

  const user = users.find((item) => item.login === authorized);

  const handleDeleteNews = (id) => {
    dispatch({ type: "DELETE_NEWS", payload: id });
  };

  const hanldeApproveNews = (id) => {
    dispatch({ type: "APPROVE_NEWS", payload: id });
  };

  return (
    <div className="news">
      <h2 className="news__name">{newsItem.name}</h2>
      <p className="news__text">{newsItem.text}</p>
      <h5 className="news__date">{newsItem.createDate}</h5>
      {authorized && user.role === "admin" && (
        <div className="news__btns">
          <button onClick={() => handleDeleteNews(newsItem.id)}>Удалить</button>

          {!newsItem.approved ? (
            <button onClick={() => hanldeApproveNews(newsItem.id)}>
              Одобрить
            </button>
          ) : <p>Одобрено</p>}
        </div>
      )}
    </div>
  );
};

export default NewsItem;
