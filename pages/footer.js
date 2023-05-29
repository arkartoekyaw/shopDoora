import React from "react";
import Icon from '@mdi/react';
import { mdiShieldLockOpenOutline } from '@mdi/js';
import { mdiAutorenew } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiCopyright } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <div className="container">
            <div className="row justify-content-start">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <h6>Customer Service</h6>
                    <ul style={{listStyle: "none", padding: 0}}>
                        <li><Icon path={mdiShieldLockOpenOutline} size={1} /> Term and Privacy Policy</li>
                        <li><Icon path={mdiAutorenew} size={1} /> Return Policy</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <h6>Language</h6>
                    <div>
                        <label>
                            <input type="radio" name="language" value="myanmar" /> Myanmar (Unicode)
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="language" value="zawgyi" /> Myanmar (Zawgyi)
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="language" value="english" /> Englsih
                        </label>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <h6>Contact US</h6>
                    <ul style={{listStyle: "none", padding: 0}}>
                        <li><Icon path={mdiMapMarker} size={1} />Lay Daunt Kan Main Road, Cashmere  Stop. Near Zawana, Thingangyn Tsp, Yangon.</li>
                        <li><Icon path={mdiPhone} size={1} /> 09458489458</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <h6>Download Our App</h6>
                    <img src="qr.jpg" className="img-fluid" alt="QR Code" style={{maxWidth: 150}}/>
                </div>
            </div>

            <div className="row justify-content-start">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <h6>Payment</h6>
                    <img src="kpay.webp" className="img-fluid" alt="QR Code" style={{maxWidth: 50}}/>
                    <img src="wave.jpg" className="img-fluid" alt="QR Code" style={{maxWidth: 50}}/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                    <h6>Follow Us On</h6>
                    <ul className="horizontal-list">
                        <li><a href="https://www.facebook.com/arkartoekyaw?mibextid=ZbWKwL">
                            <Icon path={mdiFacebook} size={1.5} />
                        </a></li>
                        <li><a href="https://instagram.com/arkartoekyaw?igshid=MzNlNGNkZWQ4Mg=="><Icon path={mdiInstagram} size={1.5} /></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/arkartoekyaw/"><Icon path={mdiLinkedin} size={1.5} /></a></li>
                        <li><a href="https://web.whatsapp.com"><Icon path={mdiWhatsapp} size={1.5} /></a></li>

                        <li><a href="https://twitter.com/elonmusk"></a><Icon path={mdiTwitter} size={1.5} /></li>
                    </ul>
                </div>
            </div>
            <p className="text-center mt-3"> <Icon path={mdiCopyright} size={1} /> Copyright 2023 C by D Co.,Ltd. All right reserved.</p>
        </div>
    );
}
