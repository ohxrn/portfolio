import React from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Js = () => {
  const dracoLoader = new DRACOLoader();
  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);
  const js = useLoader(GLTFLoader, "./src/assets/js2.gltf");
  return (
    <Canvas>
      <OrbitControls />
      <primitive object={js.scene} scale={0.01} />
    </Canvas>
  );
};

export default Js;
