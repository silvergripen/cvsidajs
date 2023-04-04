import React from "react"
import {Container, Card, Row, Col} from "react-bootstrap"
import "./Components.css"

export const HomeComponent = () => {
    return (
        <Container className={"w-75 h-100 pt-3"}>
            <Row className={"row align-items-start"}>
                <Col className="align-items-center" >
                     <h1 >Startsida</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum, ut temporibus voluptate omnis quaerat provident atque ipsam repellendus ullam praesentium laborum vel magni culpa sunt placeat amet qui asperiores eos cupiditate iusto iste dicta aspernatur. Tempora reprehenderit enim, id quibusdam accusamus voluptatum consectetur quaerat neque porro eos voluptas dolorem debitis veritatis alias corporis veniam quisquam quod? Eos ea iste est sit reiciendis ratione! Itaque sit magni dolorem corrupti reiciendis, voluptate voluptates perferendis molestiae repudiandae impedit laudantium aspernatur nisi aliquam.</p>
                     <Card className="container-half">
                        <Card.Img/>
                             <Card.Body>
                            <Card.Title>Example</Card.Title>
                         <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum, ut temporibus voluptate omni</Card.Text>
                     </Card.Body>
            </Card>
                </Col>
                 <Col className="margin-left" md={3}>
                     <h1 >Startsida</h1>
                      <p>Lorem ipsum dolor sit ame quibusdam accusamus voluptatum consectetur quaerat neque porro eos voluptas dolorem debitis veritatis alias corporis veniam quisquam quod? Eos ea iste est sit reiciendis ratione! Itaque sit magni dolorem corrupti reiciendis, voluptate voluptates perferendis molestiae repudiandae impedit laudantium aspernatur nisi aliquam.</p>
                      <Card>
                        <Card.Img/>
                        <Card.Body>
                            <Card.Title>Example</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum, ut temporibus voluptate omni</Card.Text>
                        </Card.Body>
            </Card>
                 </Col>
            </Row>
        </Container>
       
    )
}