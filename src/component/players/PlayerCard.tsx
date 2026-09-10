import { FaUser, FaMapMarkerAlt, FaFutbol } from "react-icons/fa";
import type { PlayerType } from "../../types/playerType";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface PlayerCardProps {
  players: PlayerType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectPlayers: PlayerType[];
  setSelectPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

const PlayerCard = ({
  players,
  coin,
  setCoin,
  selectPlayers,
  setSelectPlayers,
}: PlayerCardProps) => {
  const handelClick = (player: PlayerType) => {
    // Already selected?
    if (selectPlayers.some((p) => p.id === player.id)) {
      return;
    }

    // Not enough coin
    if (coin < player.price) {
      toast.error("Your coin is low. Please recharge");
      return;
    }

    // Deduct coin
    setCoin((prev) => prev - player.price);

    // Add player
    setSelectPlayers((prev) => [...prev, player]);

    toast.success(`${player.name} is added successfully`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {players.map((player) => {
        const isSelected = selectPlayers.some(
          (selectedPlayer) => selectedPlayer.id === player.id
        );

        return (
          <div
            key={player.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-lg
            transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
            border border-gray-100"
          >
            <figure className="relative h-64 overflow-hidden">
              <img
                src={player.img}
                alt={player.name}
                className="h-full w-full object-cover transition duration-500
                group-hover:scale-110"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t
                from-black/70 via-black/10 to-transparent"
              />

              <div
                className="absolute right-4 top-4 rounded-full
                bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-md"
              >
                ${player.price}
              </div>

              <div className="absolute bottom-4 left-5 text-white">
                <h2 className="flex items-center gap-2 text-2xl font-bold">
                  <FaUser className="text-blue-400" />
                  {player.name}
                </h2>
              </div>
            </figure>

            <div className="p-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span className="font-medium">{player.origin}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <FaFutbol className="text-blue-500" />
                  <span className="font-medium">{player.position}</span>
                </div>
              </div>

              <div className="my-4 border-t border-gray-200" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Player Price</p>

                  <h3 className="text-2xl font-bold text-gray-900">
                    ${player.price}
                  </h3>
                </div>

                <button
                  onClick={() => handelClick(player)}
                  disabled={isSelected}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500
                  px-5 py-3 font-semibold text-white shadow-md
                  transition duration-300 hover:from-blue-700 hover:to-cyan-600
                  hover:shadow-lg active:scale-95
                  disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSelected ? "Selected" : "Choose Player"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerCard;