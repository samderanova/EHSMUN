import React from 'react';
import './Gallery.css';
import 'bootstrap/dist/css/bootstrap.css';  
import lozad from 'lozad';

function Gallery () {
    function lazyLoad() {
        const observer = lozad();
        observer.observe();
    }
    return (
        <div className="App slide-in" onLoad={lazyLoad}>
            <div className="body">
                <div className="row">

                    <div className="column1">
                        <img src={'IMG_01691.jpg'} alt='closing ceremonies' />
                        <img src={'IMG_01781.jpg'} alt='awards' />
                        <img src={'nhsmun5.jpeg'} alt='group pic' />
                        <div className="column">
                            <img src={'nhsmun7.jpg'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='un'/>
                            <img src={'nhsmun2.jpeg'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='discussion' />
                        </div>
                        <img className="lozad" data-src={'IMG_6839.jpg'} alt='funny pic'/>
                        <div className="column">
                            <img className="lozad" data-src={'IMG_6806.JPG'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='view of berkeley'/>
                            <img className="lozad" data-src={'IMG_6759.JPG'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='alameda point'/>
                        </div>
                        <img className="lozad" data-src={'nhsmun3.jpeg'} alt='hallway'/>
                        <img className="lozad" data-src={'nhsmun9.JPG'} alt='nyc night' />
                    </div>
                    
                    <div className="column2">
                        <img src={'IMG_01731.jpg'} alt='rapporteur'/>
                        <img src={'IMG_01741.jpg'} alt='rapporteur 2' />
                        <img src={'IMG_8237.JPG'} alt='flight' />
                        <img className="lozad" data-src={'nhsmun1.jpeg'} alt='large conference room'/>
                        <img className="lozad" data-src={'IMG_6831.JPG'} alt='oakland' />
                        <img className="lozad" data-src={'unBart.jpg'} alt='un logo at BART station' />
                        <img className="lozad" data-src={'IMG_6837.jpg'} alt='group pic'/>
                        <img className="lozad" data-src={'IMG_6771.JPG'} alt="oxford" />
                    </div>

                    <div className="column3">
                        <img src={'IMG_01651.jpg'} alt='at work' />
                        <img src={'IMG_01641.jpg'} alt='closing ceremonies' />
                        <img src={'nhsmun4.jpeg'} alt='walking around'/>
                        <div className="column">
                            <img src={'nhsmun6.jpeg'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='new york' />
                            <img src={'nhsmun8.jpg'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='new york night' />
                        </div>
                        <div className="column">
                            <img className="lozad" data-src={'IMG_6760.JPG'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='bart station'/>
                            <img className="lozad" data-src={'IMG_6827.JPG'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='group waiting'/>
                        </div>
                        <img className="lozad" data-src={'IMG_6767.JPG'} alt='group waiting' />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Gallery;