import React, { useState } from "react"

export const GameContext = React.createContext()

const GameState = ({ children }) => {

  const options = [
    {
      name: "paper",
      path: "./icon-paper.svg",
      opponent: "scissors",
    },
    {
      name: "scissors",
      path: "./icon-scissors.svg",
      opponent: "rock",
    },
    {
      name: "rock",
      path: "./icon-rock.svg",
      opponent: "paper",
    },
  ]

  const [playerOption, setPlayerOption] = useState({
    name: "",
    path: "",
    opponent: ""
  })
  const [computerOption, setComputerOption] = useState({
    name: "",
    path: "",
    opponent: ""
  })
  const [selected, setSelected] = useState(false)
  const [gameStat, setGameStat] = useState({
    victory: null,
    score: 0,
  })

  function winner() {
    setGameStat((prev) => ({ victory: true, score: prev.score + 5 }))
  }

  function updatePlayerOption(option) {
    setSelected(true)
    setPlayerOption(option)
  }

  function updateComputerOption(option) {
    setComputerOption(option)
    
  }

  function loser() {
    setGameStat((prev) => ({ victory: false, score: prev.score - 1 }))
  }

  function unchanged() {
    setGameStat({
      victory: false,
      score: 0,
    })
  }

  function playAgain() {
    setSelected(false)
  }

  return (
    <>
      <GameContext.Provider
        value={{
          options,
          playerOption,
          selected,
          gameStat,
          setSelected,
          winner,
          updatePlayerOption,
          updateComputerOption,
          loser,
          unchanged,
          playAgain
        }}
      >
        {children}
      </GameContext.Provider>
    </>
  )
}

export default GameState
