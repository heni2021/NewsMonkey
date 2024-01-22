import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pgSize: 6,
        category: "general",
        key: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pgSize: PropTypes.number,
        apiKey: PropTypes.string.isRequired,
        category: PropTypes.string,
        key: PropTypes.string
    }
    constructor(props) {
        super(props); // always write this to avoid error
        this.state = {
            article: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = "NewsMonkey - " + `${this.capitalizeFirstLetter(this.props.category)}`;
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // pgSize = ;

    // it will run after render method - a lifecycle method
    // it will wait due to await to fetch all the data from url
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pgSize}`;
        console.log(url);
        this.setState({
            loading: true
        })
        this.props.setProgress(10);
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        this.props.setProgress(60);
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pgSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        { console.log("Current: " +this.state.progress) }
        let parsedData = await data.json();
        this.props.setProgress(60);
        this.setState({
            article: this.state.article.concat(parsedData.articles),
            loading: false
        })
        this.props.setProgress(100);
    }

    fetchMoreData = () => {
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews();
    };
    render() {
        return (
            <>
                <h1 className='text-center my-4'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.article.length !== this.state.totalResults}
                    loader={this.state.loading && <Spinner />}>
                    
                    <div className="container">
                        <div className="row">
                            {this.state.article.map((element) => {
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
}

export default News
