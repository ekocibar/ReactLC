import React from 'react';

const Main = () => {
    return (
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 font-weight-normal">LiveCoding</h1>
                <p className="lead font-weight-normal">Live Coding is an online bootcamp.</p>
                <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Learn a lot.. </h1>
            <p className="lead font-weight-normal">HTML CSS Bootstrap Js React</p>
            <a className="btn btn-outline-secondary" href="#">Click here</a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        </div>
    );
};

export default Main;