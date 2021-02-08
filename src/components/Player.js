import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function Player(props) {
    const hobbyList = props.hobbies.map(hobby => {
        return <li>{hobby}</li>
    })

    const hobbies = props.hobbies.length < 1 ? "No hobbies listed"
        : hobbyList

    return (
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <CardGroup style={{ width: '18rem' }}>
                        <Card bg='warning'>
                            <Card.Img variant="top" src={props.image} />
                            <Card.Title><h3><span style={{ color: "purple" }}>{props.firstName} {props.lastName}</span></h3></Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    <h3>Player Jersey: <span style={{ color: "purple" }}>{props.jerseyNumber}</span></h3>
                                    <h3>Hobbies: <span style={{ color: "purple" }}>{hobbies}</span></h3>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    )

}

export default Player