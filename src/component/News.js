import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


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
            loading: false,
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
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        article: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
    });
}

    async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pgSize}`;
    this.setState({
        loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        article: parsedData.articles,
        loading: false
    })
}

handleNextClick = async () => {
    this.setState({
        page: this.state.page + 1,
    });
    this.updateNews();
}

handlePreviousClick = async () => {
    this.setState({
        page: this.state.page - 1,
    });
    this.updateNews();
}

render() {
    return (
        <div className='container'>
            <h1 className='text-center my-4'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner />}
            <div className="row mx-2">
                {!this.state.loading && this.state.article.map((element) => {
                    return <div className="col-md-4" key={element.url} >
                        <NewsItem source={element.source.name} author={element.author} date={new Date(element.publishedAt).toUTCString()} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button disabled={Math.ceil(this.state.totalResults / this.props.pgSize) < this.state.page + 1} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
            </div>
        </div>
    )
}
}

export default News
