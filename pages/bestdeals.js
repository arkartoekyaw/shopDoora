import React from "react";
import { Row, Col } from "react-bootstrap";



export default function BestDeals() {
    return (
        <div className="container" style={{maxWidth:"100vw"}}>
            <h2 className="text-dark text-center">Best Deals</h2>
            <p className="text-dark text-center">Just For You</p>
            <div className="d-flex justify-content-between align-items-center">

                <Row className="g-4 justify-content-between">

                    <Col xl={2} lg={4} md={4} sm={6} xs={6}>
                        <div className="card" >
                            <div className="d-flex flex-column align-items-center">
                                <button type="button" className="btn btn-danger btn-sm w-50">
                                    25% Off
                                </button>
                                <img src="pod1.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className="card-text">
                                    Refreshing Mint
                                </p>
                                <h5 className="card-text font-weight-bold">
                                    30,000MMK
                                </h5>
                                <p className="card-text text-decoration-line-through">
                                    30,000 MMK
                                </p>
                                <p className="card-text bg-warning w-50 text-center">
                                    <i className="fas fa-star fa-xs"></i>600 Points
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col xl={2} lg={4} md={4} sm={6} xs={6}>
                        <div className="card" >
                            <div className="d-flex flex-column align-items-center">
                                <button type="button" className="btn btn-danger btn-sm w-50">
                                    25% Off
                                </button>
                                <img src="pod2.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className="card-text">
                                    Refreshing Mint
                                </p>
                                <h5 className="card-text font-weight-bold">
                                    30,000MMK
                                </h5>
                                <p className="card-text text-decoration-line-through">
                                    30,000 MMK
                                </p>
                                <p className="card-text bg-warning w-50 text-center">
                                    <i className="fas fa-star fa-xs"></i>600 Points
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col xl={2} lg={4} md={4} sm={6} xs={6}>
                        <div className="card" >
                            <div className="d-flex flex-column align-items-center">
                                <button type="button" className="btn btn-danger btn-sm w-50">
                                    25% Off
                                </button>
                                <img src="pod3.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className="card-text">
                                    Refreshing Mint
                                </p>
                                <h5 className="card-text font-weight-bold">
                                    30,000MMK
                                </h5>
                                <p className="card-text text-decoration-line-through">
                                    30,000 MMK
                                </p>
                                <p className="card-text bg-warning w-50 text-center">
                                    <i className="fas fa-star fa-xs"></i>600 Points
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col xl={2} lg={4} md={4} sm={6} xs={6}>
                        <div className="card" >
                            <div className="d-flex flex-column align-items-center">
                                <button type="button" className="btn btn-danger btn-sm w-50">
                                    25% Off
                                </button>
                                <img src="pod4.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className="card-text">
                                    Refreshing Mint
                                </p>
                                <h5 className="card-text font-weight-bold">
                                    30,000MMK
                                </h5>
                                <p className="card-text text-decoration-line-through">
                                    30,000 MMK
                                </p>
                                <p className="card-text bg-warning w-50 text-center">
                                    <i className="fas fa-star fa-xs"></i>600 Points
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col xl={2} lg={4} md={4} sm={6} xs={6}>
                        <div className="card" >
                            <div className="d-flex flex-column align-items-center">
                                <button type="button" className="btn btn-danger btn-sm w-50">
                                    25% Off
                                </button>
                                <img src="pod5.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className="card-text">
                                    Refreshing Mint
                                </p>
                                <h5 className="card-text font-weight-bold">
                                    30,000MMK
                                </h5>
                                <p className="card-text text-decoration-line-through">
                                    30,000 MMK
                                </p>
                                <p className="card-text bg-warning w-50 text-center">
                                    <i className="fas fa-star fa-xs"></i>600 Points
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col xl={2} lg={4} md={4} sm={6} xs={6}>
                        <div className="card" >
                            <div className="d-flex flex-column align-items-center">
                                <button type="button" className="btn btn-danger btn-sm w-50">
                                    25% Off
                                </button>
                                <img src="pod6.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <p className="card-text">
                                    Refreshing Mint
                                </p>
                                <h5 className="card-text font-weight-bold">
                                    30,000MMK
                                </h5>
                                <p className="card-text text-decoration-line-through">
                                    30,000 MMK
                                </p>
                                <p className="card-text bg-warning w-50 text-center">
                                    <i className="fas fa-star fa-xs"></i>600 Points
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="d-flex flex-column align-items-center">
                <button type="button" className="btn btn-secondary btn-sm w-25">
                    View More <i className="fa-sharp fa-solid fa-angle-right fa-sm"></i>
                </button>
            </div>
        </div>
    );
}
