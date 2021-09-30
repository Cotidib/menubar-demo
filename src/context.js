import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: '', links:[]});

    const openSideBar = () =>{
        setIsSideBarOpen(true);
    }
    const closeSideBar = () =>{
        setIsSideBarOpen(false);
    }

    const openSubmenu = (text,coordinates) =>{
        const pageToDisplay = sublinks.find((link) => link.page === text);
        setLocation(coordinates);
        setPage(pageToDisplay);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () =>{
        setIsSubmenuOpen(false);
    }

    return <AppContext.Provider value={{isSideBarOpen, isSubmenuOpen, openSideBar, closeSideBar, openSubmenu, closeSubmenu, location, page}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };
