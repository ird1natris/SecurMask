import React, { useState } from 'react';
import Hero from '../components/Hero'; // Ensure the path is correct
import Fileupload from '../components/fileUpload'; // Ensure the path is correct
import styles from '../style';
import Sidebar from '../components/sideBar'; // Ensure the path is correct
import Navbar from '../components/Navbar'; // Ensure the path is correct

const Home = ({onLogout}) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  
  const handleToggleSidebar = (expanded) => {
    setSidebarExpanded(expanded);
  };

  return (
    <div className={`h-screen overflow-hidden flex w-full ${styles.boxWidth} bg-third`}>
      {/* Sidebar Section */}
      <div className={`transition-all duration-300 ${sidebarExpanded ? "w-64" : "w-20"}`}>
        <Sidebar onToggle={handleToggleSidebar} expanded={sidebarExpanded} onLogout={onLogout} />

      </div>


      {/* Main Content Section */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 `}
      >
        {/* Navbar Section */}
        <div
          className="fixed top-0 z-10 bg-primary transition-all duration-300 "
          style={{ width: `calc(100% - ${sidebarExpanded ? '16rem' : '5rem'})` }}
        >
          <Navbar />
        </div>

        {/* Content Section */}
        <div className="pt-16 flex-1 overflow-auto ml-14 ">
          <div className={`bg-third ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-third ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Fileupload uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
