import React from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Python = () => {
  const dracoLoader = new DRACOLoader();
  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);
  const react = useLoader(GLTFLoader, "./src/assets/python.gltf");

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.4} />
      <primitive object={react.scene} scale={0.0009} />
    </Canvas>
  );
};

export default Python;
