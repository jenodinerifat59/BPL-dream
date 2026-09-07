import { Suspense } from "react"
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
  const playersPromis = playersFatch()
  return (
    <div className="container mx-auto">
      <Nav/>
      <Baner/>
      <Suspense fallback="lodding...............">
              <Players playersPromis={playersPromis}/> 
      </Suspense>
    </div>
  )
}

export default App
