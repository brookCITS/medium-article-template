import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDictionary } from "../context/DictionaryContext";
import AuthorBio from "../UI/AuthorBio";
import Carousel from 'react-bootstrap/Carousel';


const ArticleDetails: React.FC = () => {
  const { dictionary, loading, error } = useDictionary();
  console.log(dictionary, loading, error)
  if (loading || !dictionary) return <div>Loading Article...</div>;

 

  return (
   
      <Container className="py-5 article">
        <section>
          <Row>
          <Col>
            {/** title  */}
            <h1>{dictionary.title}</h1>
          </Col>
        </Row>
        {/** Author bio */}
        <AuthorBio author={dictionary.author}/> 
        <Row>
          <Col>
            {/** Cover Image */}
          </Col>
        </Row>
        </section>
        {/** Carousel */}
        <section>
          <Carousel>
            {
              dictionary.images.map((item, id)=>(
                <Carousel.Item key={id}>
                  <img src={item} alt="Project content"/>
                </Carousel.Item>
              ))
            }
          </Carousel>
        </section>
        <section>
          {/** Introduction  */}
          <Row>
            <Col>
              <h3>What is this Project About?</h3>
              <p>{dictionary.paragraphs.introduction}</p>
            </Col>
          </Row>
          {/** Initial Assumptions */}
          <Row>
            <Col>
              <h3>My Initial Assumptions About the Project</h3>
              <p>{dictionary.paragraphs.start}</p>
            </Col>
          </Row>
          {/** Challenges */}
          <Row>
            <Col>
              <h3>Some Challenges I Faced During This Project</h3>
              <p>{dictionary.paragraphs.challenges}</p>
            </Col>
          </Row>
          {/** Growth */}
          <Row>
            <Col>
              <h3>What I've Learned Through This Project</h3>
              <p>{dictionary.paragraphs.growth}</p>
            </Col>
          </Row>
        </section>
      </Container>
  );
};

export default ArticleDetails;
