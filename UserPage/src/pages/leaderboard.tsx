import Head from 'next/head'
import { Header, CheckBox, UserBar, MyPosition } from '../../Components'
import { useState } from 'react'
import Select, { StylesConfig } from "react-select";
import chroma from 'chroma-js';
import { ColourOption } from '@/types/data';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Leaderboard = () => {
    const [roleSelected, setRoleSelected] = useState("tout")
    const [stop3, setStop3] = useState(false)

    const roleoptions = [{
        value: "tout",
        label: "Tout",
        color: "#449D44",
      },
      {
        value: "kill",
        label: "Kill",
        color: "#17ead9",
      },
      {
        value: "death",
        label: "Death",
        color: "#0052CC",
      },
      {
        value: "distanceparcourue",
        label: "Distance parcourue",
        color: "#fccf31",
      },
      {
        value: "tempdejeu",
        label: "Temps de jeu",
        color: "#f02fc2",
      }]

    const dot = (color = 'transparent') => ({
        alignItems: 'center',
        display: 'flex',

        ':before': {
          backgroundColor: color,
          borderRadius: 10,
          content: '" "',
          display: 'block',
          marginRight: 8,
          height: 10,
          width: 10,
        },
    })

    const colourStyles: StylesConfig<ColourOption> = {
      control: (styles) => ({ ...styles, backgroundColor: 'white', cursor: 'pointer' }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color)
        return {
          ...styles,
          backgroundColor: isDisabled
            ? undefined
            : isSelected
            ? data.color
            : isFocused
            ? color.alpha(0.3).css()
            : undefined,
          color: isDisabled
            ? '#ccc'
            : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color,
          cursor: isDisabled ? 'not-allowed' : 'pointer',

          ':active': {
            ...styles[':active'],
            backgroundColor: !isDisabled
              ? isSelected
                ? data.color
                : color.alpha(0.3).css()
              : undefined,
          },
        }
      },
      input: (styles) => ({ ...styles, ...dot() }),
      placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
      singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    }

    const userStats = [{
        name: "Tofu",
        imgSrc: "https://api.dicebear.com/7.x/pixel-art-neutral/png?seed=Tofu",
        kill: 100,
        death: 10,
        distanceparcourue: 1000,
        tempdejeu: 100,
    },
    {
        name: "Lucas",
        imgSrc: "https://api.dicebear.com/7.x/pixel-art-neutral/png?seed=Lucas",
        death: 1000,
        kill: 0,
        distanceparcourue: 100,
        tempdejeu: 100,
    },
    {
        name: "Baptiste",
        imgSrc: "https://api.dicebear.com/7.x/pixel-art-neutral/png?seed=Baptiste",
        death: 50,
        kill: 200,
        distanceparcourue: 100,
        tempdejeu: 50,
    },
    {
        name: "Enzo",
        imgSrc: "https://api.dicebear.com/7.x/pixel-art-neutral/png?seed=Enzo",
        death: 100,
        kill: 10,
        distanceparcourue: 100,
        tempdejeu: 500,
    },
    {
        name: "Léo",
        imgSrc: "https://api.dicebear.com/7.x/pixel-art-neutral/png?seed=Léo",
        death: 80,
        kill: 100,
        distanceparcourue: 100,
        tempdejeu: 100,
    },
    {
        name: "Paul",
        imgSrc: "https://api.dicebear.com/7.x/pixel-art-neutral/png?seed=Romain",
        death: 100,
        kill: 100,
        distanceparcourue: 100,
        tempdejeu: 100,
    },
    {
        name: "Célian",
        imgSrc: "https://api.dicebear.com/7.x/pixel-art-neutral/png?seed=Célian",
        death: 100,
        kill: 100,
        distanceparcourue: 100,
        tempdejeu: 100,
    },
    {
        name: "Tristan",
        imgSrc: "https://api.dicebear.com/7.x/pixel-art-neutral/png?seed=Tristan",
        death: 100,
        kill: 100,
        distanceparcourue: 100,
        tempdejeu: 100
    }]

    const handleSendStats = async () => {
      const res = await fetch('/api/webhook', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userStats }),
      })

      const result = await res.json()
      // console.log(result)
    }

    return (
        <main className='leaderboard'>
            <Head>
                <title>Leaderboard | Tofu</title>
                <meta name="description" content="Tofu Leaderboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <h1 className='title'>leaderboard</h1>

            <span className='desc'>
                Retrouve ici le classement des joueurs en fonction de leurs statistiques.
            </span>

            <Button className='btnSend' variant="contained" endIcon={<SendIcon />} onClick={() => handleSendStats()}>
              Envoyer sur Discord
            </Button>

            <Select
                className="selects"
                value={roleoptions.filter((obj) => obj.value === roleSelected)}
                options={roleoptions}
                styles={colourStyles}
                isSearchable={false}
                onChange={(e: any) => {
                  setRoleSelected(e.value)
                }}
            />

            <div className="checkbox">
                <CheckBox
                    title={
                        stop3 ? "Afficher les 3 premiers" : "Afficher tous les joueurs"
                    }
                    checked={stop3}
                    onChange={() => setStop3(!stop3)}
                />
            </div>

            <UserBar userStats={userStats} reducer={roleSelected} stop3={stop3} />

            <div className="test">
                <MyPosition userStats={userStats[0]} allUsers={userStats} />
            </div>
        </main>
    )
}

export default Leaderboard
