import { Outlet } from "react-router-dom"
import Cabecalho from "@/Components/Cabecalho"
import Container from "@/Components/Container"
import Rodape from "@/Components/Rodape"
import FavoritosProvider from "@/Contexts/Favoritos"

export default function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  )
}
