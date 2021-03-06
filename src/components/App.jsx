class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currVid: exampleVideoData[0],
      vidList: exampleVideoData

      // currVid: null,
      // vidList: [],
    };

  }
  componentDidMount() {
    this.getYouTubeVideos('dogs');
  }

  getYouTubeVideos(query){
    var options ={
      key: this.props.API_KEY,
      query: query
    };
    this.props.searchYouTube(options, (videos) => 
      this.setState({
        currVid: videos[0],
        vidList: videos
      })
    );
  }


  onTitleClick(clickedVid){
    this.setState({
      currVid: clickedVid
    })
  }

  render(){
    return (
      <div>
        <Nav onSearchChange={this.getYouTubeVideos.bind(this)}/>
        <div className="col-md-7">
        <VideoPlayer video={this.state.currVid}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.vidList} onTitleClick={this.onTitleClick.bind(this)}/>
        </div>
      </div>
    )
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;