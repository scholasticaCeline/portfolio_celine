import Navbar from "@/components/ui/navbar"
import BackgroundParticles from "@/components/ui/background-2"
import HomeSection from "@/components/ui/home-page"
// import HeroSection from "@/components/ui/hero-section"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidde text-white">
      <Navbar />

      <div className="absolute inset-0 -z-10">
        {/* <BackgroundBeamsWithCollision className="bg-gray-900" >{null}</BackgroundBeamsWithCollision> */}
        <BackgroundParticles></BackgroundParticles>
      </div>

      <div className="relative z-10">
        <HomeSection />
      </div>
    </main>
  )
}
