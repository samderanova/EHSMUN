import React from 'react';
import './OandA.css';
import 'bootstrap/dist/css/bootstrap.css';

function OandA() {
  function Advisor(props) {
    return (
      <div className="card list">
        <img src={props.image} className="card-img-top" alt={"..."} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    );
  }
  function Officer(props) {
    return (
      <div className="card">
        <img src={props.image} className="card-img-top" alt={"..."} />
        <div className="card-body">
          <h5 className="card-title">{props.position}</h5>
          <h6 className="card-title">{props.name}</h6>
          <p className="card-text">Year: {props.year}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="App slide-in">
      <h5 style={{ textAlign: "center", padding: "50px 100px", lineHeight: "1.75em" }}>EHSMUN was founded in 2017 by former Secretary General and current Student Advisor Alvin Li with the help of world history teacher
        Andrew Lee and English teacher Laura Nielsen. With Alvin's leadership and Mrs. Nielsen's guidance, EHSMUN grew to encompass more
        members, host more fundraising events, and attend larger, farther conferences.
      </h5>
      <h2>Meet the Advisors</h2>
      <div className="advisors">
        <Advisor image="nielsen1.JPG" name="Laura Nielsen" description="Mrs. Nielsen has been with EHSMUN since its creation and has remained dedicated and loyal to helping the officers run it. She teaches AP and CP English at Encinal." />
        <Advisor image="ep1.jpg" name="Emily Pabarcus" description="Ms. P runs the MUN class at Encinal and was a big help in helping EHSMUN attend conferences. She teaches AP and CP United States History and English Language Development at Encinal." />
      </div>
      <h2>Officers</h2>
      <div className="officers">
        <Officer image="sd.jpg" position="Secretary General" name="Sam Der" year="Senior" />
        <Officer image="dp1.jpg" position="Under Secretary General" name="Danielle Payopay" year="Senior" />
        <Officer image="al.JPG" position="Student Advisor" name="Alvin Li" year="Senior" />
        <Officer image="et.JPG" position="Secretary" name="Eric Tuason" year="Senior" />
        <Officer image="" position="Treasurer" name="Analin Geritz" year="Senior" />
        <Officer image="bw.jpg" position="Deputy Treasurer" name="Benjamin Wu" year="Junior" />
        <Officer image="" position="Fundraising Officer" name="Sofía Espinioza" year="Senior" />
        <Officer image="kn.JPG" position="Outreach" name="Kayla Ngai" year="Senior" />
      </div>
    </div>
  );
}

export default OandA;