import Header from "../components/Header"
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import HomePageServices from "../components/HomePageServices";


import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('intro.jpg')" }}>
          {/* Overlay with linear gradient and opacity */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/50"></div>
      
          {/* Content of the intro section */}
          <div className="relative z-10 flex items-center justify-start h-full px-20 pt-24">
            <div className="max-w-lg">
                <h1 className="font-bold text-6xl text-white mb-4">Keep Your Body Healthy</h1>
                <p className="text-lg text-white mb-2">We provide the best care to ensure your well-being at all times.</p>
                <p className="text-lg text-white mb-6">We help Connecting Clinics with People.</p>
                <Link to="/get-started" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
                Get Started
                </Link>
            </div>
            </div>
      
          {/* Header component (if needed above the overlay) */}
          <div className="absolute top-0 left-0 w-full z-20">
            <Header />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row h-auto px-20 py-10 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex-1">
                <h1 className="text-4xl font-bold text-[#060644] mb-4">We HelpLinc</h1>
                <p className="text-lg text-gray-700 leading-relaxed pb-10">
                At Helplinc, we care about your well-being. Located in Kigali City, Rwanda, our team of dedicated doctors is here to provide you with quality healthcare. We listen to your concerns and offer personalized treatment plans. Whether it's a routine check-up or a specific health issue, we're here to help. Your health is our priority, and we strive to make every visit comfortable and effective. Trust Helplink for compassionate and professional care.
                </p>
                <Link to="/get-started" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
                Get Started Today
                </Link>
            </div>
            <div className="flex-1 mt-10 md:mt-0 md:ml-10">
                <img src="/image1.jpg" alt="Helplink" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        </div>
        <div className="w-full bg-gradient-to-r from-blue-700 to-indigo-500 flex flex-col h-auto px-20 py-10 justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Your Health Matters at HelpLinc in Kigali City</h2>
                <p className="text-lg text-white leading-relaxed">Trust HelpLinc for your medical needs. Our friendly doctors in Kigali City provide personalized care to keep you healthy.</p>
            </div>
            <div className="mt-10">
                <img src="/image2.jpg" alt="Helplink" className="w-[600px] h-auto rounded-lg shadow-md" />
            </div>
            </div>
        <div className="w-full h-auto px-20 py-10 rounded-lg shadow-lg bg-zinc-100">
            <h1 className="text-4xl font-bold text-[#060644] mb-8 text-center">Our Services</h1>

            <HomePageServices />
            </div>
            <Partners />
            <Footer />

        </div>
      );      
}

export default Home