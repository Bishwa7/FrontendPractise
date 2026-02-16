import { Menu, X } from 'lucide-react';
import { useState } from 'react';



export default function Navbar () {
    const [ isMobile, setIsMobile ] = useState(false)

    return(
        <div className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div onClick={() => {document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });}} className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img src="/logo.png" alt="CodeWave" className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Code</span>
                            <span className="text-blue-400">Wave</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            Features
                        </a>
                        <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            Pricing
                        </a>
                        <a href="#testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            Testimonials
                        </a>
                    </div>

                    <button className='md:hidden items-center p-2 text-gray-300 hover:text-white' onClick={() => setIsMobile((prev) => !prev)}>
                        {isMobile ? (
                            <X className='w-5 h-5 sm:w-6 sm:h-6' />
                        ) : (
                            <Menu className='w-5 h-5 sm:w-6 sm:h-6' />
                        )}
                    </button>

                    
                </div>
            </div>
            


            {isMobile && (
                <div className='fixed right-0 z-50 w-64 min-h-screen md:hidden bg-slate-900/90 backdrop-blur-lg border-t border-l border-slate-800 animate-in slide-in-right duration-300'>
                    <div className='pr-4 py-2 sm:py-4 sm:space-y-1 flex flex-col'>
                        <a href="#features" className="py-2 pl-4 text-gray-300 hover:text-white hover:bg-slate-800 text-sm lg:text-base" onClick={() => setIsMobile(false) }>
                            Features
                        </a>
                        <a href="#pricing" className="py-2 pl-4 text-gray-300 hover:text-white hover:bg-slate-800 text-sm lg:text-base" onClick={() => setIsMobile(false) }>
                            Pricing
                        </a>
                        <a href="#testimonials" className="py-2 pl-4 text-gray-300 hover:text-white hover:bg-slate-800 text-sm lg:text-base" onClick={() => setIsMobile(false) }>
                            Testimonials
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}