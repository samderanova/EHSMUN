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
    if ((month === 11 && day > 24 && year === 2019) || (year === 2020)) {
      document.getElementById("row2").innerHTML = "";
    }
    if ((month >= 3 & year >= 2020) && (month >= 3 & day > 8 & year >= 2020)) {
      document.getElementById("row3").innerHTML = "";
    }
  }

  function Slide(props) { 
    return (
      <div className="carousel-item">
        <img src={props.image} className="d-block" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>{props.heading}</h5>
          <p>{props.caption}</p>
        </div>
      </div>
    );
  }

  return (
    /*If any delegates win awards, put it here*/
    <div className="App" onLoad={checkDate}>
      <div className="bd-example" style={{position: "relative"}}>
        <div className="textOnSlide slide-in" style={{color: "white", position: "absolute", left: "0", padding: "30px", top: "40%", zIndex: "1"}}>  
          <h1 style={{fontSize: "70px", padding: "0"}}>Encinal High School Model United Nations</h1>
          <h1 style={{textAlign: "left", padding: "0"}}>Home of the Jets</h1>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
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
            <Slide image="IMG_6801.JPG" heading="BMUN 2019" caption="UC Berkeley, CA" />
            <Slide image="IMG_7042.JPG" heading="NHSMUN 2019" caption="San Francisco International Airport, CA" />
            <Slide image="IMG_8151.JPG" heading="NHSMUN 2019" caption="United Nations Headquarters, NY" />
            <Slide image="IMG_7734.JPG" heading="NHSMUN 2019" caption="New York City, NY" />
            <Slide image="dmun1.jpg" heading="DMUNC 2019" caption="UC Davis, CA" />
            <Slide image="dmun2.jpg" heading="DMUNC 2019" caption="UC Davis, CA" />
          </div>
        </div>
      </div>

      <h2 style={{ textAlign: "center", paddingTop: "30px" }}>UPCOMING EVENTS</h2>
      <h3>Meetings are usually every Wednesday JETS in the College and Career Center, but join
        our Remind just in case we relocate! Text the code "@encinalmo" to 81010 or use the Remind app.</h3>
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
            <tr>
              <td>BMUN Delegate Workshop</td>
              <td>11/16/2019</td>
              <td>UC Berkeley, Berkeley, CA</td>
            </tr>
            <tr id="row2">
              <td>Berkeley Model Arab League</td>
              <td>11/23/2019 - 11/24/2019</td>
              <td>UC Berkeley, Berkeley, CA</td>
            </tr>
            <tr id="row3">
              <td>Berkeley Model United Nations</td>
              <td>3/6/2020 - 3/8/2020</td>
              <td>UC Berkeley, Berkeley, CA</td> 
            </tr>
            {/*<tr>
              <td>Southern California Model United Nations</td>
              <td>3/28/2020 - 3/29/2020</td>
              <td>University of Southern California, Los Angeles, CA</td>
              <td><a href="https://www.scmun.org/" target="_blank" rel="noopener noreferrer">SCMUN 2020</a></td>
            </tr>*/}
            <tr>
              <td>Davis Model United Nations</td>
              <td>5/16/2020 - 5/17/2020</td>
              <td>UC Davis, Davis, CA</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="delegateWorkshop">
        <h2>The Delegate Workshop is approaching fast!</h2>
        <h3>Be sure to fill out the waivers if you haven't already!</h3>
        <h3>SCHEDULE</h3>
        <div className="dwtable">
          <table>
            <thead>
              <tr>
                <td>Time</td>
                <td>Event</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:00 AM</td>
                <td>Meet at the 12th St. BART Station (Corner of Broadway and 13th)</td>
              </tr>
              <tr>
                <td>9:15 AM - 9:30 AM</td>
                <td>Committee Meetup</td>
              </tr>
              <tr>
                <td>9:40 AM - 12:00 PM</td>
                <td>Committee Session 1 (MUN Procedure)</td>
              </tr>
              <tr>
                <td>12:00 PM - 1:00 PM</td>
                <td>Lunch</td>
              </tr>
              <tr>
                <td>1:00 PM - 4:00 PM</td>
                <td>Committee Session 2 (Simulation)</td>
              </tr>
              <tr>
                <td>2:00 PM - 3:00 PM</td>
                <td>Advisor Meeting</td>
              </tr>
              <tr>
                <td>4:00 PM - 4:30 PM</td>
                <td>Closing Ceremonies</td>
              </tr>
            </tbody>
          </table>
        </div>
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