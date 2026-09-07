import { use } from "react";
import type { PlayerType } from "../../types/playerType";
 interface Playerpromis{
        playersPromis :Promises<PlayerType[]>
 }

const Players = ({playersPromis}: Playerpromis) => {
    const players = use(playersPromis)
    console.log(players)
    return (
        <div>
            {
                players.map((player)=>{
                    key={player.id} player={player}
                })
            }
        </div>
    );
};

export default Players;