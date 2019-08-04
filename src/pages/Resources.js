import React from 'react';
import './Resources.css';
import 'bootstrap/dist/css/bootstrap.css';

function Resources() {
    function Button(props) {
        return (
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary" style={props.styles}>
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                </button>
            </a>
        );
    }
    function FlowButton(props) {
        return (
            <div className="flowContainer">
                <button className="btn titlebtn btn-primary" data-toggle="modal" data-target="#exampleModal" style={props.styles}>
                    <h5>{props.name}</h5>
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {props.content}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="App slide-in">
            <div className="page">
                <h2>Before the Conference</h2>
                <h3>Research</h3>
                <p>In order to be prepared for a conference, get to know your country's background. Here are a few
                    resources to get you started:
                </p>
                <div className="links">
                    <Button link="https://www.cia.gov/library/publications/the-world-factbook/" name="CIA World Factbook" description="A database of country profiles" />
                    <Button link="https://www.aljazeera.com/" name="Al Jazeera" description="An English-language news channel based in the Middle East" />
                    <Button link="https://www.un.org/en/sections/documents/general-assembly-resolutions/" name="United Nations Resolutions" description="A collection of resolutions passed in the UN General Assembly" />
                    <Button link="https://www.washingtonpost.com/" name="The Washington Post" description="An American based daily newspaper" />
                    <Button link="http://news.bbc.co.uk/2/hi/country_profiles/default.stm" name="BBC Country Profiles" description="Another database of country profiles, but more history oriented" />
                </div>
                <h3>Position Papers</h3>
                <p>Most conferences require that you write a paper detailing your country's policies and arguments
                    given a certain committee topic. As you are doing your research, be sure to take notes on several a
                    spects as you will be needing them to write your paper:</p>
                <ul>
                    <li><strong>Past and Current International Action: </strong> Any resolutions, laws, etc. passed
                    that involve the topic being discussed in committee</li>
                    <li><strong>Country Position: </strong> Note any news invovling both your country and the topic.
                    A large part of writing this section is based off of empathy. Pretend to be the leader of your country.
                    Based on the amount of research you have so far, what does your country's position seem to be? If you
                    are stuck, keep researching. Be careful not to use your own opinions!</li>
                    <li><strong>Possible Soltuions: </strong>Based off of the research you have, what does your country think
                    a solution to the committee topic should be?</li>
                    <li><strong>Questions to Consider: </strong>Many conferences, especially BMUN, require you to answer
                    several questions about the topic. Make sure they are longer than one sentence and remember to incorporate
                    your country's position into your answers.</li>
                </ul>
                <h2>At the Conference</h2>
                <h3>Essential Tools</h3>
                <p>Make sure you bring these items to your conferences. They will help you out a lot during committee!</p>
                <ul>
                    <li>Backup money and food money</li>
                    <li>Transportation money or cards</li>
                    <li>Water</li>
                    <li>Placard</li>
                    <li>Laptop (if committee allows it)</li>
                    <li>Pencils and erasers</li>
                    <li>Post-its</li>
                    <li>Position Paper</li>
                    <li>Pre-written speeches</li>
                    <li>Additional research</li>
                </ul>
                <h3>Flow of Debate</h3>
                <div className="flow">
                    <FlowButton name="Roll Call" content={
                        <div>
                            <p>Roll call is like taking attendance at school. When your country is called say:</p>
                            <ul>
                                <li><strong>Present: </strong>Your country will be able to vote in favor, against, or
                                abstain when voting on resolutions.</li>
                                <li><strong>Present and Voting: </strong>Your country will only be able to vote in favor or
                                against</li>
                            </ul>
                        </div>
                    } />
                    <p className="flowButton">&darr;</p>
                    <FlowButton name="Motion to Open Debate" content={
                        <div>
                            <p>This motion, if it passes, officially begins the discussion in committee. It does NOT call the
                                committee to order.
                            </p>
                            <p><i>Motion to open debate</i></p>
                        </div>
                    } />
                    <p className="flowButton">&darr;</p>
                    <FlowButton name="The Speaker's List" content={
                        <div>
                            <p>This motion, if it passes, allows delegates to present their country's opinions on the overall
                                topic (an opening speech). These opening speeches will attract other delegates who agree with
                                you and will help you form a resolution. Be a power delegate instead of a follower delegate!
                            </p>
                            <p><i>Motion to open the speaker's list</i></p>
                        </div>
                    } />
                    <p className="flowButton">&#8597;</p>
                    <FlowButton name="Caucusing" content={
                        <div>
                            <p>Moderated and unmoderated caucuses (deeper discussion between delegates) can take place while the
                                Speaker's List is taking place. They are meant to help you form blocs with other delegates
                                and start writing resolutions. Towards the end, your bloc will be required to submit a
                                resolution to the chair.
                            </p>
                            <ul>
                                <li><i>Motion for a 6 minute moderated caucus to discuss the recent crisis</i></li>
                                <li><i>Motion for a 6 minuted unmoderated caucus to start writing resolutions</i></li>
                            </ul>
                        </div>
                    } />
                    <p className="flowButton">&darr;</p>
                    <FlowButton name="Voting Bloc" content={
                        <div>
                            <p>Resolutions are presented and voted on by delegates</p>
                            <ul>
                                <li><i>Yes</i></li>
                                <li><i>No</i></li>
                                <li><i>Abstain (if your country is PRESENT)</i></li>
                            </ul>
                        </div>
                    } />
                    <p className="flowButton">&darr;</p>
                    <FlowButton name="Motion to End Debate" content={
                        <div>
                            <p>This motion, if passed, officially ends the committee.</p>
                        </div>
                    } />
                </div>
                <h2>Still Confused?</h2>
                <h4 style={{ paddingBottom: "30px", textAlign: "center" }}>Head over to these resources to learn even more about MUN!</h4>
                <div className="extraResources">
                    <a href="https://learnbmun.squarespace.com" rel="noopener noreferrer">
                        <button className="button1 btn btn-primary">
                            <h5>Learn</h5>
                            <p style={{ margin: "0" }}>Created by BMUN</p>
                        </button>
                    </a>
                    <a href="https://www.helpmymun.com/" rel="noopener noreferrer">
                        <button className="button2 btn btn-primary">
                            <h5>HelpMyMUN</h5>
                            <p style={{ margin: "0" }}>A great resource for beginners</p>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Resources;