import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav'
import AudioSingles from './AudioSingles'
import VideoSingles from './VideoSingles'
import AudioMix from './AudioMix'
import VideoMix from './VideoMix'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Nav} />
          <Route path="/audio-singles" component={AudioSingles} />
          <Route path="/video-singles" component={VideoSingles} />
          <Route path="/audio-mix" component={AudioMix} />
          <Route path="/video-mix" component={VideoMix} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
