import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Trynew() {
    return (
        <div className="trynew container-fluid d-flex align-items-center justify-content-center p-2" style={{ maxHeight: "auto" }}>
            <div className="d-inline-block">
                <Carousel>
                    <Carousel.Item style={{minWidth:"auto"}}>
                        <Row className="g-4 justify-content-between">
                            <Col>
                                <div className="card mb-3 p-2" style={{ minWidth: "90vw" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="pod11.jpg" className="img-fluid rounded-start h-100" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body text-center mt-xxl-5 mt-xl-4 mt-lg-2 mt-md-1">
                                                <h5 className="card-title">Try New Flavor</h5>
                                                <p className="card-text">
                                                    Citrus Monster
                                                </p>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm btn-md btn-lg btn-xl btn-xxl"
                                                >
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Row className="g-4 justify-content-between">
                            <Col>
                                <div className="card mb-3 p-2" style={{ minWidth: "90vw" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="pod9.jpg" className="img-fluid rounded-start h-100" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body text-center mt-xxl-5 mt-xl-4 mt-lg-2 mt-md-1">
                                                <h5 className="card-title">Try New flavor</h5>
                                                <p className="card-text">
                                                    Citrus Monster
                                                </p>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm btn-md btn-lg btn-xl btn-xxl"
                                                >
                                                    View
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Row className="g-4 justify-content-between">
                            <Col>
                                <div className="card mb-3 p-2" style={{ minWidth: "90vw" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="pod10.jpg" className="img-fluid rounded-start h-100" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body text-center mt-xxl-5 mt-xl-4 mt-lg-2 mt-md-1">
                                                <h5 className="card-title">Try New flavor</h5>
                                                <p className="card-text">
                                                    Citrus Monster
                                                </p>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm btn-md btn-lg btn-xl btn-xxl"
                                                >
                                                    View
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>

                </Carousel>

            </div>
        </div>
    );
}
