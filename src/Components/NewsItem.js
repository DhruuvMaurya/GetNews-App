import React, { Component } from "react";

export default class Newsitem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="card" style={{ height: "100%" }}>
          <div style={{ width: "100%", height: "230px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span className="badge bg-danger">{source}</span>
            </div>
            <img style={{width: "100%", height:"100%", objectFit:"cover"}}
              src={
                imageUrl
                  ? imageUrl
                  : "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"
              }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank">
             <button className="btn btn-sm text-bg-danger">
              Read More
              </button>
            </a>
          </div>
        </div>
      </>
    );
  }
}

