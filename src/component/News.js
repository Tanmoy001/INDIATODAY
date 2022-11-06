import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class news extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    author: "Anonamous",
    totalResults:0
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    author: PropTypes.string,
    totalResults:PropTypes.number
  };

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor");
    this.state = { articles: [],
       loading: false,
        page:1 }
    document.title=`${this.capitalFirstLatter(this.props.category)}-foplicy`;
  }
  //async update() {
  //  console.log("CDM");
  //  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa963863932043779dfe09c388777f25&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //  this.setState({ loading: true });
  //  let data = await fetch(url);
  //  let parsedData = await data.json();
  //  console.log(parsedData);
  //  this.setState({
  //    articles: parsedData.articles,
  //    totalResults: parsedData.totalResults,
  //    loading: false,
  //  });
  //}

  async componentDidMount() {
    console.log("CDM");
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(80);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
 /* handlePreviousClick = async () => {
    console.log("CDM");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa963863932043779dfe09c388777f25&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  handleNextClick = async () => {if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize))){
    console.log("CDM");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa963863932043779dfe09c388777f25&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    }}
  */
  capitalFirstLatter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  fetchMoreData = async() => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      page:this.state.page+1
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center" style={{margin:'30px 0px',marginTop:'90px'}}>foreign policy-{this.capitalFirstLatter(this.props.category)}-Analysis</h2>
        {this.state.loading && <Spiner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spiner />}
        >
          <div className="container">
        <div className="row =">
          {this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.publishedAt}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    url={element.url}
                    date={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              
            })}
        </div>
        </div>
        </InfiniteScroll>
          
        {/*<div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            next&rarr;
          </button>
          </div>*/}
         
          
      </>
    );
  }
}
