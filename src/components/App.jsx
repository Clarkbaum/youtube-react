class App extends React.Component{
  constructor(props){
    super(props);
    console.log("exampleVideoData", exampleVideoData)

    //we need a state to mange which video we want
  }

  //dont move!!
  onTitleClick(event){
    //play clicked song
    console.log("on title click ", this)
  }

  render(){
    return (
      <div>
        <Nav />
        <div className="col-md-7">
        <VideoPlayer video={exampleVideoData[1]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData}/>
        </div>
      </div>
    )
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//   <VideoPlayer video={exampleVideoData[0]}/>
          // {exampleVideoData.map(item=>
          //   <VideoPlayer video={exampleVideoData[item]}/>
          // )}
