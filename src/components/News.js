import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

export class News extends Component {
    // articles=[
    //     {
    //     "source": {
    //     "id": "abc-news",
    //     "name": "ABC News"
    //     },
    //     "author": "ADRIANA GOMEZ LICON Associated Press",
    //     "title": "Beyond 'childless cat ladies,' JD Vance has long been on a quest to encourage more births",
    //     "description": "JD Vance repeatedly expressed alarm about declining birth rates as he launched his political career with a bid for the U.S. Senate in Ohio",
    //     "url": "https://abcnews.go.com/Politics/wireStory/childless-cat-ladies-jd-vance-long-quest-encourage-112884792",
    //     "urlToImage": "https://i.abcnewsfe.com/a/bd869385-abb6-4dea-b94f-f6788df699a9/wirestory_555c0f78ef8dd4c13c88b9e8d5f0024a_16x9.jpg?w=1600",
    //     "publishedAt": "2024-08-16T04:46:42Z",
    //     "content": "MIAMI -- Five summers ago, Donald Trumps running mate JD Vance then a 34-year-old memoirist and father of a 2-year-old boy took the stage at a conservative conference and tackled an issue that would … [+9170 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "[Removed]"
    //     },
    //     "author": null,
    //     "title": "[Removed]",
    //     "description": "[Removed]",
    //     "url": "https://removed.com",
    //     "urlToImage": null,
    //     "publishedAt": "1970-01-01T00:00:00Z",
    //     "content": "[Removed]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "The Daily Dot"
    //     },
    //     "author": "Jack Alban",
    //     "title": "‘We’ll Venmo you the money’: Dealership reaches out to driver over unexpected battery issue with brand-new Tesla he just bought. It backfires",
    //     "description": "While you can't control what life throws your way, you can control how you react to it. And Alex (@evautoalex), a car dealer who specializes in used electric vehicle sales, is being praised for his reactions.\n\n\nIn a viral TikTok, he documents how he assisted …",
    //     "url": "https://www.dailydot.com/news/tesla-battery-salvage-title/",
    //     "urlToImage": "https://uploads.dailydot.com/2024/08/TESLA-Battery-Issue.jpg?auto=compress&fm=pjpg",
    //     "publishedAt": "2024-08-16T04:00:00Z",
    //     "content": "While you can’t control what life throws your way, you can control how you react to it. And Alex (@evautoalex), a car dealer who specializes in used electric vehicle sales, is being praised for his r… [+9250 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Tistory.com"
    //     },
    //     "author": "T.B",
    //     "title": "김건희 게이트(Rolex Gate) 80 (feat. 윤석열 탄핵)",
    //     "description": "Megyn Kelly: Trump’s \"rambling\" is boring and probably \"age-related\" https://t.co/g6doOzmAX9— The Hill (@thehill) August 15, 2024 A useful addition would be a marketplace for algorithms, so people can pick their preferred one among a bunch of options, or even…",
    //     "url": "https://ryueyes11.tistory.com/510905",
    //     "urlToImage": "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F85V9x%2FbtsI4cD7s4j%2F55pzIncEDobRhjcgqoyhUk%2Fimg.png",
    //     "publishedAt": "2024-08-16T03:59:14Z",
    //     "content": "Megyn Kelly: Trump’s \"rambling\" is boring and probably \"age-related\" https://t.co/g6doOzmAX9\r\n— The Hill (@thehill) August 15, 2024\r\nA useful addition would be a marketplace for algorithms, so people… [+7477 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "NDTV News"
    //     },
    //     "author": "NDTV Sports Desk",
    //     "title": "Amid Gender Row, Fresh Video Of Imane Khelif's Beauty Makeover Is Viral",
    //     "description": "Despite being labelled a 'biological male', Imane Khelif only broke her silence on the matter after winning the gold medal at the Paris Games.",
    //     "url": "https://sports.ndtv.com/boxing/amid-paris-olympics-gender-row-fresh-video-of-algerian-boxer-imane-khelifs-beauty-makeover-is-viral-6345568",
    //     "urlToImage": "https://c.ndtvimg.com/2024-08/9cocukbg_imane-khelif_625x300_15_August_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    //     "publishedAt": "2024-08-16T02:27:35Z",
    //     "content": "Despite being labelled a 'biological male', Algerian boxer Imane Khelif won the gold medal for his country at the just-concluded Paris Olympics. She saw questions being raised over her gender wheneve… [+2663 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "The Star Online"
    //     },
    //     "author": "Kelvin Chan",
    //     "title": "Don’t want chatbots using your conversations for AI training? Some let you opt out",
    //     "description": "Be careful what you tell a chatbot. Your conversation might be used to improve the artificial intelligence system that it's built on. Read full story",
    //     "url": "https://www.thestar.com.my/tech/tech-news/2024/08/16/dont-want-chatbots-using-your-conversations-for-ai-training-some-let-you-opt-out",
    //     "urlToImage": "https://apicms.thestar.com.my/uploads/images/2024/08/16/2861063.jpg",
    //     "publishedAt": "2024-08-16T02:00:00Z",
    //     "content": "LONDON: Be careful what you tell a chatbot. Your conversation might be used to improve the artificial intelligence system that it's built on.\r\nIf you ask ChatGPT for advice about your embarrassing me… [+5972 chars]"
    //     }
        
