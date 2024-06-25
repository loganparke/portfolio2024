import React from 'react';
import styles from './nav.module.css';
import logan from '../../assets/logan.jpg';
import home from '../../assets/home-05.png';
import user from '../../assets/user-03.png';
import chart from '../../assets/line-chart-up-02.png';
import file from '../../assets/file-05.png'

function Nav() {

  return (
    <nav className={`${styles.navStyles}`}>
      <h1>Logan Parke</h1>
      <article>
      <button>
        <img className='btnImg' src={home} alt='imgs'/>
        Home
      </button>
      <button>
      <img className='btnImg' src={chart} alt='imgs'/>
        Work History & Projects
      </button>
      <button>
      <img className='btnImg' src={user} alt='imgs'/>
        About Me
      </button>
      <button>
      <img className='btnImg' src={file} alt='imgs'/>
        Resume & Contact Info
      </button>
      </article>
      <div>
      <a href='https://www.linkedin.com/in/logan-parke/' target='_blank'><img src={logan} alt='imgs'/></a>
      </div>
    </nav>
  )
}

export default Nav;