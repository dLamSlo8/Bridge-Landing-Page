import React from 'react';
import logo from './static/logo.png';
const CopyrightBar: React.FC = () => {
    return (
        <div className="site-spacing d-flex">
            <div>
                <img 
                src={logo}
                alt="" 
                className="image"
                style={{marginRight: "50px"}} />
            </div>


                <span 
                className="color-black flex-column flex-center"
                style={{display: "inline-flex"}}>Copyright &#9400; 2020 Bridge Technology, LLC. All Rights Reserved.</span>

        </div>
    )
}

export default CopyrightBar;