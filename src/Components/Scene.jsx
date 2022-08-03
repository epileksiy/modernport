import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { softShadows } from '@react-three/drei';

import Model from './Model';

export default function Scene () {
    softShadows();
    
    function Cube() {
        const meshRef = useRef();
        let time = -0.5
    
        useFrame(()=>{
          if(!meshRef.current){
            return;
          }
          time = time+0.005;

          meshRef.current.rotation.y += Math.sin(time)*0.005; 
        });
    
        return(
            <>
                <mesh castShadow ref={meshRef}>
                    <Model scale={[0.1,0.1,0.1]} position={[0,-1,0]} >
                    </Model>
                </mesh>

                <group position={[0, -3.5, 0]}>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
                        <planeBufferGeometry attach="geometry" args={[100, 100]} />
                        <shadowMaterial attach="material" transparent opacity={0.4} />
                    </mesh>
                </group>


            </>

        )
    
    }

    return(
        <Canvas shadows>
            <ambientLight intensity={0.4} />
            <directionalLight
                castShadow
                position={[2.5, 8, 5]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[-10, 0, -20]} color="purple" intensity={2.5} />
            <pointLight position={[0, -10, 0]} color="purple" intensity={1.5} />
            <pointLight position={[-10, -10, 10]} color="purple" intensity={1.5} />
            <pointLight position={[10, -10, 10]} color="cyan" intensity={1.5} />
            <Cube receiveShadow castShadow />
        </Canvas>
    );
}