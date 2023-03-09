import React from "react";
import WebCommon from "./WebCommon";
import img from './image/about.jpg'

function WebAbout() {

    return (
        <>
            <WebCommon name='Wellcome to About Page' visit='/contact' btnName='Contact Now' imgsrc={img} />
        </>
    )
}

export default WebAbout;