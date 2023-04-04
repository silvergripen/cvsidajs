import { Container, Card} from "react-bootstrap";
import '../Css/design.css'


export function Profile(props){
    let message = null
    if(props.id === 580364387){
        message = 'This is a sql database where i fetch with c# and print it in to the console'
    }
    else if (props.id === 565891154){ //gruppprojekt
        message = 'This is a group project where we made a bank in the console in c#'
    }
    else if (props.id === 557485298){ // collectionGenerics
        message = 'This is a test with collection generics in c#'
    }
    else if (props.id === 554893800){ //Polymorphism Övning
        message = 'This is a test for polymorphism in c#'
    }
    else if (props.id === 552350850){ //arvuppgift
        message = 'This is a test for inheritance in c#'
    }
    else if (props.id === 545482837){ //cirklecalc
        message = 'This is a test for math in c#'
    }
    return (
        
        <Container className="container_design">
            <div className="cards_container">
                <Card  style={{ width: '28rem' }}>
                    <Card.Body className="card_design">
                        <Card.Title className="text_align">{props.owner.login}</Card.Title>
                            <Card.Subtitle className="text_align">{props.name}</Card.Subtitle>
                                <Card.Text className="text_align">
                                {message && <p>{message}</p>}
                                </Card.Text>
                            <Card.Link href={props.url}>Github</Card.Link>
                    
                    </Card.Body>
                </Card>
            </div>
       
            <ul>
                {props.topics.map((topic, index) => (
                    <li key={index}> {topic} </li>
                ))}
            </ul>
        </Container>
    )
}