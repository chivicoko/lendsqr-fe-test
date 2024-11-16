import Image from 'next/image'
import React from 'react'
import './searchbar.scss';

const Searchbar = () => {
  return (
    <div className="searchbarFormContainer">
      <form className='searchBar'>
          <input type="text" placeholder='Search for anything' />
          <button className="searchIconContainer">
            <div className="searchIcon">
              <Image
                  src="/images/Vector.svg"
                  alt="Lendsqr's Logo"
                  fill
                  className="img"
                  sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </button>
      </form>
    </div>
  )
}

export default Searchbar