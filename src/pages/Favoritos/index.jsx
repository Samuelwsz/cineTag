import styles from "./Favoritos.module.css"
import Banner from "@/Components/Banner"
import Titulo from "@/Components/Titulo"
import Card from "@/Components/Card"
import { useFavoritoContext } from "@/Contexts/Favoritos"

export default function Favoritos() {
  const { favorito } = useFavoritoContext()
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>Meus favoritos</Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />
        })}
      </section>
    </>
  )
}
