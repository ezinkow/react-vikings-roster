import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'


function Player(props) {
    const hobbyList = props.hobbies.map(hobby => {
        return <li>{hobby}</li>
    })

    const hobbies = props.hobbies.length < 1 ? "No hobbies listed"
        : hobbyList

    return (
        <Col>
            <CardGroup>
                <Card bg='warning'>
                    <Card.Img variant="top" src={props.image} style={{ width: "100%", height: "200px", display: "block", margin: "auto"}}/>
                    <Card.Title><h3><span style={{ color: "purple" }}>{props.firstName} {props.lastName}</span></h3></Card.Title>
                    <Card.Body>
                        <Card.Text>
                            <h3>Player Jersey: <span style={{ color: "purple" }}>{props.jerseyNumber}</span></h3>
                            <h3>Hobbies: </h3><p><span style={{ color: "purple" }}>{hobbies}</span></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Col>

    )

}

export default Player