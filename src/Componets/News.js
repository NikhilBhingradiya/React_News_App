import React, { Component } from 'react'

import NewsItem from './NewsItem'

export class News extends Component {
 articles =[{

 }]

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=6abcedd41bee492199939fa316d8c001&page1";
    let data =await fetch(url);
    let parseData =await data.json();
    console.log(parseData);
    this.setState({articles : parseData.articles});
  }

   cLickToBack= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=6abcedd41bee492199939fa316d8c001&page-${this.state.page - 1}`;
    let data =await fetch(url);
    let parseData =await data.json();
    console.log(parseData);
this.setState({
  page :this.state.page - 1,
  articles : parseData.articles

 })
 }

  cLickToNext= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=6abcedd41bee492199939fa316d8c001&page-${this.state.page + 1}`;
    let data =await fetch(url);
    let parseData =await data.json();
    console.log(parseData);
this.setState({
  page :this.state.page + 1,
  articles : parseData.articles

})
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>Top hedline: India</h2>
        </div>
        <div className="row">
          {this.state.articles.map((elements) => {
            return<div className="col-md-4">

              <NewsItem key={elements.url} title={elements.title} description={elements.title} imgUrl={elements.urlToImage} newsurl={elements.url}/>
            </div>


          })}

          <div className="container d-flex justify-content-between">
          <button disabled={this.page=1} type="button" class="btn btn-dark " onClick={this.cLickToBack}>  &larr;Previous</button>
    <button type="button" class="btn btn-dark" onClick={this.cLickToNext}>Next  &rarr;</button>
          </div>
        </div>


      </div>
    )
  }
}



export default News
