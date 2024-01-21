import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>

          <img src={imageUrl ? imageUrl : "https://media.lesechos.com/api/v1/images/view/65a91f4904ec5f2ab71234a8/1280x720/01002261039525-web-tete.jpg"} className="card-img-top" alt="Image Not Loaded!" />
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
            {source}
            <span class="visually-hidden">unread messages</span></span>
          <div className="card-body">

            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
