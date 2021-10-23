import React, { useContext } from "react"

//game State
import { GameContext } from './GameState'

//material-ui
import { Grid, Avatar, Box, IconButton } from "@mui/material"

const Stage1 = () => {

 const { updatePlayerOption, options } = useContext(GameContext)


  async function handleClick(option) {

    await updatePlayerOption(option)

    return
  }


  return (
    <>
      <Grid container>
        <Grid item phone={6} className="Paper">
          <Box>            
            <Avatar
              id="paper"
              src="./icon-paper.svg"
              sx={{
                ml: "auto",
                mr: 3,
                my: 5,
                p: 3,
                backgroundColor: 'rgb(255, 255, 255)',
                width: { phone: '15vw' },
                height: { phone: '15vw' },
                border: '15px solid black',
                cursor: 'pointer'
              }}

              onClick={() => { handleClick(options[0]) }}
            />
          </Box>
        </Grid>

        <Grid item phone={6} className="Scissors">
          <Box>            
            <Avatar
              id='scissors'
              src="./icon-scissors.svg"
              sx={{
                mr: 'auto',
                ml: 3,
                my: 5,
                p: 3,
                backgroundColor: 'rgb(255, 255, 255)',
                width: { phone: '15vw' },
                height: { phone: '15vw' },
                border: '15px solid black',
                cursor: "pointer"
              }}
              onClick={()=>{ handleClick(options[1]) }}
            />
          </Box>
        </Grid>

        <Grid item phone={12} className="Rock">
          <Box>            
            <Avatar
              id="rock"
              src="./icon-rock.svg"
              sx={{
                mx: 'auto',               
                p: 3,
                backgroundColor: 'rgb(255, 255, 255)',
                width: { phone: '15vw' },
                height: { phone: '15vw' },
                border: '15px solid black',
                cursor: "pointer"
              }}
              onClick={()=>{ handleClick(options[2]) }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Stage1