    //     ]

    static defaultProps={
      pageSize:5,
      category:'business',
      country:'in'
    }

    static propTypes={
      pageSize:PropTypes.number,
      category:PropTypes.string,
      country:PropTypes.string
    }
      
    constructor(props){
        // agar hamne fetch na kiya hota to isi ka use kr skte the articles=[..]
        super(props);
        // jab bhi constructor call kro super class ko call krna padta hai
        this.state={
            articles:[],
            loading:true,
            page:1,
        }
        
        document.title=`${this.props.category} - NewsMonkey`;
    }

    async updateNews(){
      const url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=4c5c936744ad4c1da2904406a0d4e426&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        // https://newsapi.org/v2/everything?q=Apple&from=2024-09-08&sortBy=popularity&apiKey=4c5c936744ad4c1da2904406a0d4e426
        // domains=wsj.com&
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
          loading:false,totalResults:0
        });
    }
    async componentDidMount(){
        // render ke baad ye cdm run hoga
        // let url=`https://newsapi.org/v2/top-headlines?domains=wsj.com&country=${this.props.country}&category=${this.props.category}&apiKey=4c5c936744ad4c1da2904406a0d4e426&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // console.log(parsedData);
        // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
        //   loading:false
        // });
        this.updateNews();
        
    }

    handleprevclick=async()=>{
      // console.log("prev");
      // let url=`https://newsapi.org/v2/top-headlines?domains=wsj.com&country=${this.props.country}&category=${this.props.category}&apiKey=4c5c936744ad4c1da2904406a0d4e426&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      //   let data=await fetch(url);
      //   let parsedData=await data.json();
      //   console.log(parsedData);
      // this.setState({
      //   page:this.state.page-1,
      //   articles:parsedData.articles,
      //   loading:false
      // });
      this.setState({page:this.state.page-1});
      this.updateNews();
    }

    handlenextclick=async()=>{
      // console.log("next");
      // if(this.state.page+1<=Math.ceil(this.state.totalResults/this.props.pageSize)){
      // let url=`https://newsapi.org/v2/top-headlines?domains=wsj.com&country=${this.props.country}&category=${this.props.category}&apiKey=4c5c936744ad4c1da2904406a0d4e426&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      //   let data=await fetch(url);
      //   let parsedData=await data.json();
      // this.setState({
      //   page:this.state.page+1,
      //   articles:parsedData.articles,
      //   loading:false,
      // });
      this.setState({page:this.state.page+1});
      this.updateNews();
    }

    fetchMoreData=async()=>{
      this.setState({page:this.state.page+1})
      const url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=4c5c936744ad4c1da2904406a0d4e426&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // domains=wsj.com&
        // https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c5c936744ad4c1da2904406a0d4e426&page=${this.state.page+1}&pageSize=${this.props.pageSize}
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        console.log('hello');
        this.setState({articles:parsedData.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,
          loading:false,totalResults:0
        });
    }
    
  render() {
    return (
      <div className="container my-3">    
            <h1 className="text-center " style={{margin:'35px 0px', marginTop:'90px'}}>NewsMonkey - Top Headlines on {this.props.category}</h1>
            {this.state.loading && <Spinner/>}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}
              >
                <div className="container">
                <div className='row'>
                  {this.state.articles.map((element) => {
                    return (
                      <div className="col-md-4" key={element.url}>
                        <Newsitem
                          title={element.title ? element.title.slice(0, 45) : ""}
                          description={element.description ? element.description.slice(0, 88) : ""}
                          imageurl={element.urlToImage}
                          newsurl={element.url}
                          author={element.author}
                          date={element.publishedAt}
                        />
                      </div>
                    );
                  })}
                </div>
                </div>
             </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn-btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
              <button disabled={this.state.page +1>
                Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn-btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
            </div> */}
      </div>
    )
  }
}

export default News

