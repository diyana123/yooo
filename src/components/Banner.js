import { useState,useEffect } from "react";
import {Col, Container,Row } from "react-bootstrap";

import 'animate.css';
import TrackVisibility from "react-on-screen";




export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  




    return(
        <section className="banner" id='home'>
            <Container>
                <Row className ="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__wobble animate__delay-2s" : ""}>
                        <span className="tagline">Welcome to my portofolio</span>
                        <h1>{`Hi I'm Diyana `}<span className ="wrap">{text}</span></h1>
                        <p>blah bleh blah bleh blahhhhhhhhhhhhhhhhhh</p>
                        <button onClick ={() => console.log('connect')}>Let's connect <i class="bi bi-arrow-right-circle"size={25}/></button>
                        </div>}
                     </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={require('../assets/img/kaw.png')} alt="bleh"/>
                    </Col>
                </Row>
                        
            </Container>
        </section>
    )

}