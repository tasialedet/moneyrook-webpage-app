import "./App.css";
import logoGif from "./moneyrooklogo.gif";
import imageOne from "./IMG_3715.jpeg";
import imageTwo from "./IMG_3718.jpeg";
import imageThree from "./IMG_3725.jpeg";
import imageFour from "./IMG_4062.jpeg";
import Video from "./Video.js";
import Music from "./Music.js";

function App() {
  return (
    <div className="App">
      <h1 className="MoneyrookLogoHeader">
        <img src={logoGif} alt="" length={190} width={190}></img>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-6" id="BioSection">
            <h2>About the artist</h2>
            Biography section -Hometown -Age -Written in first-person or
            third-person? -Facts/hobbies? -Projects, upcoming projects? Release
            dates? -Possible merch?
          </div>

          <div className="col-6">
            <div id="Images">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <img src={imageOne} alt="" length={120} width={150}></img>
                  </div>
                  <div className="col-3">
                    <img src={imageTwo} alt="" length={120} width={150}></img>
                  </div>
                  <div className="col-3">
                    <img src={imageThree} alt="" length={120} width={150}></img>
                  </div>
                  <div className="col-3">
                    <img src={imageFour} alt="" length={120} width={150}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Video />
          </div>
          <div className="col-6">
            <Music />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
