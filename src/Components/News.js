import React from "react";
import { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// imported the infinite scroll or it will show the error 
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true )
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(
  //   props.category
  // )}-NewsMonkey React App`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const updateNews=async ()=> {
    // this will set the intial progress to zero. the progress always goes from 0 to 100
    
    props.setProgress(10);
    
    let Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.APIKEY}&page=${page}&pageSize=${props.pageSize}`;
    

    setLoading(true)
    
    // we can also used the loading bar into the steps like for example if it runs from o to 30 to 60 to 100
    // for example here i want to set the progress of my loading bar to 30 when th data is fetched
    let data = await fetch(Url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    console.log(parsedData);
    // here after th update funtion loads the setProgress will load tp till 100
    props.setProgress(100);
  }


  // here below boxed bracket means that whatever input i wanna listen would go there, that means jiske change parye effect run ho woh chij hoti hain ye
  useEffect(() => {
    updateNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  



  // we cannot write async infronna fetchMoreDate becau se  " it The 'async' modifier can only be used in TypeScript files.ts(8009)" so we have to write it outside the '()'
  const fetchMoreData = async() => {
    setPage(page+1)
    let Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.APIKEY}&page=${page}&pageSize=${props.pageSize}`;

    // i want loading to be true when the the component loads at first, but when i fetch more i dont want loading here so i will remove below line. and i will show loading when i scroll down with the help of <infinteSroll> </infinteSroll> component
    // this.setState({ loading: true });

    let data = await fetch(Url);
    let parsedData = await data.json();

    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

  };

  
    // this i hvae written to show the order
    // console.log('render')
    return (
      <>
        {/* text center class is used to center the text in container */}
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          Newsmonkey-Top {capitalizeFirstLetter(props.category)}{" "}
          headlines
        </h2>

        {/* so below logic states that ,when the "this.state.loading" which basically is loading  is true and <spinner/> is true . then only the spinner will load */}

        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          // if i didnt write the fetch more funtions then only the spimmer will appear and the news article might not load. so we have to write the define the fetch more funtion
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {/* here map is used to map the data to the above given article, its like loop */}
            {/* here '!this.state.loading' means if  '!this.state.loading' is false then loading will show else not */}
            {articles.map((element) => {
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

export default News

News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};