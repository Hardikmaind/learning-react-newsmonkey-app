import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from './Spinner';

export default class News extends Component {
  constructor() {
    // must call  super constructor in derived class before accessing 'this' or returnning from derived constructor
    super();
    // you will see 3 times message displayed in the console since we have 3 newsitem in the news component
    console.log("hello i am constructor");
    this.state = {
      // since data fetch from the api, i have added the empty array inside of the articles
      articles: [],
      // so i want this to be run when loading is true
      loading: false,
      page: 1,
    };
  }

  // this will run after the render runs. the order is first constructor will run then render will run then componentdidmount() will mount will run
  async componentDidMount() {
    // this is for page 1. thats why added &page=1 in the last of the url.
    // added &pageSize=12, so that only 1- articles should be visible on single page.this technique i have learnt from the newsapi.org website

    // dont use such api(free) which fetches more than 100 results because  then the limit expires and it asks for the premiu, subscription. there fetch such api which have less then 100 resulta then this will work. or you will get WHITE page as error.
    let Url =
      `https://newsapi.org/v2/everything?q=ipl&from=2023-03-04&to=2023-03-04&sortBy=popularity&apiKey=878a81f04b8f4768bed4a0aa659eb565&pageSize=${this.props.pageSize}&page=1`;

        // this below means that before loading the articles, the gif will run(true), and after loading the articles , the gif will not run(false)
      this.setState({loading:true})

    // await funtions are only allowed inside the async function
    let data = await fetch(Url);
    let parsedData = await data.json();
    // 'this' tells us the object in the class
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      //added this so that initally it should start loading when our applicaiton is starting
      loading:false
    });

    // this i have wriiten to show the order
    // console.log('cdm')
  }

  handlePrevClick = async () => {
    console.log("previoous");

    let Url = `https://newsapi.org/v2/everything?q=ipl&from=2023-03-04&to=2023-03-04&sortBy=popularity&apiKey=878a81f04b8f4768bed4a0aa659eb565&page=${this.state.page - 1
      }&pageSize=${this.props.pageSize}`;

      this.setState({loading:true})

    // await funtions are only allowed inside the async function
    let data = await fetch(Url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  // written async becuase we have used the await inside
  handleNextClick = async () => {
    console.log("next   ");

    // added ! this operator in the if and removes if
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

    
      let Url = `https://newsapi.org/v2/everything?q=ipl&from=2023-03-04&to=2023-03-04&sortBy=popularity&apiKey=878a81f04b8f4768bed4a0aa659eb565&page=${this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
        
        // when data is not there loading is true , that means it should be loading
        this.setState({loading:true})
        
        // await funtions are only allowed inside the async function
        let data = await fetch(Url);
        let parsedData = await data.json();
        // when the data is come/fetch loading disables
        // this.setState({loading:false}) , this can be clubbed into below this.setState
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
    }
  };

  render() {
    // this i hvae written to show the order
    // console.log('render')
    return (
      <div className="container my-3">
        {/* text center class is used to center the text in container */}
        <h2 className="text-center">newsmonkey top headlines</h2>
        
        {/* so below logic states that ,when the "this.state.loading" which basically is loading  is true and <spinner/> is true . then only the spinner will load */}
        {this.state.loading && <Spinner/>}
        <div className="row">
          {/* here map is used to map the data to the above given article, its like loop */}
          {/* here '!this.state.loading' means if  '!this.state.loading' is false then loading will show else not */}
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 row-md-3" key={element.url}>
                {/*  key should be inside return  and in div not in newsitmen . key identifies uniquly everynews*/}
                {/* here you can see that i have passed the props in the Newsitem, u can see title ,discription,imageUrl */}
                <Newsitem
                  // here slice will limit the title and discription to 45 and 88 chars resp.
                  title={element.title ? element.title.slice(0, 45) : " "}
                  discription={
                    element.description ? element.description.slice(0, 88) : " "
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          {/* here col md is a class in bootsrap which says  in medium devices, 4 columns le lgi. bootstrap has 12 column grib in it. so in this way we get 4*3=12. so the each card will take place of 4 column. and in this way they will be centered */}

          {/* now here below no matter how much div/news item we add here like below...they will be aligned beacuse of the col-md-4 and the row class in the parent container.see below */}
        </div>
        <div className="container d-flex justify-content-between">
          {/* we have to use this.  in the onlick while naming the function because this is inside the class thats why */}
          {/* this diable is written because if the page no is less than 1 then button will be disabled. if just wrote disabled then that means disable will be true and then the button will be disabled */}
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; previous
          </button>
          <button
            type="button" 
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
