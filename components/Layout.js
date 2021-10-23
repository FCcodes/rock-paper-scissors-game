import React from "react"
import styles from "../styles/Home.module.css"

//react
import { useState, useContext } from "react"

//next js
import Image from "next/image"

//game state
import { GameContext } from "./GameState"

//material-ui
import { Grid, Box, Paper, Button, Typography, Modal } from "@mui/material"

const Layout = ({ children }) => {
  const { gameStat } = useContext(GameContext)
    
  const [ open, setOpen ] = useState(false)

  return (
    <>
      <Grid container sx={{ py: { phone: 5 } }}>
        <Grid item phone={12} container sx={{ mb: 6 }}>
          <Paper
            elevation={0}
            sx={{
              px: 3,
              py: 2,
              mx: "auto",
              width: { phone: "80%", tablet: "70%", laptop: "50%" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px",
              border: "2px solid black",
            }}
          >
            <Typography variant="h1" sx={{ width: { phone: "20%" } }}>
              Rock Paper Scissors
            </Typography>

            <Paper elevation={0}>
              <Typography
                variant="h3"
                align="center"
                sx={{ mb: 1, letterSpacing: "1px" }}
              >
                SCORE
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  fontWeight: "600",
                  fontSize: { phone: "3rem" },
                  fontWeight: "600",
                }}
              >
                {gameStat.score}
              </Typography>
            </Paper>
          </Paper>
        </Grid>

        <Grid item phone={12} className="pageContent" component="section"sx={{mb: 5}}>
          {children}
        </Grid>

        <Grid
          item
          phone={12}
          className="rules"
          component="section"
          sx={{ p: 3, display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(true)
            }}            
          >
            <Typography variant="body2">RULES</Typography>
          </Button>

          <Modal
            open={open}
            onClose={() => {
              setOpen(false)
            }}
          >
            <Paper
              elevation={0}
              sx={{
                py: 6,
                px: 3,
                width: "40%",                
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Box component="img" src="./image-rules.svg" alt="" sx={{width: '100%'}}/>
            </Paper>
          </Modal>
        </Grid>
      </Grid>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Layout
