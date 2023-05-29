import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Membership() {
    return (

        <div className="container-fluid text-light membership" style={{ height: "auto", maxWidth:"100vw"}}>
            <Row className="">
                <Col xs={12} sm={12} md={12} lg={12} xl={8}>
                    <div
                        className="d-flex flex-column justify-content-end p-5 h-100"
                        style={{
                            position: "relative",
                            backgroundImage: "url(pod7.jpg)",
                            backgroundSize: "cover"
                        }}
                    >
                        <div className="content text-left align-self-start">
                            <h2 className="fw-bold">Membership Program</h2>
                            <p>Be a Vape Pi member and get our</p>
                            <p>special exclusive offers</p>
                            <button className="btn btn-secondary">View</button>
                        </div>
                    </div>
                </Col>


                <Col xs={6} sm={6} md={6} lg={6} xl={2} className="text-light">
                    <div
                        className="d-flex flex-column justify-content-end p-5 h-100"
                        style={{
                            position: "relative",
                            backgroundImage: "url(pod8.jpg)",
                            backgroundSize: "cover"
                        }}
                    >
                        <div className="content">
                            <h6 className="card-text fw-bold">
                                Devices <i className="ms-2 fa-sharp fa-solid fa-angle-right fa-sm"></i>
                            </h6>
                            <p className="card-text">Find the best for <br /> you here!</p>
                        </div>
                    </div>



                </Col>





                <Col xs={6} sm={6} md={6} lg={6} xl={2} className="d-inline-flex flex-column">

                    <div className="d-flex flex-column justify-content-end align-items-center p-5" style={{ position: "relative", backgroundImage: "url(pod8.jpg)", backgroundSize: "cover" }}>
                        <div className="content mt-2">
                            <h6 className="fw-bold">
                                Pods
                                <i className="ms-3 fa-sharp fa-solid fa-angle-right fa-sm"></i>
                            </h6>
                            <p className="">Variety of choices <br /> available</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-center p-5" style={{ position: "relative", backgroundImage: "url(pod8.jpg)", backgroundSize: "cover" }}>
                        <div className="content mt-2">
                            <h6 className=" fw-bold">
                                Disposable

                            </h6>
                            <p className="">Variety of choices <br /> available</p>
                        </div>
                    </div>

                </Col>
            </Row>

        </div>


    );
}
