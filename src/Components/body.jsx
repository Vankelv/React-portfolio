import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import { Container, Row, Col } from 'react-bootstrap';
import { TiBrush } from 'react-icons/ti';
import { FiSettings } from 'react-icons/fi';
import { MdWeb } from 'react-icons/md';

function Body() {
  const BodyRef = useRef();

  return (
    <section>
      <Container>
        <Row>
          <Col md={4}>
            <div className="card  text-white rounded">
              <div className="card-body">
              <MdWeb size={90}
        style={{
          color: '#361C29',
          backgroundColor: '#361C29',
          borderRadius: '50%',
          padding: '20px'
        }}/> 
                <h1 className="card-title">Website Design and Development</h1>
                <ul>
                  <li>Custom website design</li>
                  <li>Responsive design</li>
                  <li>Website development</li>
                  <li>Website maintenance</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card  text-white rounded">
              <div className="card-body">
              <TiBrush   size={90}
        style={{
          color: '#7BD388',
          backgroundColor: '#1C2C1F',
          borderRadius: '50%',
          padding: '20px'
        }}/>
                <h1 className="card-title"> Brand Identity Design</h1>
                <ul>
                  <li>Logo design</li>
                  <li>Business card design</li>
                  <li>Creative social media posts</li>
                  <li>Brand guidelines</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card text-white rounded">
              <div className="card-body">
              <FiSettings size={90}
        style={{
          color: '#7979F1',
          backgroundColor: '#252543',
          borderRadius: '50%',
          padding: '20px'
        }}/>
                <h1 className="card-title"> IT Support</h1>
                <ul>
                  <li>Computer troubleshooting</li>
                  <li>Software installation</li>
                  <li>Network setup and configuration</li>
                  <li>Data backup and recovery</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Body;
