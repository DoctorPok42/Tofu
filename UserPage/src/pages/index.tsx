import Head from 'next/head'
import { Header, Item, UserCard } from '../../Components'
import UserType from '@/types/userCard'
import Area from '../../Components/Area'

const Home = () => {
  const user: UserType = {
    name: 'John Doe',
    grade: "MVP",
    rank: "Silver",
    timePlayed: 100,
  }

  const block = [{
    title: 'Anvil',
    imgSrc: '/icon/1.png',
    titleColor: '#f5b301',
    number: 1245,
  },
  {
    title: 'Beacon',
    imgSrc: '/icon/2.png',
    number: 989,
  },
  {
    title: 'Brick',
    imgSrc: '/icon/3.png',
    number: 590,
  },
  {
    title: 'Cactus',
    imgSrc: '/icon/4.png',
    number: 473,
  },
  {
    title: 'Carpet',
    imgSrc: '/icon/5.png',
    number: 309,
  },
  {
    title: 'Clay',
    imgSrc: '/icon/6.png',
    number: 178,
  },
  {
    title: 'Chest',
    imgSrc: '/icon/7.png',
    number: 90,
  },
  {
    title: 'Cocoa',
    imgSrc: '/icon/8.png',
    number: 87,
  },
  {
    title: 'Concrete',
    imgSrc: '/icon/9.png',
    number: 5,
  },
  {
    title: 'Dirt',
    imgSrc: '/icon/10.png',
    number: 5,
  },
]


    var dataSample1 = Array.from({ length: 31 }, () => ({
      value: Math.floor(Math.random() * 100),
    }))

    var dataSample2 = Array.from({ length: 31 }, () => ({
      value: Math.floor(Math.random() * 100),
    }))

    var dataSample22 = Array.from({ length: 31 }, () => ({
      value: Math.floor(Math.random() * 100),
    }))

    var dataSample3 = Array.from({ length: 31 }, () => ({
      value: Math.floor(Math.random() * 100),
    }))

    dataSample1 = dataSample1.map((data, index) => ({
      ...data,
      time: `${index + 1}/10`,
    }))

    dataSample2 = dataSample2.map((data, index) => ({
      ...data,
      time: `${index + 1}/10`,
    }))

    dataSample22 = dataSample22.map((data, index) => ({
      ...data,
      time: `${index + 1}/10`,
    }))

    dataSample3 = dataSample3.map((data, index) => ({
      ...data,
      time: `${index + 1}/10`,
    }))

    console.log(dataSample1)

  return (
    <>
      <Head>
        <title>Tofu</title>
        <meta name="description" content="Tofu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Header />

        <UserCard user={user} />

        <div className="blockTitle">
          <div className="title">
            <h2>Blocs cassés</h2>
          </div>
          {block.map((item, index) => (
            <div key={index}>
              <Item
                imgSrc={item.imgSrc}
                title={item.title}
                titleColor={item.titleColor}
                number={item.number}
              />
            </div>
          ))}
        </div>

        <div className="blockTitle">
          <div className="title">
            <h2>Blocs placés</h2>
          </div>
          {block.reverse().map((item, index) => (
            <div key={index}>
              <Item
                imgSrc={item.imgSrc}
                title={item.title}
                titleColor={item.titleColor}
                number={item.number}
              />
            </div>
          ))}
        </div>

        <div className="blockTitle">
          <div className="title">
            <h2>Items</h2>
          </div>
          {block.reverse().map((item, index) => (
            <div key={index}>
              <Item
                imgSrc={item.imgSrc}
                title={item.title}
                titleColor={item.titleColor}
                number={item.number}
              />
            </div>
          ))}
        </div>

        <div className="charts">
          <Area
            colorData={["#f02fc2"]}
            data={dataSample1}
            seriesNames={["Temps de jeu"]}
          />
          <Area
            colorData={["#fff", "#17ead9"]}
            data={dataSample2}
            dualData={dataSample22}
            seriesNames={["Morts", "Kill"]}
          />
          <Area
            colorData={["#fccf31"]}
            data={dataSample3}
            seriesNames={["Distance parcourue"]}
          />
        </div>
      </main>
    </>
  )
}

export default Home
