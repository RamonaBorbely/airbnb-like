import { TbWorld } from 'react-icons/tb'
import { BiMenu } from 'react-icons/bi'
import { HiUserCircle } from 'react-icons/hi'
import { SiAirbnb } from 'react-icons/si'
import SearchBar from './SearchBar'
import FilterIcons from './FilterIcons'
import '../assets/css/style.css'
import'../assets/css/responsive.css'

const Header = () => {
  return (
    <header>
        <div className='header-first'> 
            <div className='logo'>
                <SiAirbnb />
                <p>airbnb</p>
            </div>

            <div className='input-search'>
                <SearchBar />
            </div>

            <div className='log-menu'>
                <p>Airbnb your home</p>
                <TbWorld className='world-icon'/>
                <div className='user-menu'> 
                    <BiMenu />
                    <HiUserCircle />
                </div>
            </div>

        </div>
        <div className='header-second'>
            <FilterIcons />
        </div>
    </header>
  )
}

export default Header
