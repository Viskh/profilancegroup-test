import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const News = () => {
  const news = useSelector((state) => state.newsReducer.news);

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          {news.map((newsItem) => {
            return (
              <div key={newsItem.id} className="news">
                <h2 className="news__name">{newsItem.name}</h2>
                <p className="news__text">{newsItem.text}</p>
                <h5 className="news__date">{newsItem.createDate}</h5>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default News;
