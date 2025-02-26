import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations  } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  const { scene ,animations } = useGLTF(
    "./Plazma/PlazmaCanonFinal.gltf",
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  const { actions } = useAnimations(animations, scene); // Get animation actions

  useEffect(() => {
    if (actions) {
      console.log("Available animations:", Object.keys(actions)); // Debugging: log animation names
      actions["idal briving"]?.play(); // Replace "Walk" with the correct animation name
    }
  }, [actions]);

  return (
    <mesh>
      {/* Global Ambient Light for Basic Visibility */}
      <ambientLight intensity={0.6} />

      {/* Hemisphere Light for a soft sky effect */}
      <hemisphereLight intensity={0.6} groundColor="black" />

      {/* Stronger Directional Light to simulate sunlight */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* SpotLight for extra highlighting */}
      <spotLight
        position={[-10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />

      {/* Point Light for some extra glow */}
      <pointLight position={[0, 5, 5]} intensity={2} />
      <primitive
        object={scene}
        scale={isMobile ? 2 : 2}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, 0]}
        rotation={[-0.00, -0.0, -0.0]}
      />
    </mesh>
  );
};

const MemoizedComputerModel = React.memo(ComputerModel);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MemoizedComputerModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
