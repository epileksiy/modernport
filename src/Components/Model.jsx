import React, { useRef } from "react";
import { motion } from "framer-motion-3d"
import { useGLTF, MeshWobbleMaterial, Edges, Environment } from "@react-three/drei";


export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/modernport/Llama.glb");

  const variants = {
    hidden: { x: -5 ,
    scale: [0.05,0.05,0.05]
    },
    visible: { x: 0,
      scale: [0.1,0.1,0.1] 
    }
  }

  return (
    <motion.group ref={group} {...props} dispose={null}     
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{duration:2}}
    >
      <group scale={4.1}>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
        >
            <meshStandardMaterial color="#A865C9" roughness={0.1} metalness={0.15}/>
            <Edges
                scale={1.5}
                threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
                position={[0,-0.8,0]}
            />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
        >
            <MeshWobbleMaterial factor={0.4} speed={3} color="#A865C9" roughness={0.1} metalness={0.15}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          >
          <MeshWobbleMaterial factor={0.2} speed={3} color="#000" roughness={0.1} metalness={0.15}/>
      </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          >

          <meshStandardMaterial color="#000" roughness={0.1} metalness={0.15}/>
      </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials["Material.003"]}
        >
            <Edges
                scale={1.5}
                threshold={50} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
                position={[0,-0.8,0]}
            />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials.Material}
        >
            <Edges
                scale={1.5}
                threshold={3} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="purple"
                position={[0,-0.8,0]}
            />
        </mesh>
      </group>
      <Environment preset="warehouse"/>
    </motion.group>
  );
}

useGLTF.preload("/modernport/Llama.glb");

