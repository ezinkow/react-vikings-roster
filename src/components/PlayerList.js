import Player from './Player'

function PlayerList(props) {
    const allPlayers = props.players.map(player => {
        return <Player
        firstName={player.firstName}
        lastName={player.lastName}
        jerseyNumber={player.jerseyNumber}
        hobbies={player.hobbies}
        image={player.image}
        />
    })
    console.log('allplayers', props.players)
    return (allPlayers)
}

export default PlayerList