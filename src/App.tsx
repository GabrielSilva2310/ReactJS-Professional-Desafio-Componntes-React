
import NavBar from './components/NavBar'
import CarCard from './components/CarCard'
import CardsTitle from './components/CardsTitle'



export default function App() {
 

  return (
    <>
    
    <NavBar/>
    <main>
      <section id='cards' className='ct-container'>
        <CardsTitle/>
        <CarCard/>
        <CarCard/>
      </section>
    </main>
   
    
    </>
  )
}


