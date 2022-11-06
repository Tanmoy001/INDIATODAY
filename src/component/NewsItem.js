
import React, { Component } from 'react'

export default class NewsItem extends Component {
 
  render() {

    let{title,description,imageUrl,url,author,date,source}=this.props
    return (
      
      <div>
        <div className="card" style={{width: "100%"}}>
  <img className="card-img-top" src={!imageUrl?"https://c.ndtvimg.com/2022-09/rt1rjqqg_sourav-ganguly-jay-shah_625x300_14_September_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675":imageUrl} alt="...."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    
    <p className="card-text">{description}</p>
    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:'1'}}>{source}
  </span>
    <p className="card-text"><small className="text-muted">by {!author?"anomamous":author} on {new Date(date).toGMTString()}</small></p>
    <a href={url} className="btn btn-sm btn-primary">More</a>
  </div>
</div>
      </div>
    )
  }
}
