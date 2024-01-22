import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    },[]);

    const updateNews = async () => {
        document.title = "NewsMonkey - " + `${capitalizeFirstLetter(props.category)}`;
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pgSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    const fetchMoreData = () => {
        setPage(page+1);
        updateNews();
    };

    return (
        <>
            <h1 className='text-center my-4'>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={loading && <Spinner />}>

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                <NewsItem source={element.source.name} author={element.author} date={new Date(element.publishedAt).toUTCString()} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>

            </InfiniteScroll>
        </>
    )
}
News.defaultProps = {
    country: "in",
    pgSize: 6,
    category: "general",
    key: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pgSize: PropTypes.number,
    apiKey: PropTypes.string.isRequired,
    category: PropTypes.string,
    key: PropTypes.string
}

export default News
