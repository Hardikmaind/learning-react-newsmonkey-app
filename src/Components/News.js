import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// imported the infinite scroll or it will show the error 
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  // this below i have created the custom variable APIKEY in the intial state of the webiste in the constructor. it will save me the time to apply new keys in the url in the componentdidmount ,handlePrevClick,handleNextClick. by just writing the apikey=${APIKEY}. and APIKEY i have written here below
  APIKEY = "3d5dd63f2c134445a6d18d0607da4543";

  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    // must call  super constructor in derived class before accessing 'this' or returnning from derived constructor
    super(props);
    // you will see 3 times message displayed in the console since we have 3 newsitem in the news component
    console.log("hello i am constructor");
    this.state = {
      // since data fetch from the api, i have added the empty array inside of the articles
      articles: [],
      // so i want this to be run when loading is true
      loading: false,
      page: 1,
      // this here i set the by default balue of total result as zero
      totalResults:0
    };

    // if we have use the prop in the constructor then  we have to pass the prop in constructor and super constructor like this , see below
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-NewsMonkey React App`;
  }

  async updateNews() {
    // this will set the intial progress to zero. the progress always goes from 0 to 100
    
    this.props.setProgress(10);
    
    let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.APIKEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true });
    
    // we can also used the loading bar into the steps like for example if it runs from o to 30 to 60 to 100
    // for example here i want to set the progress of my loading bar to 30 when th data is fetched
    let data = await fetch(Url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);

    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      
      loading: false,
    });
    // here after th update funtion loads the setProgress will load tp till 100
    this.props.setProgress(100);
  }

  // this will run after the render runs. the order is first constructor will run then render will run then componentdidmount() will mount will run
  async componentDidMount() {
    // this is for page 1. thats why added &page=1 in the last of the url.
    // added &pageSize=12, so that only 1- articles should be visible on single page.this technique i have learnt from the newsapi.org website

    // dont use such api(free) which fetches more than 100 results because  then the limit expires and it asks for the premiu, subscription. there fetch such api which have less then 100 resulta then this will work. or you will get WHITE page as error.


    this.updateNews();
  }

  handlePrevClick = async () => {
    // console.log("previoous");



    // Await use nhi Kiya to.....vo page update hue Bina....next line of code run hota hai....await use karenge to vo func poora run hone ke baad hi ahe ka code run hoga
    await this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  // written async becuase we have used the await inside
  handleNextClick = async () => {
    // console.log("next   ");

    // Await use nhi Kiya to.....vo page update hue Bina....next line of code run hota hai....await use karenge to vo func poora run hone ke baad hi ahe ka code run hoga
    await this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  // we cannot write async infronna fetchMoreDate becau se  " it The 'async' modifier can only be used in TypeScript files.ts(8009)" so we have to write it outside the '()'
  fetchMoreData = async() => {
 
    this.setState({page:this.state.page + 1})
    let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.APIKEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    // i want loading to be true when the the component loads at first, but when i fetch more i dont want loading here so i will remove below line. and i will show loading when i scroll down with the help of <infinteSroll> </infinteSroll> component
    // this.setState({ loading: true });

    let data = await fetch(Url);
    let parsedData = await data.json();

    console.log(parsedData);
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,

      loading: false,
    });
  };

  render() {
    // this i hvae written to show the order
    // console.log('render')
    return (
      <>
        {/* text center class is used to center the text in container */}
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          Newsmonkey-Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          headlines
        </h2>

        {/* so below logic states that ,when the "this.state.loading" which basically is loading  is true and <spinner/> is true . then only the spinner will load */}

        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          // if i didnt write the fetch more funtions then only the spimmer will appear and the news article might not load. so we have to write the define the fetch more funtion
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {/* here map is used to map the data to the above given article, its like loop */}
            {/* here '!this.state.loading' means if  '!this.state.loading' is false then loading will show else not */}
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 row-md-3" key={element.url}>
                  {/*  key should be inside return  and in div not in newsitmen . key identifies uniquly everynews*/}
                  {/* here you can see that i have passed the props in the Newsitem, u can see title ,discription,imageUrl */}
                  <Newsitem
                    // here slice will limit the title and discription to 45 and 88 chars resp.
                    title={element.title ? element.title.slice(0, 45) : " "}
                    discription={
                      element.description
                        ? element.description.slice(0, 88)
                        : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            {/* here col md is a class in bootsrap which says  in medium devices, 4 columns le lgi. bootstrap has 12 column grib in it. so in this way we get 4*3=12. so the each card will take place of 4 column. and in this way they will be centered */}

            {/* now here below no matter how much div/news item we add here like below...they will be aligned beacuse of the col-md-4 and the row class in the parent container.see below */}
          </div>
          </div>
        </InfiniteScroll>
        
      </>
    );
  }
}
