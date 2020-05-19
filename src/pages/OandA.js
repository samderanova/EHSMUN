import React from 'react';
import Card from 'react-bootstrap/Card';
import './OandA.css';

class OandA extends React.Component {
    render() {
        return (
            <div className="OandA">
                <h5 style={{ textAlign: "center", padding: "50px 100px", lineHeight: "1.75em" }}>EHSMUN was founded in 2017 by former Secretary General and current Student Advisor Alvin Li with the help of world history teacher
                    English teacher Laura Nielsen. With Alvin's leadership and Mrs. Nielsen's guidance, EHSMUN grew to encompass more
                    members, host more fundraising events, and attend larger, farther conferences.
                </h5>
                <h2>Advisors</h2>
                <div className="advisors">
                    <Card>
                        <Card.Img variant="top" src="nielsen1.jpg" />
                        <Card.Body>
                            <Card.Title>Laura Nielsen</Card.Title>
                            <Card.Text>
                            Mrs. Nielsen has been with EHSMUN since its creation and has remained dedicated and loyal to helping the officers run it. She teaches AP and CP English at Encinal.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="ep1.jpg" />
                        <Card.Body>
                            <Card.Title>Emily Pabarcus</Card.Title>
                            <Card.Text>
                            Ms. P runs the MUN class at Encinal and was a big help in helping EHSMUN attend conferences. She teaches AP and CP United States History and English Language Development at Encinal.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <h2>Officers</h2>
                <div className="officers">
                    <Card>
                        <Card.Img variant="top" src="sd.jpg" />
                        <Card.Body>
                            <Card.Title>Secretary General</Card.Title>
                            <h6>Sam Der</h6>
                            <p>Year: Senior</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="dp1.jpg" />
                        <Card.Body>
                            <Card.Title>Under Secretary General</Card.Title>
                            <h6>Danielle Payopay</h6>
                            <p>Year: Senior</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="al.jpg" />
                        <Card.Body>
                            <Card.Title>Student Advisor</Card.Title>
                            <h6>Alvin Li</h6>
                            <p>Year: Senior</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="et.jpg" />
                        <Card.Body>
                            <Card.Title>Secretary</Card.Title>
                            <h6>Eric Tuason</h6>
                            <p>Year: Senior</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Treasurer</Card.Title>
                            <h6>Analin Geritz</h6>
                            <p>Year: Senior</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="bw.jpg" />
                        <Card.Body>
                            <Card.Title>Deputy Treasurer</Card.Title>
                            <h6>Benjamin Wu</h6>
                            <p>Year: Junior</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Fundraising Officer</Card.Title>
                            <h6>Sofía Espinoza</h6>
                            <p>Year: Senior</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="kn.JPG" />
                        <Card.Body>
                            <Card.Title>Fundraising Officer</Card.Title>
                            <h6>Kayla Ngai</h6>
                            <p>Year: Senior</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default OandA;