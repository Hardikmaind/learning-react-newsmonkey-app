import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  //this is a property thats why didnt use the let var etc
  // if the property name was just 'articles' then in this.state, you would write articles:this.articles to avod confusion i changes the name of the variable
  news_articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "'Even without trying, England produce compelling Test'",
      description:
        "Having to chase 258 to win would not have been in England's plan after they asked New Zealand to follow on, but it sticks to their desire for compelling Test cricket, writes Stephan Shemilt.",
      url: "http://www.bbc.co.uk/sport/cricket/64782397",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E3CC/production/_128761385_brook.jpg",
      publishedAt: "2023-02-27T11:37:25.128273Z",
      content:
        "England's desire to think outside the box resulted in Harry Brook taking his first Test wicket and New Zealand losing their last five wickets for 28 runs\r\nEven without trying, England have produced a… [+4965 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  constructor() {
    // must call  super constructor in derived class before accessing 'this' or returnning from derived constructor
    super();
    // you will see 3 times message displayed in the console since we have 3 newsitem in the news component
    console.log("hello i am constructor");
    this.state = {
      // this.news_articles property will get transferred into articles
      articles: this.news_articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>newsmonkey top headlines</h2>
        <div className="row">
        {/* here map is used to map the data to the above given article, its like loop */}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
              {/*  key should be inside return  and in div not in newsitmen . key identifies uniquly everynews*/}
                {/* here you can see that i have passed the props in the Newsitem, u can see title ,discription,imageUrl */}
                <Newsitem
                // here slice will limit the title and discription to 45 and 88 chars resp.
                  title={element.title.slice(0,45)}
                  discription={element.description.slice(0,88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          {/* here col md is a class in bootsrap which says  in medium devices, 4 columns le lgi. bootstrap has 12 column grib in it. so in this way we get 4*3=12. so the each card will take place of 4 column. and in this way they will be centered */}

          {/* now here below no matter how much div/news item we add here like below...they will be aligned beacuse of the col-md-4 and the row class in the parent container.see below */}
        </div>
      </div>
    );
  }
}
