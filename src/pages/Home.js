import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      /*If any delegates win awards, put it here*/
      <div className="Home">
        <div className="bd-example" style={{position: "relative"}}>
          <div className="textOnSlide slide-in" style={{color: "white", position: "absolute", left: "0", padding: "30px", top: "40%", zIndex: "1"}}>  
            <h1 style={{fontSize: "70px", padding: "0"}}>Encinal High School Model United Nations</h1>
            <h1 style={{textAlign: "left", padding: "0"}}>Home of the Jets</h1>
          </div>
      
          <Carousel controls={false}>
            
            <Carousel.Item>
              <img src="bmun2020slide.jpg" alt="BMUN 2020 group pic" />
              <Carousel.Caption>
                <h3>BMUN 2020</h3>
                <p>UC Berkeley, CA</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img className="d-block w-100" src="bmun20201.jpg" alt="BMUN 2020 group pic 2" />
              <Carousel.Caption>
                <h3>BMUN 2020</h3>
                <p>UC Berkeley, CA</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img className="d-block w-100" src="bmal2019slide.jpg" alt="BMAL 2019 group pic" />
              <Carousel.Caption>
                <h3>BMAL 2019</h3>
                <p>UC Berkeley, CA</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img className="d-block w-100" src="bmalAwards.jpg" alt="BMAL 2019 awards group pic" />
              <Carousel.Caption>
                <h3>BMAL 2019</h3>
                <p>UC Berkeley, CA</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src="dw.jpg" alt="Delegate Workshop group pic" />
              <Carousel.Caption>
                <h3>Delegate Workshop 2019</h3>
                <p>UC Berkeley, CA</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src="bmun2019Placard.JPG" alt="BMUN 2019 placard" />
              <Carousel.Caption>
                <h3>BMUN 2019</h3>
                <p>UC Berkeley, CA</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src="bmun2019slide.JPG" alt="BMUN 2019 group pic" />
              <Carousel.Caption>
                <h3>BMUN 2019</h3>
                <p>UC Berkeley, CA</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src="sfo.JPG" alt="SFO Airport" />
              <Carousel.Caption>
                <h3>NHSMUN 2019</h3>
                <p>San Francisco International Airport, CA</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src="nhsmunPlacard.JPG" alt="Estonia placard" />
              <Carousel.Caption>
                <h3>NHSMUN 2019</h3>
                <p>United Nations Headquarters, NY</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src="nhsmunGroup.JPG" alt="NHSMUN 2019 group pic" />
              <Carousel.Caption>
                <h3>NHSMUN 2019</h3>
                <p>New York City, NY</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src="dmun1.jpg" alt="DMUN group pic 1" />
              <Carousel.Caption>
                <h3>DMUNC 2019</h3>
                <p>UC Davis, CA</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src="dmun2.jpg" alt="DMUN group pic 2" />
              <Carousel.Caption>
                <h3>NHSMUN 2019</h3>
                <p>San Francisco International Airport, CA</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
  
        <h2>UPCOMING EVENTS</h2>
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
              <tr>
                <td>None</td>
                <td>Please be sure to stay safe</td>
                <td>At Home</td> 
              </tr>
            </tbody>
          </table>
        </div>
        
        
        <div className="bmal">
          <h2>Great job to those who won awards at BMAL 2019!</h2>
          <h3>Award Winners:</h3>
          <div className="cardList">
            
            <Card>
              <h5>Commendations</h5>
              <ul>
                <li>Noah Meeks: Represented Sudan in the Special Council on Regional Conflict and Instability</li>
                <li>Sam Der: Represented Palestine in the Joint Defense Council</li>
                <li>Kevin Yue: Represented Palestine in the Council of Economic Affairs</li>
                <li>Yeva Hoffman: Represented Palestine in the Council of Social Affairs</li>
              </ul>
            </Card>
            
            <Card>
              <h5>Outstanding</h5>
              <ul>
                <li>Elijah Briggance: Represented Qatar in the Council of Economic Affairs</li>
                <li>Edward Onaga: Represented Qatar in the Council of Economic Affairs</li>
              </ul>
            </Card>
            
            <Card>
              <h5>Best Delegate</h5>
              <ul>
                <li>Kash Mejia: Represented Qatar in the Council of Social Affairs Ministers</li>
                <li>Natalia Benitez: Represented Qatar in the Council of Social Affairs Ministers</li>
              </ul>
            </Card>
          
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
}

export default Home;