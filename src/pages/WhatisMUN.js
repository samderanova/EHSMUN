import React from 'react';
import './WhatisMUN.css';

class WhatisMUN extends React.Component {
    render() {
        return (
            <div className="WhatisMUN">
                <h2>What is MUN?</h2>
                <div className="portion">
                    <img className="mun-image" src="leagueofnations.jpg" alt="league of nations"/>
                    <p className="para1">Model United Nations' history traces back to the League of Nations, the predecessor of the United 
                        Nations. It was founded after World War I, on January 10, 1920, to prevent the emergence of a second world 
                        war and maintain world peace. The League operated similar to how the United Nations does today, but with fewer 
                        members. Unfortunately, the League failed its mission. In 1939, Nazi Germany invaded Poland, causing France 
                        and England (Allies) to declare war on Germany. Soon after in 1941, Japan, allied with Nazi Germany and 
                        forming the Axis powers, bombed Pearl Harbor, forcing the United States to join the Allies and a second 
                        world war was upon the world. The war officially ended in 1945 when Japan, the last Axis power, surrendered 
                        to the United States after the U.S. dropped atomic bombs on the cities of Hiroshima and Nagasaki.</p>
                </div>
                <div className="portion">
                    <img className="mun-image" src="unitednations.JPG" alt="united nations" />
                    <p className="para2">After the war ended, the League of Nations reformed with a greater power in the form of the United Nations. It 
                        pledged to help create international peace, cooperation, and security to avoid a third world war from occurring 
                        to this day. It also works to uphold international law, protect human rights, deliver aid to those who need it, 
                        and promote sustainable development. In order to accomplish these daunting task, the UN created several internal
                        committees, such as the General Assembly, Security Council, Economic and Social Council, International Court of 
                        Justice, as well as a number of funds and programs to aid the needy. Each committee has their own topics to focus
                        on and discuss. For example, the General Assembly focuses on UN budgets, admission of new member states, and 
                        questions involving peace and security, while the Security Council focuses on pressing issues that compromise 
                        security, such as international disputes.</p>
                </div>
                <div className="portion">
                    <img className="mun-image" src="modelun.jpeg" alt="model un" />
                    <p className="para3">Model United Nations first surfaced as a student-run Model League of Nations in the 1920s, 
                        since the League of Nations was the predecessor of the UN. When the UN was formed, the MUN era exploded. 
                        Student-run conferences began appearing all over the world. The first MUN conference that emerged was Berkeley
                        Model United Nations and Harvard Model United Nations soon followed. Now high school students can participate in
                        Model UN conferences anywhere in the world to improve their public speaking, create solutions to pressing world
                        issues, and have fun.
                    </p>
                </div>
            </div>
        )
    }
}

export default WhatisMUN;