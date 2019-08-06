import React from 'react';
import './Gallery.css';
import 'bootstrap/dist/css/bootstrap.css';  

function Gallery () {
    return (
        <div className="App slide-in">
            <div className="body">
                <div className="row">
                    <div className="column">
                        <img src={'nhsmun5.jpeg'} alt='group pic'/>
                        <div className="column">    
                            <img src={'nhsmun7.jpg'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='large conference room'/>
                            <img src={'nhsmun2.jpeg'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='funny pic' />
                        </div>
                        <img src={'nhsmun1.jpeg'} alt='group pic'/>
                        <img src={'IMG_6759.JPG'} alt='alameda point'/>
                    </div>
                    <div className="column">
                        <img src={'IMG_6839.jpg'} alt='discussion'/>
                        <img src={'IMG_6837.jpg'} alt='un'/>
                        <img src={'IMG_6827.JPG'} alt='group waiting'/>
                    </div>
                    <div className="column">
                        <img src={'nhsmun4.jpeg'} alt='walking around'/>
                        <div className="column">
                            <img src={'IMG_6806.JPG'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='view of berkeley'/>
                            <img src={'IMG_6767.JPG'} style={{maxWidth: "50%", paddingRight: "4px", verticalAlign: "top"}} alt='group waiting' />
                        </div>
                        <img src={'IMG_6760.JPG'} alt='bart station'/>
                    </div>
                </div>
                {/*<div className="nhsmun2019">
                    <h5>National High School Model United Nations (NHSMUN) 2019</h5>
                    <img src={'nhsmun1.jpeg'} alt='large conference room'/>
                    <img src={'nhsmun2.jpeg'} alt='discussion'/>
                    <img src={'nhsmun4.jpeg'} alt='walking around'/>
                    <img src={'nhsmun5.jpeg'} alt='group pic'/>
                    <img src={'nhsmun7.jpg'} alt='un'/>
                </div>
                <div className="bmun2019">
                    <h5>Berkeley Model United Nations (BMUN) 2019</h5>
                    <img src={'IMG_6837.jpg'} alt='group pic'/>
                    <img src={'IMG_6827.JPG'} alt='group waiting'/>
                    <img src={'IMG_6806.JPG'} alt='view of berkeley'/>
                    <img src={'IMG_6760.JPG'} alt='bart station'/>
                    <img src={'IMG_6759.JPG'} alt='alameda point'/>
                </div>*/}
            </div>
        </div>
    );
}

export default Gallery;