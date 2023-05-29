import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{minHeight : "auto"}}>
            <div className="d-inline-block">
                <Carousel>
                    <Carousel.Item>
                        <img src="1.jpg" className="carousel-image" alt="..." />
                        <Carousel.Caption className="d-block align-items-center justify-content-center">
                            <p className="text-warning d-none d-sm-none d-md-block">The Best Look</p>
                            <h6 className="text-light text-sm-center text-md-left fw-bold fs-5">
                                Anytime Anywhere
                            </h6>
                            <p className="text-light d-none d-sm-none d-md-block">Starts From 10,000MMK</p>
                            <button
                                type="button"
                                className="btn btn-secondary btn-sm btn-md btn-lg btn-xl btn-xxl "
                            >
                                View
                            </button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="2.jpg" className="carousel-image" alt="..." />
                        <Carousel.Caption>
                            <p className="text-warning d-none d-sm-none d-md-block">The Best Look</p>
                            <h5 className="text-light text-sm-center text-md-left fs-5">
                                Anytime Anywhere
                            </h5>
                            <p className="text-light d-none d-sm-none d-md-block">Starts From 10,000MMK</p>
                            <button
                                type="button"
                                className="btn btn-secondary btn-sm btn-md btn-lg btn-xl"
                            >
                                View
                            </button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="3.jpg" className="carousel-image" alt="..." />
                        <Carousel.Caption>
                            <p className="text-warning d-none d-sm-none d-md-block">The Best Look</p>
                            <h5 className="text-light text-sm-center text-md-left fs-5">
                                Anytime Anywhere
                            </h5>
                            <p className="text-light d-none d-sm-none d-md-block">Starts From 10,000MMK</p>
                            <button
                                type="button"
                                className="btn btn-secondary btn-sm btn-md btn-lg btn-xl"
                            >
                                View
                            </button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
