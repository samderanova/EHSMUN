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

  function AwardCard(props) {
    return (
      <div className="card" style={{width: '25rem'}}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <ul className="card-text">
            {props.people}
          </ul>
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
            <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={"IMG_56631.jpg"} className="d-block" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>BMAL 2019</h5>
                <p>UC Berkeley, CA</p>
              </div>
            </div>
            <Slide image="imagejpeg_0.jpg" heading="BMAL 2019" caption="UC Berkeley, CA" />
            <Slide image="IMG_0250.jpg" heading="Delegate Workshop 2019" caption="UC Berkeley, CA"/>
            <Slide image="IMG_6820.JPG" heading="BMUN 2019" caption="UC Berkeley, CA" />
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
      <h3>Meetings are usually every Wednesday JETS in Kerber's and Stahl's, but join
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
            <tr id="row3">
              <td>Berkeley Model United Nations</td>
              <td>3/6/2020 - 3/8/2020</td>
              <td>UC Berkeley, Berkeley, CA</td> 
            </tr>
            <tr>
              <td>EHSMUN Outreach Mock Session</td>
              <td>3/21/2020 from 9 AM to 12 PM</td>
              <td>Encinal High School Room 401</td> 
            </tr>
            <tr>
              <td>Davis Model United Nations</td>
              <td>5/16/2020 - 5/17/2020</td>
              <td>UC Davis, Davis, CA</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="schedule" id="locations">
        <h2>The BMUN Schedule and Committee Locations have been released!</h2>
        <h3>Committee Locations</h3>
        <h4 style={{textAlign: "center"}}>Please note that some committee locations do change throughout the weekend!</h4>
        <table>
          <thead>
            <tr>
              <td>Committee</td>
              <td>Friday</td>
              <td>Saturday</td>
              <td>Sunday</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SPECPOL</td>
              <td>Chevron Auditorium (International House)</td>
              <td>Chevron Auditorium (International House)</td>
              <td>Chevron Auditorium (International House)</td>
            </tr>
            <tr>
              <td>ECOFIN</td>
              <td>Anna Head Alumnae Hall</td>
              <td>Anna Head Alumnae Hall</td>
              <td>Anna Head Alumnae Hall</td>
            </tr>
            <tr>
              <td>SOCHUM</td>
              <td>Pauley Ballroom West</td>
              <td>Wheeler Auditorium</td>
              <td>Pauley Ballroom West</td>
            </tr>
            <tr>
              <td>UNHCR</td>
              <td>Pauley Ballroom East</td>
              <td>Valley Life Sciences 2040</td>
              <td>Pauley Ballroom East</td>
            </tr>
            <tr>
              <td>WHO</td>
              <td>Dwinelle 155</td>
              <td>Alumni House</td>
              <td>Dwinelle 155</td>
            </tr>
            <tr>
              <td>UNEP</td>
              <td>Valley Life Sciences 2060</td>
              <td>Valley Life Sciences 2060</td>
              <td>Valley Life Sciences 2060</td>
            </tr>
            <tr>
              <td>UNHRC</td>
              <td>Ida Sproul Room (International House)</td>
              <td>Ida Sproul Room (International House)</td>
              <td>Ida Sproul Room (International House)</td>
            </tr>
            <tr>
              <td>NGO Forum</td>
              <td>Wheeler 20</td>
              <td>Wheeler 20</td>
              <td>Wheeler 202</td>
            </tr>
            <tr>
              <td>Organization of American States</td>
              <td>Wheeler 126</td>
              <td>Wheeler 126</td>
              <td>Wheeler 126</td>
            </tr>
            <tr>
              <td>Senate</td>
              <td>Wheeler 222</td>
              <td>Wheeler 222</td>
              <td>Wheeler 222</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="schedule">
        <h3>Friday, March 6, 2020</h3>
        <table>
          <thead>
            <tr>
              <td>Event</td>
              <td>Location</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Meeting After School</td>
              <td>Room 401</td>
              <td>2:00 PM</td>
            </tr>
            <tr>
              <td>BMUN Registration</td>
              <td>Kerr Lobby</td>
              <td>Whenever we get there!</td>
            </tr>
            <tr>
              <td>Eat Dinner (If There Is Time)</td>
              <td>Anywhere!</td>
              <td>Up to 4:30 PM</td>
            </tr>
            <tr>
              <td>Opening Ceremonies</td>
              <td>Pauley Ballroom</td>
              <td>4:05 PM to 6:00 PM</td>
            </tr>
            <tr>
              <td>More Dinner Time (If Needed)</td>
              <td>Somewhere!</td>
              <td>6:00 PM to 6:45 PM</td>
            </tr>
            <tr>
              <td>Committee Meetup</td>
              <td>Lower Sproul Plaza</td>
              <td>6:45 PM to 7:00 PM</td>
            </tr>
            <tr>
              <td>Committee Session 1</td>
              <td>See <a href="#locations">Committee Locations</a></td>
              <td>7:00 PM to 9:45 PM</td>
            </tr>
          </tbody>
        </table>
        <h3>Saturday, March 7, 2020</h3>
        <table>
          <thead>
            <tr>
              <td>Event</td>
              <td>Location</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Morning Meetup</td>
              <td>12th Street BART Entrance (Corner of Broadway and 13th)</td>
              <td>Be there by 8:05 AM at the latest!</td>
            </tr>
            <tr>
              <td>Committee Meetup</td>
              <td>Lower Sproul Plaza</td>
              <td>8:45 AM to 9:00 AM</td>
            </tr>
            <tr>
              <td>Committee Session 2</td>
              <td>See <a href="#locations">Committee Locations</a></td>
              <td>9:00 AM to 12:00 PM</td>
            </tr>
            <tr>
              <td>Advisor Meeting</td>
              <td>Tilden Room</td>
              <td>10:00 AM to 11:00 AM</td>
            </tr>
            <tr>
              <td>Advisor Workshop with Best Delegate</td>
              <td>Tilden Room</td>
              <td>11:00 AM to 12:00 PM</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>Some place that's not outside Berkeley!</td>
              <td>12:00 PM to 1:30 PM</td>
            </tr>
            <tr>
              <td>Committee Session 3</td>
              <td>See <a href="#locations">Committee Locations</a></td>
              <td>1:30 PM to 4:45 PM</td>
            </tr>
            <tr>
              <td>Head Delegate Meeting</td>
              <td>Wheeler 222</td>
              <td>5:00 PM to 6:00 PM</td>
            </tr>
          </tbody>
        </table>
        <h3>Sunday, March 8, 2020</h3>
        <table>
          <thead>
            <tr>
              <td>Event</td>
              <td>Location</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Morning Meetup</td>
              <td>12th Street BART Entrance (Corner of Broadway and 13th)</td>
              <td>Be there by 8:05 AM at the latest!</td>
            </tr>
            <tr>
              <td>Committee Meetup</td>
              <td>Lower Sproul Plaza</td>
              <td>8:45 AM to 9:00 AM</td>
            </tr>
            <tr>
              <td>Committee Session 4</td>
              <td>See <a href="#locations">Committee Locations</a></td>
              <td>9:00 AM to 12:00 PM</td>
            </tr>
            <tr>
              <td>Closing Ceremonies</td>
              <td>RSF Fieldhouse</td>
              <td>1:00 PM to 3:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bmal">
        <h2>Great job to those who won awards at BMAL!</h2>
        <h3>Award Winners:</h3>
        <div className="cardList">
          <AwardCard title="Commendations" people={
            <div>
              <li>Noah Meeks: Represented Sudan in the Special Council on Regional Conflict and Instability</li>
              <li>Sam Der: Represented Palestine in the Joint Defense Council</li>
              <li>Kevin Yue: Represented Palestine in the Council of Economic Affairs</li>
              <li>Yeva Hoffman: Represented Palestine in the Council of Social Affairs</li>
            </div>
          }>
          </AwardCard>
          <AwardCard title="Outstanding" people={
            <div>
              <li>Elijah Briggance: Represented Qatar in the Council of Economic Affairs</li>
              <li>Edward Onaga: Represented Qatar in the Council of Economic Affairs</li>
            </div>
          }>
          </AwardCard>
          <AwardCard title="Best Delegate" people={
            <div>
              <li>Kash Mejia: Represented Qatar in the Council of Social Affairs Ministers</li>
              <li>Natalia Benitez: Represented Qatar in the Council of Social Affairs Ministers</li>
            </div>
          }>
          </AwardCard>
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