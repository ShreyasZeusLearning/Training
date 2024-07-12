import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className=""></div>
        <ul>
            <li><img src="./Images/home.svg" alt="" srcset="" /><a href="/">Home</a></li>
            <li><img src="./Images/upload.svg" alt="" srcset="" /> <a href="/upload">Upload</a></li>
            <li><img src="./Images/add.svg" alt="" srcset="" /> <a href="#">Insert</a></li>
            <li><img src="./Images/graph.svg" alt="" srcset="" /> <a href="/upload">Graphs</a></li>
        </ul>
        <div className="search">
            <input type="text" name="srchInptTxt" className='srchInptbox' id="" />
            {/* <img src="./Images/search.svg" alt="" srcset="" /> */}
            <span class="material-symbols-outlined">search</span>
        </div>
    </div>
  )
}

export default Navbar