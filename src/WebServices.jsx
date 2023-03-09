import React from "react";
import WebCard from "./WebCard";
import WebSerData from "./WebServiceData";


function WebServices() {

    return (
        <>
            <div className="my-5">
                <h1 className=" text-center">
                    Our Services
                </h1>
            </div>
            <div className=" container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {
                                WebSerData.map((val, index) =>
                                    <WebCard
                                        title={val.title}
                                        imgsrc={val.imgsrc}
                                        key={index}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebServices;