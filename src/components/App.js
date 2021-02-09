import '../App.css';
import Welcome from './Welcome'
import { playerData } from '../data/playerdata'
import PlayerList from './PlayerList'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div style={{margin: " -10px 50px 10px 50px"}}>
      <div>
        <Welcome />
          <Row>
            <PlayerList players={playerData} />
          </Row>
      </div>
    </div>
  );
}

export default App;
