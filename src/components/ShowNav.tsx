import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShowNav = ({children}) => {


    const location = useLocation();
    const [navBar,setNavBar]=useState(false);

    useEffect(()=>{
        if(location.pathname ===  '/login'){
            setNavBar(false);
        }else{
            setNavBar(true)
        }
    },[location])
  return (
    <div>{navBar && children}</div>
  )
}

export default ShowNav