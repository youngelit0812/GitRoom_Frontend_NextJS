import React from "react";
import Lottie from "lottie-react";
import headerAnimation from '@/app/ui/lotties/Header.json';

const HeaderAnimation = () => {
    return (
        <div className="lottie-wrapper">
            <Lottie animationData={headerAnimation} loop={true} style={{width: '4800px', height: '1600px'}}/>
        </div>
    );
}

export default HeaderAnimation;