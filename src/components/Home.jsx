import Hero from "./Hero";
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div
      className="h-screen relative w-full px-2 lg:px-10 xl:px-32 pt-3 sm:pt-10 pb-36"
      style={{
        background: "url(./assets/bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center"
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#262BDB] bg-opacity-50"></div>
      <div className="relative z-10">
        <Navbar />
          <Hero />
      </div>
    
    </div>
  );
}

export default Home