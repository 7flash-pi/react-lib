import Navbar from "../components/common/Navbar/Navbar"

const menuItems:string[]=['Conatct','Ashish','karan','Neelesh']


const Home = () => {
  return (
  <section className="h-[100vh] w-[100vw]" >
    <Navbar variant="horizontal" item={menuItems}/>

  </section>
  )
}

export default Home
