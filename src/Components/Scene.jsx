import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, softShadows, Edges} from '@react-three/drei';

export default function Scene () {
    softShadows();

    function Cube() {
        // eslint-disable-next-line 
        const meshRef = useRef();
    
        useFrame(()=>{
          if(!meshRef.current){
            return;
          }
    
          meshRef.current.rotation.x += 0.005;
          meshRef.current.rotation.y += 0.005; 
        });
    
        return(
            <>
                <mesh castShadow ref={meshRef}>
                    <boxGeometry args={[2,2,2]}/>
                    <MeshWobbleMaterial factor={0.6} speed={3} color="#A865C9" roughness={0.1} metalness={0.2}/>
                    <Edges
                        scale={1.1}
                        threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                        color="white"
                    />
                                        <Edges
                        scale={1.5}
                        threshold={25} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                        color="#f705aa"
                    />
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