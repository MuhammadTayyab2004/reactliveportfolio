import React from "react";
import { NavLink } from "react-router-dom";

function WebCommon(prop) {

    return (
        <>
            <section id="header" className=" d-flex align-items-center justify-content-center">
                <div className=" container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className=" my-auto col-md-12 col-lg-6 pt-5 p-lg-0 order-2 order-lg-1">
                                    <h1>
                                        {prop.name}
                                        <br />
                                        <strong className=" text-primary">Tayyab</strong>
                                    </h1>
                                    <h6 className="my-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.
                                    </h6>
                                    <div className="mt-3">
                                        <NavLink to={prop.visit} className="btn_get_started">{prop.btnName}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                                    <img src={prop.imgsrc} className=" img-fluid animated my-5 pt-3" alt="img" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WebCommon;