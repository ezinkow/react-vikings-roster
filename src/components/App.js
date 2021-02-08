import '../App.css';
import Welcome from './Welcome'
import {playerData} from '../data/playerdata'
import PlayerList from './PlayerList'

function App() {
  return (
    <div>
      <div>
        <Welcome />
        <PlayerList players={playerData} />
      </div>
    </div>
  );
}

export default App;
