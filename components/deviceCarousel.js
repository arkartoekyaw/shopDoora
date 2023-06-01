import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DevicesCarousel = ({ images, backgroundImage, title, subtitle }) => {
    const [perPage, setPerPage] = useState(4); // Initial perPage value

    useEffect(() => {
        const handleResize = () => {
            const isExtraSmallScreen = window.innerWidth < 576;
            const isSmallScreen = window.innerWidth < 768;
            setPerPage(isExtraSmallScreen ? 1 : isSmallScreen ? 2 : 4);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initialize perPage value on initial render

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const splideOptions = {
        rewind: true,
        type: "loop",
        perPage: perPage,
        perMove: 1,
    };

    return (
        <div className="container-fluid">
            <div
                className="background-image p-4"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    maxWidth: "100vw",
                    maxHeight: "auto", // Set the desired height
                }}
            >
                <div className="ms-4 d-flex align-items-center">
                    <div className="me-4 title " >
                        <h4 className="fw-bold text-primary" style={{width:'130px',display:'block'}}> {title}</h4>
                        <p className="text-danger" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
                    </div>
                    <div className="ms-5 img_slider" >
                        <Splide options={splideOptions} aria-label="My Favorite Images" >
                            {images.map((image, index) => (
                                <SplideSlide key={index} className="ms-2 test_class" style={{marginBottom:"-15px"}}>
                                    <Row className="d-flex justify-content-center align-items-center">
                                        <Col>
                                            <Card>
                                                <div>
                                                    <Card.Img  src={image} alt="..." />
                                                </div>
                                                <Card.Body className="d-flex flex-column align-items-center">
                                                    <Card.Text className="text-truncate">
                                                        Refreshing Mint
                                                    </Card.Text>
                                                    <Card.Title className="font-weight-bold">
                                                        30,000MMK
                                                    </Card.Title>
                                                    <Card.Text className="bg-warning w-50 text-center">
                                                        <i className="fas fa-star fa-xs"></i>600 Points
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevicesCarousel;
