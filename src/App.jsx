 import NavBar from './components/Header/index'
import Hero from './components/Hero/index'

function App() {
  return (
    <>
    <section style={{
      display: "flex",
      width: "100%",
      flexDirection: "column",
      gap: "30%",
      alignItems: "flex-start"
    }}>
    <NavBar/>
    <Hero/>
    </section>
    
    </>
  )
}

export default App



