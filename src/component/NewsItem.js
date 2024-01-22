import React from 'react'

const NewsItem = (props) => {
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>

          <img src={props.imageUrl ? props.imageUrl : "https://media.lesechos.com/api/v1/images/view/65a91f4904ec5f2ab71234a8/1280x720/01002261039525-web-tete.jpg"} className="card-img-top" alt="Image Not Loaded!" />
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
            {props.source}
            <span className="visually-hidden">unread messages</span></span>
          <div className="card-body">

            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text"><small className="text-muted">By {props.author ? props.author : "Unknown"} on {props.date}</small></p>
            <a rel="noreferrer" href={props.newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
