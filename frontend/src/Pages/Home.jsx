import React from 'react'
import './../styles/home.css'

import HoverVideoPlayer from 'react-hover-video-player';
import PausedOverlay from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import herovideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/subtitle'

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

const Home = () => {
  return (
    <>
    <section>
      <Container>
         <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className='hero__subtitle d-flex align-items-center'>
              <Subtitle subtitle={"So Sri Lanka"}/>
              {/* <img src={worldImg} alt='' draggable="false"/> */}
              </div>
              <h1>
                Travelling opens the door to creating memories....{""}
              </h1>
              <p>Sri Lanka, the "Pearl of the Indian Ocean," offers stunning beaches, lush tea plantations, and rich wildlife. Visitors can relax on beaches like Unawatuna, explore the scenic highlands of Ella, and go on safaris in Yala National Park. The island also boasts cultural treasures like the Temple of the Tooth in Kandy and the Sigiriya Rock Fortress, making it a perfect blend of nature and heritage.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box'>
              <img src={heroImg} alt='' draggable="false"/>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box'>
            <HoverVideoPlayer
                videoSrc={herovideo}
                draggable="false"/>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box'>
              <img src={heroImg02} alt='' draggable="false"/>
            </div>
          </Col>
          <SearchBar/>
         </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <Subtitle subtitle={"What we serve"}/>
             <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/* Featured tour section */}
     <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <Subtitle subtitle={"Expolore"}/>
            <h2 className="featured__tour-title">Out featured tours</h2>
          </Col>
        </Row>
      </Container>
     </section>
    </>
  )  
}

export default Home














