
import NavBar from './components/NavBar'
import CarCard from './components/CarCard'



export default function App() {
 

  return (
    <>
    
    <NavBar/>
    <main>
      <section id='cards'>
        <div className='ct-cards-container'>
        <h2>Venha nos visitar</h2>
        <CarCard/>
        <CarCard/>
        </div>
      </section>
    </main>
   
    
    </>
  )
}


