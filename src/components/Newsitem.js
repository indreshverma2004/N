import React, { Component } from 'react'

export class Newsitem extends Component {
    
  render() {
    let {title,description,imageurl,newsurl,author,date}=this.props;
    return (
      <div className='my-3'>
        This is a news item
        <div className="card" style={{width: "18rem"}}>
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsurl} target="_blank" className="btn-btn-sm btn btn-dark">Read More</a>
                {/* target=_blank isliye kiya taki read morea dabate hi new page open ho */}
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
