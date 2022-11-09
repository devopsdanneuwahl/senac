import './Home.css'
import { CardElenco } from '../../components/CardElenco/CardElenco'
import { CardFilme } from '../../components/CardFilme/CardFilme'
import { Titulo } from '../../components/Titulo/Titulo'

import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';

function Home() {

  const deadpool = {
    poster: "https://image.tmdb.org/t/p/w200/gkbGBlmjxQK9ZDQgAXmfG877DM4.jpg",
    titulo: "America Horror Story",
    nota: 8.9
  }

  const ator = {
    foto: "https://st2.depositphotos.com/1868949/8012/i/450/depositphotos_80126386-stock-photo-spanish-paella-with-seafood.jpg",
    nome: "Paejja da Loka",
    valor: "R$150"
  }

  return (
    <div className="App">
     <header>
      <TheatersOutlinedIcon fontSize='large' />
      <h1>Senac Filmes & Comidas</h1>
     </header>

     <main>
      <Titulo texto="Filmes em alta" />

        <section className="filmes">
          <CardFilme filme={deadpool} />
          <CardFilme filme={deadpool} />
          <CardFilme filme={deadpool} />
          </section>


      <Titulo texto="Comidas em alta" />

      <section className="ator">
      <CardElenco ator={ator} />
      <CardElenco ator={ator} />
      <CardElenco ator={ator} />
      </section>
    

     </main>
    </div>
  )
}

export default Home
