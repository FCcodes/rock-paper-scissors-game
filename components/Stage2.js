import React, { useContext, useState, useEffect } from "react"

//material-ui
import { Grid, Box, Typography, Avatar, Paper, Button } from "@mui/material"

//gameState
import { GameContext } from "../components/GameState"

const Stage2 = () => {
    

    const [computerOption, setComputerOption] = useState({
        name: "",
        path: "",
        opponent: "",
    })

    const {
        playerOption,
        winner,
        loser,
        options,
        updateComputerOption,
        gameStat,
        playAgain,
        unchanged
    } = useContext(GameContext)

    function theDesider() {
        const index = Math.floor(Math.random() * 3)
        const option = options[index]
        setComputerOption({
            name: option.name,
            path: option.path,
            opponent: option.opponent,
        })
    }

    useEffect(() => {
        if (computerOption.name !== "") {
            const opponent = options.filter(
                (option) => option.name === computerOption.opponent
            )

            console.log(opponent[0].name)
            console.log(playerOption.name)

            if (opponent[0].name === playerOption.name) {
                winner()
            } else if (playerOption.name === computerOption.name) {
                unchanged()
            } else {
                loser()
            }

            updateComputerOption(computerOption)

            return
        }

        return
    }, [computerOption])

    useEffect(() => {
        setTimeout(() => {
            theDesider()
        }, 1500)

        return
    }, [])

    return (
      <>
        <Grid container>
          <Grid item phone={4}>
            <Paper elevation={0}>
              <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                YOU PICKED
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Avatar
                  src={playerOption.path}
                  sx={{
                    mx: "auto",
                    my: 5,
                    p: 3,
                    backgroundColor: "rgb(255, 255, 255)",
                    width: { phone: "15vw" },
                    height: { phone: "15vw" },
                    border: "15px solid black",
                  }}
                />
              </Box>
            </Paper>
          </Grid>

          <Grid item phone={4}>
            {gameStat.victory !== null ? (
              <>
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItem: "center",
                  }}
                >
                  <Typography variant="h2" align="center" sx={{ mb: 3 }}>
                    {gameStat.victory === true ? "Winner" : "Loser"}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => {
                      playAgain()
                    }}
                  >
                    Back
                  </Button>
                </Paper>
              </>
            ) : (
              <></>
            )}
          </Grid>

          <Grid item phone={4}>
            <Paper elevation={0}>
              <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                HOUSE PICKED
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <Avatar
                  src={computerOption.path}
                  sx={{
                    mx: "auto",
                    my: 5,
                    p: 3,
                    backgroundColor: "rgb(255, 255, 255)",
                    width: { phone: "15vw" },
                    height: { phone: "15vw" },
                    border: "15px solid black",
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </>
    )
}

export default Stage2
