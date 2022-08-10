import React, { Component } from 'react'
import Newsitm from './Newsitm'
import PropTypes from 'prop-types'
import pinner from '../Spinner';


export class News extends Component {
  static defaultProps={
    country:'in',
     pageSize:5,
     category:'general' 
  }
  static propTypes={
     country:PropTypes.string,
     pageSize:PropTypes.number,
     category:PropTypes.string

  }
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1,
      
    }
    document.title=`uNews - ${this.props.category}`;
  }
  async undateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ce16ccfe06354b76be3f5039c63ec7b0&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData= await data.json()
    console.log(parseData)
    this.setState({articles:parseData.articles,totalResult:parseData.totalResult})
  }
  // fetching data through api
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ce16ccfe06354b76be3f5039c63ec7b0&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData= await data.json()
    console.log(parseData)
    this.setState({articles:parseData.articles,totalResult:parseData.totalResult})
}
handlenextclick=async()=>{
  console.log("next is clicked")
  if(this.state.page +1 > Math.ceil(this.state.totalResult/this.props.pageSize)){

  }
  else{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ce16ccfe06354b76be3f5039c63ec7b0&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData= await data.json()
  this.setState(
    {
      page:this.state.page +1,
      articles:parseData.articles
      

    }
  )
  }
  // this.setState({page:this.state.page+ 1});
  // this.undateNews()

} 
handlepreviousclick=async()=>{
//  console.log("previous is clicked") 
//  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ce16ccfe06354b76be3f5039c63ec7b0&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parseData= await data.json()
//   this.setState(
//     {
//       page:this.state.page-1,
//       articles:parseData.articles
      

//     }
  // )
this.setState({page:this.state.page - 1});
  this.undateNews()
}
render() {
    return (
      <div className="container">
        <h1 className='text-center' style={{margin:'35px 0px'}}>uNews Top {this.props.category} headlines  </h1>
        {/* <Spinner/> */}
         <div className="row">
       {this.state.articles.map((element)=>{
       return <div className="col-md-4 " key={element.url}>
        <Newsitm title={element.title?element.title:""}  description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}
        published={element.publishedAt?element.publishedAt:""} author={element.author}/>
        </div>
      })}
        {/* md-4 mean there are total of 12 space(grid in screen ) so there are total of
        of 3 columns so that is why each is given md-4 md mean medium */}
       </div>
       <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1}  type="button" className="btn btn-dark " onClick={this.handlepreviousclick}> &larr;previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr; </button>
       </div>
     </div>
    )
  }
}

export default News