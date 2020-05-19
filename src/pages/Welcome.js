import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Welcome.css';

class Welcome extends React.Component {
    render() {
        return (
            <div className="Welcome">
                <div className="letter">
                    <p>Dear current and future delegates,</p>
                    <br></br>
                    <p>Welcome to EHSMUN! By joining MUN, I am sure that you will be able to not only improve your public 
                        speaking, research, and collaboration skills, but make good friends and memories as well. You will be writing position papers 
                        to demonstrate your understading of your country's background and policy. You will also be going to conferences 
                        in different areas of California (and maybe even the United States!) where you will represent that country and 
                        work with other delegates to form solutions for a given topic. 
                        <br></br><br></br>
                        I do warn you, however, that there will be an overwhelming amount of challenges: you may be scared to speak, the committee you are in 
                        has so many people that the atmosphere seems to be choking you, you seem to be ignored by everyone else in committee,
                        even by delegates from your own school, you cannot think of a solution quickly enough, you don't get a conference award even though
                        you tried your absolute best to work with other delegates. There are just too many challenges!
                        <br></br><br></br>
                        But that is what makes this journey so worthwhile in the end. At the end of the school year, think back to the beginning of
                        the year and see how much your speaking skills have changed. Were you able to speak more during mock conferences? Were you
                        to actively participate in caucuses? Even outside of MUN, you can see changes. Debates, socratic seminars, the average
                        discussion, it is evident that MUN changes your life for the better. You probably will not gain this much experience in
                        public speaking anywhere else, so we encourage you to take advantage of MUN and change your understanding of the world.
                        <br></br><br></br>
                        Once again, welcome to MUN! Our officers, the advisors, and I wish you the best of luck in your journey to become
                        a better you.
                        <br></br><br></br><br></br>
                        Yours truly,
                        <br></br><br></br>
                        Sam Der
                        <br></br>
                        Secretary General of EHSMUN
                    </p>
                </div>
            </div>
        )
    }
}

export default Welcome;