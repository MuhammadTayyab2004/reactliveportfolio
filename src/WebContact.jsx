import React, { useState } from "react";

function WebContact() {

    let [inputData, setInputData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    });
    function onChange(e) {

        let { name, value } = e.target
        setInputData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        });
    }

    function formSubmit(e) {
        e.preventDefault();
        alert(`
        My Name is:  ${inputData.fullname}.
        My Phone is:  ${inputData.phone}.
        My Email is:  ${inputData.email}.
        `)
        // My Message is:  ${inputData.message}.
    }

    return (
        <>
            <div className="mt-5 mb-3">
                <h1 className=" text-center">
                    Contact Us
                </h1>
            </div>

            <div className=" container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full name <span className='text-danger'>*</span> </label>
                                <input value={inputData.fullname} name='fullname' onChange={onChange} required type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number <span className='text-danger'>*</span> </label>
                                <input value={inputData.phone} name='phone' onChange={onChange} required type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address <span className='text-danger'>*</span> </label>
                                <input value={inputData.email} name='email' onChange={onChange} required type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message <span className='text-danger'>*</span> </label>
                                <textarea value={inputData.message} name='message' onChange={onChange} required className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WebContact;