import Card from './components/Card'
import swPosterImg from "./assets/sw-poster.jpg"
import esbPosterImg from "./assets/rotj-poster.jpg"
import rotjPosterImg from "./assets/esb-poster.jpg"

export default function App(props) {  
  return (
    <>
      <h1>Exercicio 02</h1>
      <Card title="Pôster: Star Wars (1997)" poster={swPosterImg} />
      <Card title="Pôster: Empire Strikes Back (1980)" poster={esbPosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" poster={rotjPosterImg} />      
    </>    
  )
}
