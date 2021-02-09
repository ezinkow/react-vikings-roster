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
                <Card bg='warning' style={{borderRadius: "20px"}}>
                    <Card.Img variant="top" src={props.image} style={{ width: "100%", height: "200px", display: "block", marginBottom: "10px", borderRadius: "20px"}}/>
                    <Card.Title><h3 style={{ color: "purple", textAlign: "center"}}>{props.firstName} {props.lastName}</h3></Card.Title>
                    <Card.Body>
                        <Card.Text>
                            <h3>Player Jersey: <span style={{ color: "purple" }}>#{props.jerseyNumber}</span></h3>
                            <h3>Hobbies: </h3><p><span style={{ color: "purple" }}>{hobbies}</span></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Col>

    )

}

export default Player