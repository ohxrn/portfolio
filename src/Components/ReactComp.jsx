import React from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const ReactComp = () => {
  const dracoLoader = new DRACOLoader();
  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);
  const react = useLoader(GLTFLoader, "./src/assets/reacter.gltf");

  return (
    <Canvas>
      <OrbitControls />
      <primitive object={react.scene} scale={0.01} rotation-x={1.51} />
    </Canvas>
  );
};
