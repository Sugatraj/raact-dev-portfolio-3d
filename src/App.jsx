import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useProgress } from '@react-three/drei'
import { Suspense } from 'react'

function Loader() {
  const { progress } = useProgress()
  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#050816]">
      <div className="text-white text-xl">Loading... {progress.toFixed(2)}%</div>
    </div>
  )
}

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ff00" />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Box />
      <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Preload all />
    </>
  )
}

function App() {
  return (
    <div className="canvas-container">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          frameloop="demand"
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App 