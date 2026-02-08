import { useEffect, useState } from "react"

export default function Hero () {

    const [mousePosition, setMousePosition] = useState({x:0, y:0});

    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.x,
            y: e.y,
        });

        // console.log(e.x, e.y)
    };
    

    useEffect(() => {
        // const handleMouseMove = (e) => {
        //     console.log(e.clientX, e.clientY)
        // }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    },[])

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
                background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(59, 130, 246, 0.30), transparent 40%)`
            }} />
        </section>
    )
}