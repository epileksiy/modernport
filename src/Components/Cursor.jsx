import { motion } from 'framer-motion';
import React, { useEffect, useState} from 'react';


export default function Cursor () {
    
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const [mousePosition, setMousePosition] = useState({
        x: screenWidth/2,
        y: screenHeight/2 +90
    });

    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(()=>{
        const mouseMove = e => {

            setMousePosition({
            x: e.clientX,
            y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () =>{
            window.removeEventListener("mosemove", mouseMove);
        }

    });

    const variants = {
        default: {
            x:mousePosition.x - 16,
            y:mousePosition.y - 16,
            backgroundColor: "rgb(255, 255, 255)"
        },
        text: {
            height: 250,
            width: 250,
            x:mousePosition.x - 125,
            y:mousePosition.y - 125,
            backgroundColor: "#ff31da",
            mixBlendMode: "hue"
        }
    }

    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default');
        
    return (
        <>
            <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="z-10 w-full text-center text-white my-auto font-bold maintext flex flex-col items-center">
                <p>HELLO WORLD.</p>
                <div className="text-xl md:text-3xl text-white lg:glass rounded-md md:rounded-xl p-3 md:p-7 md:font-bold">@sadhighkid</div>
            </div>
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
                style={{backgroundColor: "rgb(255, 255, 255)"}}
            />
        </>

    )
}