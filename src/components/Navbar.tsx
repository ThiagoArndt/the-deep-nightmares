import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavHashLink as Link } from 'react-router-hash-link'

function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  const menuToggleHandler = () => {
    setMenuOpen(p => !p)
  }

  return (
    <header className='bg-primary w-full h-[100px] transition-[0.3s] duration-[ease] ease-[all] px-6 py-0 sm:px-12 sm:py-0'>
      <div className='overflow-hidden text-white max-w-[1920px] h-full flex items-center justify-between relative z-[100] mx-auto my-0'>
        <Link
          to='/'
          className='text-[2rem] font-[bold] no-underline text-white'
        >
          <img className='w-40' src='/images/logo.png' alt=''></img>
        </Link>
        <nav
          className={`${'bg-primary w-full h-screen fixed flex flex-col justify-center items-center text-center backdrop-blur-[2px] translate-x-0 transition-[0.3s] duration-[ease] ease-[transform] right-full inset-y-0 sm:flex-row sm:w-auto sm:h-full sm:static sm:transform-none sm:bg-opacity-0'} 
          ${menuOpen && size.width < 768 ? `${'translate-x-full'}` : ''} 
          }`}
        >
          <ul className='flex flex-col mb-8 p-0 list-none sm:flex-row sm:items-center sm:mr-[calc(0.5rem_+_16px)] sm:mb-0 '>
            <Link to='/'>
              <li className='mb-8 no-underline text-[inherit] transition-[0.3s] duration-[ease] ease-[all] px-5 py-3 rounded-xl active:rounded-[calc(12px_+_6px)] hover:bg-secondary sm:mr-4 sm:mb-0'>
                Inicio
              </li>
            </Link>
            <Link to='/info'>
              {' '}
              <li className='mb-8 no-underline text-[inherit] transition-[0.3s] duration-[ease] ease-[all] px-5 py-3 rounded-xl active:rounded-[calc(12px_+_6px)] hover:bg-secondary sm:mr-4 sm:mb-0'>
                Info
              </li>
            </Link>
            <Link to='/reviews'>
              {' '}
              <li className='mb-8 no-underline text-[inherit] transition-[0.3s] duration-[ease] ease-[all] px-5 py-3 rounded-xl active:rounded-[calc(12px_+_6px)] hover:bg-secondary sm:mr-4 sm:mb-0'>
                Reviews
              </li>
            </Link>
            <Link to='/contact'>
              <li className='no-underline text-[inherit] transition-[0.3s] duration-[ease] ease-[all] px-5 py-3 rounded-xl active:rounded-[calc(12px_+_6px)] hover:bg-secondary'>
                Contato
              </li>
            </Link>
          </ul>
        </nav>
        <div className='cursor-pointer flex items-center text-[2rem] transition-[0.3s] duration-[ease] ease-[all] relative hover:text-secondary sm:hidden'>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
