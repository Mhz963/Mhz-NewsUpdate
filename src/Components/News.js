import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

   
      constructor()
      {
            console.log("Constructors")
            super();
            this.state = {
                articles: [],
                loading: false,
                page:1 
            }
      }

      
      
    async componentDidMount()
    {
        console.log(this.state.page)
        console.log("cmd");
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=47e7924d20984e2fb50176cbe7cfa397&page="  + this.state.page;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
        console.log(parsedData.articles);
        
    }

    nextPage = async () =>
      {
        debugger;
        this.setState({
            page: this.state.page + 1
        })

        console.log("next")
        console.log(this.state.page)
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=47e7924d20984e2fb50176cbe7cfa397&page="  + this.state.page;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
        console.log(parsedData.articles);
        
      }
      prevPage = async() =>
      {
        console.log("prev")
        this.setState({
            page: this.state.page--
        })

        console.log(this.state.page)
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=47e7924d20984e2fb50176cbe7cfa397&page="  + this.state.page;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
        console.log(parsedData.articles);
        
      }

  render() {

    console.log("render")
    return (
        <>
      <div className="container my-3"> 
      <h2>Mhz top headlines</h2>
      
      <div className="row" >
      {this.state.articles.map((element) => {
            return <div className="col-md-4" key = {element.url}>
            <NewsItem  title = {element.title}  description = {element.description} imgSrc = {element.urlToImage} url = {element.url}/>
        </div>
      })}
        
       
        {/* <div className="col-md-4">
            <NewsItem title = "Trump sees Tim Scott's entrance as great news… for Trump - POLITICO"  description = "The former president’s team views virtually every ‘24 development through the prism of whether it helps or hurts Ron DeSantis." imgSrc = "https://static.politico.com/d1/7f/5bf775a0405d839646ebdc409d32/election-2024-scott-05250.jpg" url = "https://www.politico.com/news/2023/05/22/trump-tim-scott-2024-00098292"/>
        </div>
        <div className="col-md-4">
            <NewsItem title = "Trump sees Tim Scott's entrance as great news… for Trump - POLITICO"  description = "The former president’s team views virtually every ‘24 development through the prism of whether it helps or hurts Ron DeSantis." imgSrc = "https://static.politico.com/d1/7f/5bf775a0405d839646ebdc409d32/election-2024-scott-05250.jpg" url = "https://www.politico.com/news/2023/05/22/trump-tim-scott-2024-00098292"/>
        </div> */}
      </div>
      

{/*       
      <NewsItem/>
      <NewsItem/>
      <NewsItem/> */}
<br/><br/>
<nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    
      <a className="page-link" href="#" tabindex="-1" onClick={this.prevPage}>Previous</a>
    
    <li className="page-item"><a className="page-link" href="#">1 </a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" onClick={this.nextPage}>Next</a>
    </li>
  </ul>
</nav>
      </div>

      </>
    )
  }
}

export default News