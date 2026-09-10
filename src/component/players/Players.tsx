import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../types/playerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface Playerpromis {
  playersPromis: Promise<PlayerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromis, coin, setCoin }: Playerpromis) => {
  const players = use(playersPromis);

  const [btnType, setBtnType] = useState<"available" | "selected">("available");

  const handelClick = (type: "available" | "selected") => {
    setBtnType(type);
  };

  const [selectPlayers, setSelectPlayers] = useState<PlayerType[]>([]);

  return (
    <div>
      <div className="flex justify-between container">
        <h1>
          {btnType === "available"
            ? "Available Players"
            : "Selected Players"}
        </h1>

        <div>
          <button
            onClick={() => handelClick("available")}
            className={`btn ${
              btnType === "available" ? "btn-success" : ""
            } rounded-r-none`}
          >
            Available
          </button>

          <button
            onClick={() => handelClick("selected")}
            className={`btn ${
              btnType === "selected" ? "btn-success" : ""
            } rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>

      {btnType === "available" ? (
  <AvailablePlayers
    players={players}
    coin={coin}
    setCoin={setCoin}
    selectPlayers={selectPlayers}
    setSelectPlayers={setSelectPlayers}
  />
) : (
  <SelectedPlayers
    selectPlayers={selectPlayers}
    setSelectPlayers={setSelectPlayers}
    coin={coin}
    setCoin={setCoin}
  />
)}
    </div>
  );
};

export default Players;