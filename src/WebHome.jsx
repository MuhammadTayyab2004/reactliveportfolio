import React from "react";
import WebCommon from "./WebCommon";

function WebHome() {

    let img = 'https://cdn.dribbble.com/users/2052787/screenshots/6591685/untitled-2-01.jpg'

    return (
        <>
            <WebCommon name='Grow Your Business with' visit='/contact' btnName='Get Started ' imgsrc={img} />
        </>
    )
}

export default WebHome;