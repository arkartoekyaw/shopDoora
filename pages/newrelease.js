import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NewRelease() {
    return (
        <div className="container-fluid">
            <div className="">
                <h2 className="text-dark text-center">
                    <span className="text-danger">New</span> Released
                </h2>
                <p className="text-center">Try Our Latest Flavors Here</p>
                <Row>
                    <Col xl={3} lg={3} md={3} sm={6} xs={6} >
                        <div
                            className="d-flex flex-column justify-content-end p-5 h-100"
                            style={{
                                position: "relative",
                                backgroundImage: "url(4.jpg)",
                                backgroundSize: "cover"
                            }}
                        >
                            <div className="content text-left align-self-start">
                                <p className="text-light fs-4 fw-bold">Citrus Mon <br/> 20,000 Pul <br/> Disposable <br/> 3 Percent <br/> <span className="fw-light">30,000 MMK</span> </p>
                            </div>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="bg-img" style={{ backgroundImage: "url(your-background-image.jpg)" }}>
                        <div
                            className="d-flex flex-column justify-content-end p-5 h-100"
                            style={{
                                position: "relative",
                                backgroundImage: "url(5.jpg)",
                                backgroundSize: "cover"
                            }}
                        >
                            <div className="content text-left align-self-start">
                                <p className="text-light fs-4 fw-bold">Strawberry <br/> Yogurt with <br/> Refreshing Flavor <br/> 3 Percent <br/> <span className="fw-light">30,000 MMK</span> </p>
                            </div>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="bg-img" style={{ backgroundImage: "url(your-background-image.jpg)" }}>
                        <div
                            className="d-flex flex-column justify-content-end p-5 h-100"
                            style={{
                                position: "relative",
                                backgroundImage: "url(6.jpg)",
                                backgroundSize: "cover"
                            }}
                        >
                            <div className="content text-left align-self-start">
                                <p className="text-light fs-4 fw-bold">Strawberry <br/> Yogurt with <br/> Refreshing Flavor <br/> 3 Percent <br/> <span className="fw-light">30,000 MMK</span> </p>
                            </div>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={3} sm={6} xs={6} className="bg-img" style={{ backgroundImage: "url(your-background-image.jpg)" }}>
                        <div
                            className="d-flex flex-column justify-content-end p-5 h-100"
                            style={{
                                position: "relative",
                                backgroundImage: "url(4.jpg)",
                                backgroundSize: "cover"
                            }}
                        >
                            <div className="content text-left align-self-start">
                                <p className="text-light fs-4 fw-bold">Strawberry <br/> Yogurt with <br/> Refreshing Flavor <br/> 3 Percent <br/> <span className="fw-light">30,000 MMK</span> </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex flex-column align-items-center">
                    <button type="button" className="btn btn-secondary btn-sm w-25">
                        View More <i className="fa-sharp fa-solid fa-angle-right fa-sm"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
