import React from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AmbientLight } from "three";

export const Data = () => {
  const dracoLoader = new DRACOLoader();
  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);
  const js = useLoader(GLTFLoader, "./src/assets/yed.gltf");
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={1.7} />
      <primitive object={js.scene} scale={0.029} rotation-x={0.9} />
    </Canvas>
  );
};
