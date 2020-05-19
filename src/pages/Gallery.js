import React from 'react';
import './Gallery.css';
import lozad from 'lozad';

class Gallery extends React.Component {
    render() {
        function lazyLoad() {
            const observer = lozad();
            observer.observe();
        }
        return (
            <div className="Gallery" onLoad={lazyLoad}>
                <div className="body">
                    <div className="row">

                        <div className="column1">
                            <img src={'bmun2020opening.jpg'} alt='opening ceremonies'/>
                            <img src={'bmun2020meeting.jpg'} alt="Lower Sproul Plaza" />
                            <img src={'bmalClosing.jpg'} alt='closing ceremonies' />
                            <img src={'bmalAwards2.jpg'} alt='awards' />
                            <img src={'nhsmun5.jpeg'} alt='group pic' />
                            <div className="column">
                                <img src={'nhsmun7.jpg'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='un'/>
                                <img src={'nhsmun2.jpeg'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='discussion' />
                            </div>
                            <img className="lozad" data-src={'bmun2019group2.jpg'} alt='funny pic'/>
                            <div className="column">
                                <img className="lozad" data-src={'bmun2019Berkeley.JPG'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='view of berkeley'/>
                                <img className="lozad" data-src={'bmun2019Walking.JPG'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='alameda point'/>
                            </div>
                            <img className="lozad" data-src={'nhsmun3.jpeg'} alt='hallway'/>
                            <img className="lozad" data-src={'nhsmun9.JPG'} alt='nyc night' />
                        </div>
                    
                        <div className="column2">
                            <img src={'bmun2020chevron.jpg'} alt="Chevron International House" />
                            <img src={'bmun2020campanile.jpg'} alt="the campanile" />
                            <img src={'bmalRap1.jpg'} alt='rapporteur'/>
                            <img src={'bmalRap2.jpg'} alt='rapporteur 2' />
                            <img className="lozad" data-src={'nhsmunFlight.JPG'} alt='flight' />
                            <img className="lozad" data-src={'nhsmun1.jpeg'} alt='large conference room'/>
                            <img className="lozad" data-src={'bmun2019Oakland.JPG'} alt='oakland' />
                            <img className="lozad" data-src={'unBart.jpg'} alt='un logo at BART station' />
                            <img className="lozad" data-src={'bmun2019group1.jpg'} alt='group pic'/>
                            <img className="lozad" data-src={'bmun2019Oxford.JPG'} alt="oxford" />
                        </div>

                        <div className="column3">
                            <img src={'bmun2020.jpg'} alt="scneery" />
                            <img src={'bmun2020scenery.jpg'} alt="scenery 2" />
                            <img src={'bmalAtWork.jpg'} alt='at work' />
                            <img src={'bmal2019group.jpg'} alt='bmal 2019 group pic' />
                            <img src={'nhsmun4.jpeg'} alt='walking around'/>
                            <div className="column">
                                <img className="lozad" data-src={'nhsmun6.jpeg'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='new york' />
                                <img className="lozad" data-src={'nhsmun8.jpg'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='new york night' />
                            </div>
                            <div className="column">
                                <img className="lozad" data-src={'bmun2019BART.JPG'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='bart station'/>
                                <img className="lozad" data-src={'bmun2019Waiting.JPG'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='group waiting'/>
                            </div>
                            <img className="lozad" data-src={'bmun2019Crosswalk.JPG'} alt='group waiting' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;