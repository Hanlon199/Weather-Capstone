import React from 'react';
import york from '../Assets/about/york.png';
import yorkMap from '../Assets/about/yorkMap.png';
import carmel from '../Assets/about/carmel.png'
import mountCarmelMap2 from '../Assets/about/mountCarmelMap2.png'
import digiovanni from '../Assets/about/digiovanni.png'
import christov from '../Assets/about/christov.png'
import melkis from '../Assets/about/melkis.png'
import kevin from '../Assets/about/kevin.png'
import janine from '../Assets/about/janine.png'
import brian from '../Assets/about/brian.png'
import hanlon from '../Assets/about/hanlon.jpg'
import duffy from '../Assets/about/duffy.gif'
import { Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
const background ={
    backgroundColor: '#0c2340'
}

const imgMargin5 = {
    margin: 5
}
const aboutText = {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 0,
}
const aboutHeader = {
    fontSize: 14
}
const holder = {
    backgroundColor: '#fff',
    color: '#000',
    border: '2px solid #418FDE',
    borderRadius: 20,
    margin: 20,
    textAlign: 'center',
    paddingLeft: 15,
    paddingTop: 30
}

const img ={
    height:155,
    width:155,
}

export default function About() {
    return(
        <div style={holder}>
        <Row>
            <Col>
                <h5 style={aboutHeader}>
                    <strong>The Weather Stations</strong>
                </h5>
            </Col>
            <div>
                <Row>
                <Col lg={4}>
                <figure>
                    <img style={imgMargin5} src={york}></img>
                    <img style={imgMargin5} src={yorkMap}></img>
                    <figcaption class="caption">York Hill</figcaption>
                </figure>
                </Col>
                <Col lg={4}>
                <p style={aboutText}>The Quinnipiac weather stations were installed in 2016 by the Quinnipiac Weather Service (QWS) team. The two
                    weather stations are located on top of two buildings on the Mount Carmel and York Hill campuses at Quinnipiac
                    University. The Mount Carmel weather station is located on top of the Mountainview Residence Hall (shown in
                    the images on the right). The York Hill weather station is located on top of the Eastview Residence Hall (shown
                    in the images on the left). The weather stations feed weather data to the website every 30 seconds for the
                    most up-to-date information.</p>
                </Col>
                <Col lg={4}>
                <figure>
                    <img style={imgMargin5} src={carmel}></img>
                    <img style={imgMargin5} src={mountCarmelMap2}></img>
                    <figcaption class="caption">Mount Carmel</figcaption>
                </figure>
                </Col>
                </Row>
            </div>
        </Row>
    
    
        <Row>
            <Col lg={12}>
            <h5 class="aboutHeader">
              <strong>The Team</strong>
            </h5>
            </Col>
        </Row>
        <Row>
            <Col lg={4}>
            <figure>
                <Image style={imgMargin5} roundedCircle src={digiovanni}/>
                <figcaption class="caption">Kimberly DiGiovanni</figcaption>
            </figure>
            </Col>
            <Col lg={4}>
            <p style={aboutText}>The QWS project started as QUIP-RS research project at Quinnipiac University as a collaboration between a software
                engineering student, a software engineering professor, and a civil engineering professor. The software engineering
                student further developed this applicaiton as part of his capstone project. The project was then relaunched
                by a pair of software engineering students who aimed to redesign the website in order to create a better user
                experience for the students, faculty, and facilities at Quinnipiac University.</p>
            </Col>
            <Col lg={4}>
            <figure>
                <Image style={imgMargin5} roundedCircle src={christov}/>
                <figcaption class="caption">Stefan Christov</figcaption>
            </figure>
            </Col>
        </Row>

        <Row>
            <Col lg={2}>
            <figure>
                <Image />
                <Image style={imgMargin5} roundedCircle src={melkis}/>
                <figcaption class="caption">Melkis Espinal</figcaption>
            </figure>
            </Col>
            <Col lg={2}>
            <figure>
                <Image style={imgMargin5} roundedCircle src={kevin}/>
                <figcaption class="caption">Kevin Bloomquist</figcaption>
            </figure>
            </Col>
            <Col lg={2}>
            <figure>
                <Image style={imgMargin5} roundedCircle src={janine}/>
                <figcaption class="caption">Janine Jay</figcaption>
            </figure>
            </Col>
            <Col lg={2}>
            <figure>
                <Image style={imgMargin5} roundedCircle src={brian}/>
                <figcaption class="caption">Brian Carducci</figcaption>
            </figure>
            </Col>
            <Col lg={2}>
            <figure>
                <Image style={imgMargin5, img} roundedCircle src={hanlon}/>
                <figcaption class="caption">Ryan Hanlon</figcaption>
            </figure>
            </Col>
            <Col lg={2}>
            <figure>
                <Image style={imgMargin5, img} roundedCircle src={duffy}/>
                <figcaption class="caption">John Eamon Duffy</figcaption>
            </figure>
            </Col>
        </Row>
    
        <Row>
          <Col>
            <p class="aboutCreditTexts">The Weather Icons used in this project were created and maintained by Erik Flowers. v1.0 artwork by Lukas Bischoff.
              v1.1 - 2.0 artwork by Erik Flowers</p>
          </Col>
        </Row>
      </div>
    );
}