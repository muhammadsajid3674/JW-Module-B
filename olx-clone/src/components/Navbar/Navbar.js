import React, { useState } from 'react'
import logo from '../../img/logo.png'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import data from '../data';


function Navbar() {

    const [filter, setFilter] = useState("");

    const searchText = (event) => {
        setFilter(event.target.value)
    }

    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key => {
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        })
    })
  return (
    <div>
       <main>
       <div className='logo'>
            <img src={logo}/>
        </div>
        <div className='categoryDrop'>
            <select>
                <option>Bikes</option>
                <option>Cars</option>
                <option>Mobiles</option>
                <option>Properties</option>
            </select>
        </div>
        <div className='searchBar'>
            <form>
                <input 
                value={filter} 
                style={{
                    minWidth: '500px', 
                    borderRadius: "5px 0 0 5px"
                    }} 
                type="text" 
                placeholder="What would you like to buy"
                onChange={searchText.bind(this)}
                />
            </form>
            <SearchIcon className='searchIcons' sx={{
                padding: '6.5px',
                fontSize: '2rem',
                color: 'var(--Purple)'
            }}/>
        </div>
       </main>
    </div>
  )
}

export default Navbar