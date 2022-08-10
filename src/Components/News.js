import React, { Component, useState } from "react";
import { useEffect } from "react";
import Newsitm from "./Newsitm";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResult, settotalresult] = useState(0);
  const undateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=ce16ccfe06354b76be3f5039c63ec7b0&page=1&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(parseData.articles);
    settotalresult(parseData.totalResult);
  };
  // fetching data through api
  useEffect(() => {
    document.title = `uNews - ${props.category}`;
    undateNews();
  }, []);
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apikey=ce16ccfe06354b76be3f5039c63ec7b0&page=${
      page + 1
    }&Size=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    settotalresult(parseData.totalResult);
  };
  return (
    <div className="container">
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        uNews Top {props.category} headlines{" "}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<h4>Loading...</h4>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <Newsitm
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    published={element.publishedAt ? element.publishedAt : ""}
                    author={element.author}
                  />
                </div>
              );
            })}
            {/* md-4 mean there are total of 12 space(grid in screen ) so there are total of
        of 3 columns so that is why each is given md-4 md mean medium */}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
