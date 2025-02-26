import { useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()
  
  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#050816]">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-4 border-t-blue-500 border-opacity-25 rounded-full animate-spin"></div>
        <p className="text-white text-xl mt-4">Loading... {progress.toFixed(2)}%</p>
      </div>
    </div>
  )
}

export default Loader 