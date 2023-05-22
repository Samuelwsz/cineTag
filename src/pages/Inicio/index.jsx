import Banner from "@/Components/Banner"
import Card from "@/Components/Card"
import Titulo from "@/Components/Titulo"

import styles from "./Inicio.module.css"
import { useEffect, useState } from "react"

export default function Inicio() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/samuelwsz/cinetag-api/videos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados)
      })
  }, [])
  return (
    <>
      <Banner imagem="home" />
      <Titulo>Um lugar para guardar seus titulos e filmes</Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return (
            <Card
              /*
              id={video.id}
              capa={video.capa}
              titulo={video.titulo}*/
              {...video}
              key={video.id}
            />
          )
        })}
      </section>
    </>
  )
}
