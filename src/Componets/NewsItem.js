import React, { Component } from 'react'

export class NewsItem extends Component {
 
 

render(){
let { title, description, imgUrl, newsurl} = this.props;


return (
  <div className='my-3'>
    <div className="card" style={{ width: "18rem" }}>
      <img src={!imgUrl?"https://images.news18.com/ibnlive/uploads/2023/02/news18-33-5-167646460016x9.png" :imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
      </div>
    </div>
   
  </div>
)

  }
  

}

export default NewsItem
