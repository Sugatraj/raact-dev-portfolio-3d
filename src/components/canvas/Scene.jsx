import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Preload } from '@react-three/drei'
import Loader from '../ui/Loader'

const Scene = ({ children }) => {
  return (
    <div className="canvas-container">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          frameloop="demand"
        >
          {children}
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default Scene 