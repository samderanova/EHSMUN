import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  function checkDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    console.log(month + "/" + day + "/" + year);
    if ((month === 12 && day > 1 && year === 2019) || (year === 2020)) {
      document.getElementById("row2").innerHTML = "";
    }
    if ((month >= 3 & year >= 2020) && (month >= 3 & day > 8 & year >= 2020)) {
      document.getElementById("row3").innerHTML = "";
    }
  }

  return (
    /*If any delegates win awards, put it here*/
    <div className="App" onLoad={checkDate}>
      <div className="bd-example" style={{position: "relative"}}>
        <div className="textOnSlide slide-in" style={{color: "white", fontFamily: "'GlacialIndifferenceRegular', sans-serif", position: "absolute", left: "0", padding: "30px", top: "40%", zIndex: "1"}}>  
          <h1 style={{fontSize: "70px", padding: "0"}}>Encinal High School Model United Nations</h1>
          <h1 style={{textAlign: "left", padding: "0"}}>Home of the Jets</h1>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={"IMG_6820.JPG"} className="d-block" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>BMUN 2019</h5>
                <p>UC Berkeley, CA</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={"IMG_6801.JPG"} className="d-block" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>BMUN 2019</h5>
                <p>UC Berkeley, CA</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={"IMG_7042.JPG"} className="d-block" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>NHSMUN 2019</h5>
                <p>San Francisco International Airport, CA</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={"IMG_8151.JPG"} className="d-block" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>NHSMUN 2019</h5>
                <p>United Nations Headquarters, NY</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={"IMG_7734.JPG"} className="d-block" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>NHSMUN 2019</h5>
                <p>New York City, NY</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={"dmun1.jpg"} className="d-block" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>DMUNC 2019</h5>
                <p>UC Davis, CA</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={"dmun2.jpg"} className="d-block" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>DMUNC 2019</h5>
                <p>UC Davis, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ textAlign: "center", paddingTop: "30px" }}>UPCOMING EVENTS</h2>

      <div className="schedule">
        <table>
          <thead>
            <tr>
              <td>Event</td>
              <td>Date</td>
              <td>Location</td>
            </tr>
          </thead>
          <tbody>
            <tr id="row1">
              <td>BMUN Delegate Workshop</td>
              <td>TBA</td>
              <td>UC Berkeley, Berkeley, CA</td>
            </tr>
            <tr id="row2">
              <td>Berkeley Model Arab League</td>
              <td>11/30/2019 - 12/1/2019</td>
              <td>UC Berkeley, Berkeley, CA</td>
            </tr>
            <tr id="row3">
              <td>Berkeley Model United Nations</td>
              <td>3/6/2020 - 3/8/2020</td>
              <td>UC Berkeley, Berkeley, CA</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <div className="fundraising">
          <h2>FUNDRAISING</h2>
          <p>Our club relies heavily on funds in order to go to these conferences and rent hotels or AirBNBs to reside in overnight.
            Without enough funds, we won't be able to attend. We host bake sales as often as we can, selling homemade baked goods
            and having restaurant fundraisers, but even then, the money raised is not enough. That's why we need YOUR help.
          </p>
          <p>Please consider donating to our GoFundMe and helping us on our journey to become your future leaders.
            We guarantee that your funds will not go to waste. If that does not work for you, be sure to check out our bake
            sales at the Starbucks on the corner of Park Street and Central Avenue.
          </p>
          <a href="https://www.gofundme.com/encinal-high-school-model-united-nations-club" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">Donate Now</button></a>
        </div>

        <div className="outreach">
          <h2>OUTREACH</h2>
          <p>Thinking about joining Model UN soon? Send an email to ehsjetsmodelun@gmail.com and we will send a few of our members
            over to tell you more!
          </p>
          <p>We are actively trying to recruit so EHSMUN can keep continuing after we graduate. If you know any high school student
            at Encinal who is interested in debating, speaking, or learning about the world, then please send an email to the one
            above. We can also come to middle schools and host an information session about MUN! We look forward to meeting you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;