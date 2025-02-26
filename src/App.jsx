import MainLayout from './components/layout/MainLayout'
import Scene from './components/canvas/Scene'

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ff00" />
    </mesh>
  )
}

function App() {
  return (
    <MainLayout>
      <Scene>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Box />
      </Scene>
    </MainLayout>
  )
}

export default App 