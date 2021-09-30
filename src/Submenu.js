import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'

const Submenu = () => {
  const {isSubmenuOpen, location, page: {page,links}} = useGlobalContext();

  const [gridcolumns, setGridcolumns] = useState('col2');

  const container = useRef(null);
  useEffect(()=>{
    const submenu = container.current; //get submenu node
    const {btncenter,btnbottom} = location;
    submenu.style.left = `${btncenter}px`; 
    submenu.style.top = `${btnbottom}px`;

    if(links.length <= 4)
    {
      setGridcolumns(`col${links.length}`);
    }
    else
    {
      setGridcolumns('col4');
    }
    
  }, [links.length, location])

  return <aside className={`${isSubmenuOpen? 'submenu-container submenu-show': 'submenu-container'}`} ref={container}>
    <h4>{page}</h4>
    <div className={`submenu-center ${gridcolumns}`}>
      {links.map((link, index) => {
        const {label,icon,url} = link;
        return <a key={index} href={url}>{icon} {label}</a>
      })}
    </div>
  </aside>
}

export default Submenu