import { Suspense, useState } from "react"
import Baner from "./component/Baner"
import Nav from "./component/Nav"
import Players from "./component/players/Players"
import "./index.css"
import type { PlayerType } from "./types/playerType"
const playersFatch = async():Promise<PlayerType>=>{
  const res = await fetch('/players.json')
  const data = await res.json()
  return data;
}
const App = () => {
  // const playersPromis = playersFatch()
  const [playersPromis] = useState(()=>playersFatch())
   const [coin,setCoin] = useState(50000000)
  return (
    <div className="container mx-auto">
      <Nav coin={coin}/>
      <Baner/>
      <Suspense fallback="lodding...............">
              <Players playersPromis={playersPromis} coin={coin} setCoin={setCoin}/> 
      </Suspense>
    </div>
  )
}

export default App
