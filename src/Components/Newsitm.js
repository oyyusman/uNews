import React, { Component } from 'react'
import PropTypes from 'prop-types'



const Newsitm=(props)=> {
  let {title,description,imageUrl, newsUrl,published,author}=props
    return (
        <div>
        <div className="card" >
  <img src={!imageUrl?"https://nypost.com/wp-content/uploads/sites/2/2022/08/Paul_Newberry_College_Chaos_Football_Football.jpg?quality=75&strip=all&w=1024" :imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} On {published}</small></p>

    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default Newsitm