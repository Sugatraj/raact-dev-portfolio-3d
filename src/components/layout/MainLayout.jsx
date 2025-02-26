const MainLayout = ({ children }) => {
  return (
    <div className="relative z-0 bg-[#050816]">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {children}
      </div>
    </div>
  )
}

export default MainLayout 