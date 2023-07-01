import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        
        let {title,description,imgSrc,url} = this.props;    
        return (
            <div>
                <div className="card" style={{width: "22rem"}}>
                    <img src={imgSrc} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={url} className="btn btn-sm btn-primary" target="_blank">Read More...</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem