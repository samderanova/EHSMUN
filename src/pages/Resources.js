import React from 'react';
import './Resources.css';

class Resources extends React.Component {
    render() {
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
        function Card(props) {
            return (
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{props.title}</h3>
                        <img src={props.image} alt="..."/>
                    </div>
                </div>
            );
        }
        return (
            <div className="Resources">
                <div className="page">
                    <h2>Before the Conference</h2>
                    <h3>Research</h3>
                    <p style={{textAlign: "center"}}>In order to be prepared for a conference, get to know your country's background. Here are a few
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
                    given a certain committee topic. As you are doing your research, be sure to take notes on several aspects 
                    as you will be needing them to write your paper:</p>
                <ul>
                    <li><strong>Past and Current International Action: </strong> Any resolutions, laws, etc. passed
                    that involve the topic being discussed in committee</li>
                    <li><strong>Country Position: </strong> Note any news invovling both your country and the topic.
                    A large part of writing this section is based off of empathy. Pretend to be the leader of your country.
                    Based on the amount of research you have so far, what does your country's position seem to be? If you
                    are stuck, keep researching. Be careful not to use your own opinions!</li>
                    <li><strong>Possible Solutions: </strong>Based off of the research you have, what does your country think
                    a solution to the committee topic should be?</li>
                    <li><strong>Questions to Consider: </strong>Many conferences, especially BMUN, require you to answer
                    several questions about the topic. Make sure they are longer than one sentence and remember to incorporate
                    your country's position into your answers.</li>
                </ul>
                <h2>At the Conference</h2>
                <h3>Essential Tools</h3>
                <p>Make sure you bring these items to your conferences. They will help you out a lot during committee!</p>
                <ul>
                    <li><strong>Backup money and food money: </strong>You'll need to buy something to eat and drink. What can you do without money?</li>
                    <li><strong>Transportation money or cards: </strong>Clipper cards are a great resource! No need to buy a ticket anymore!</li>
                    <li><strong>Water: </strong>If you're thirsty, you'll have easy access to water.</li>
                    <li><strong>Placard: </strong>You need to use this during committee so the chair will call on you, so make sure you bring it!</li>
                    <li><strong>Laptop: </strong>This makes writing resolutions much easier, but not all committees allow them. Check for "Unmod tech" in the committee information for your conference!</li>
                    <li><strong>Pencils and erasers: </strong>Pencils and erasers are good for taking notes</li>
                    <li><strong>Post-its: </strong>You can use these to pass notes to other delegates</li>
                    <li><strong>Position Paper: </strong>This will remind you of what your country's position is.</li>
                    <li><strong>Pre-written speeches: </strong>If you plan to speak during the speaker's list, make sure you have a speech prepared!</li>
                    <li><strong>Additional research: </strong>Any additional information regarding the topic will be very helpful!</li>
                </ul>
                
                <div className="flow">
                    <h3>Flow of Debate</h3>
                    <div className="card1">
                        <div className="firstHalf">
                            <Card title="Roll Call" image="rollCall.png"/>
                            <p className="flowArrow">&darr;</p>
                        </div>
                        <div className="secondHalf">
                            <p>Roll call is like taking attendance at school. When your country is called say:</p>
                            <ul>
                                <li><strong>Present: </strong>Your country will be able to vote in favor, against, or abstain when voting on resolutions.</li>
                                <li><strong>Present and Voting: </strong>Your country will only be able to vote in favor or against</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="firstHalf">
                            <Card title="Motion to Open Debate" image="openDebate.png"/>
                            <p className="flowArrow">&darr;</p>
                        </div>
                        <div className="secondHalf">
                            <p>This motion, if it passes, officially begins the discussion in committee. It does NOT call the committee to order.</p> 
                            <i>Motion to open debate</i>
                        </div>
                    </div>
                    <div className="card3">
                        <div className="firstHalf">
                            <Card title="The Speaker's List" image="speakerList.png" />
                            <div style={{padding: "70px"}}>
                                <p className="flowArrow" style={{display: "inline", padding: "0"}}>&darr;</p>
                                <p className="flowArrow" style={{display: "inline", padding: "0"}}>&uarr;</p>
                            </div>
                        </div>
                        <div className="secondHalf">
                            <p>This motion, if it passes, allows delegates to present their country's opinions on the overall topic (an opening speech). These opening speeches will attract other delegates who agree with you and will help you form a resolution. Be a power delegate instead of a follower delegate!</p>
                            <i>Motion to open the speaker's list</i>
                        </div>
                    </div>
                    <div className="card4">
                        <div className="firstHalf">    
                            <Card title="Caucusing" image="caucusing.png"/>
                            <p className="flowArrow">&darr;</p>
                        </div>
                        <div className="secondHalf">
                            <p>Moderated and unmoderated caucuses (deeper discussion between delegates) can take place while the Speaker's List is taking place. They are meant to help you form blocs with other delegates and start writing resolutions. Towards the end, your bloc will be required to submit a resolution to the chair.</p>
                            <ul>
                                <li><i>Motion for a 6 minute moderated caucus with a 30 second speaking time to discuss the recent crisis</i></li>
                                <li><i>Motion for a 6 minuted unmoderated caucus to start writing resolutions</i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card5">
                        <div className="firstHalf">
                            <Card title="Voting Bloc" image="votingBloc.png"/>
                            <p className="flowArrow">&darr;</p>
                        </div>
                        <div className="secondHalf">
                            <p>Resolutions are presented and voted on by delegates.</p>
                            <ul>
                                <li><i>Yes</i></li>
                                <li><i>No</i></li>
                                <li><i>Abstain (if your country is PRESENT)</i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card6">
                        <div className="firstHalf">
                            <Card title="Motion to End Debate" image="endDebate.png" />
                        </div>
                        <div className="secondHalf">
                            <p>This motion, if passed, officially ends the committee.</p>
                            <i>Motion to end debate</i>
                        </div>
                    </div>  
                </div>
                <h2>Still Confused?</h2>
                <h4 style={{ paddingBottom: "30px", textAlign: "center" }}>Head over to these resources to learn even more about MUN!</h4>
                <div className="extraResources">
                    <a href="https://learnbmun.squarespace.com" target="_blank" rel="noopener noreferrer">
                        <button className="button1 btn btn-primary">
                            <h5>Learn</h5>
                            <p style={{ margin: "0" }}>Created by BMUN</p>
                        </button>
                    </a>
                    <a href="https://www.helpmymun.com/" target="_blank" rel="noopener noreferrer">
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
}

export default Resources;