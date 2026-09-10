import PlayerCard from "./PlayerCard";
import type { PlayerType } from "../../types/playerType";
import type { Dispatch, SetStateAction } from "react";

interface AvailablePlayersProps {
  players: PlayerType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectPlayers: PlayerType[];
  setSelectPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectPlayers,
  setSelectPlayers,
}: AvailablePlayersProps) => {
  return (
    <PlayerCard
      players={players}
      coin={coin}
      setCoin={setCoin}
      selectPlayers={selectPlayers}
      setSelectPlayers={setSelectPlayers}
    />
  );
};

export default AvailablePlayers;