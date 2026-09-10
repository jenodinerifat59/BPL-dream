import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../types/playerType";


interface SelectedPlayerProps {
  selectPlayers: PlayerType[];
  setSelectPlayers: Dispatch<SetStateAction<PlayerType[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
  selectPlayers,
  setSelectPlayers,
  coin, setCoin
}: SelectedPlayerProps) => {
  console.log("Selected Players:", selectPlayers);

const handleRemove = (player:PlayerType)=>{
  setSelectPlayers((priv)=> priv.filter((p)=> p.id !== player.id))

  setCoin(coin + player.price)
}
 if (selectPlayers.length === 0) {
    return (
      <h2 className="p-6 text-2xl font-bold text-center">
        Player is not available
      </h2>
    );
  }
  return (
    <div className="p-6">
      <h2 className="mb-5 text-2xl font-bold">
        Selected Players ({selectPlayers.length})
      </h2>

      {selectPlayers.map((player) => (
        <div
          key={player.id}
          className="mb-4 flex items-center justify-between rounded-xl bg-white p-4 shadow"
        >
          <div className="flex items-center gap-4">
            <img
              src={player.img}
              alt={player.name}
              className="h-16 w-16 rounded-full object-cover"
            />

            <div>
              <h3 className="font-bold">{player.name}</h3>
              <p>{player.position}</p>
              <p>${player.price}</p>
            </div>
          </div>

          <button
            onClick={() => handleRemove(player)}
            className="rounded-lg bg-red-500 px-4 py-2 text-white"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;