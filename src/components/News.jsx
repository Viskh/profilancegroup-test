import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddNews from "./AddNews";
import Header from "./Header";
import NewsItem from "./NewsItem";

const News = () => {
  const [searchNews, setSearchNews] = useState("");

  const news = useSelector((state) => state.newsReducer.news);
  const { users, authorized } = useSelector((state) => state.usersReducer);

  const user = users.find((item) => item.login === authorized);

  const filteredNews = news.filter((newsItem) => {
    return newsItem.name.toLowerCase().includes(searchNews.toLowerCase());
  });

  const approvedNews = filteredNews.filter((newsItem) => newsItem.approved);

  return (
    <>
      <Header />
      <main className="main">
        {authorized && user.role === "user" && <AddNews />}
        <div className="main__container">
          <div className="main__search-form">
            <input
              value={searchNews}
              onChange={(e) => setSearchNews(e.target.value)}
              type="text"
            />
          </div>

          {authorized
            ? filteredNews.map((newsItem) => {
                return <NewsItem key={newsItem.id} newsItem={newsItem} />;
              })
            : approvedNews.map((newsItem) => {
                return <NewsItem key={newsItem.id} newsItem={newsItem} />;
              })}
        </div>
      </main>
    </>
  );
};

export default News;
