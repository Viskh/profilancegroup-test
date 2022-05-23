import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header";
import NewsItem from "./NewsItem";

const News = () => {
  const [searchNews, setSearchNews] = useState("");

  const news = useSelector((state) => state.newsReducer.news);
  const { authorized } = useSelector((state) => state.usersReducer);

  const filteredNews = news.filter((newsItem) => {
    return newsItem.name.toLowerCase().includes(searchNews.toLowerCase());
  });

  const approvedNews = filteredNews.filter((newsItem) => newsItem.approved);

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <div className="main__search-form">
            <input
              placeholder="введите название для поиска"
              value={searchNews}
              onChange={(e) => setSearchNews(e.target.value)}
              type="text"
            />
          </div>

          <div className="main__news-list">
            {!filteredNews.length && <h1>Нет новостей</h1>}
            {authorized
              ? filteredNews.map((newsItem) => {
                  return <NewsItem key={newsItem.id} newsItem={newsItem} />;
                })
              : approvedNews.map((newsItem) => {
                  return <NewsItem key={newsItem.id} newsItem={newsItem} />;
                })}
          </div>
        </div>
      </main>
    </>
  );
};

export default News;
