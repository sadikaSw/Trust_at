import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        closeModal,
        closeSidebar,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
// export const useGlobalContext = () => {
//     return useContext(AppContext)
// }

//we can do this also when we use this we won't provide the useContext(AppContext) in any
//time
export { AppContext, AppProvider };
