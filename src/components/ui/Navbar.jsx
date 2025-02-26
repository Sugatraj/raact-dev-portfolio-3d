import { useState } from 'react'
import { Link } from 'react-router-dom'
import useStore from '../../store'
import { personalInfo, navLinks } from '../../constants'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { activeSection, setActiveSection } = useStore()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 z-20 w-full bg-[#050816] bg-opacity-70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="text-white text-[18px] font-bold cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            {personalInfo.name}
          </Link>

          {/* Desktop Menu */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  activeSection === link.id ? 'text-white' : 'text-[#aaa6c3]'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <Link 
                  to={link.id === 'home' ? '/' : `/${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <ul className="flex flex-col items-center gap-4 pt-4 pb-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    activeSection === link.id ? 'text-white' : 'text-[#aaa6c3]'
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                >
                  <Link 
                    to={link.id === 'home' ? '/' : `/${link.id}`}
                    onClick={() => {
                      setActiveSection(link.id)
                      setIsMenuOpen(false)
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 