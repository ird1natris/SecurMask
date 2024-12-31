import React, { useRef, useState } from "react";
import styles from "../style";
import { Detail ,Statistics,Navbar,Sidebar,Fileupload,Hero} from "../components";

const Home = ({ onLogout }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileUploadRef = useRef(null);

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
      <div className={`flex-1 flex flex-col transition-all duration-300`}>
        {/* Navbar Section */}
        <div
          className="fixed top-0 z-10 bg-primary transition-all duration-300"
          style={{ width: `calc(100% - ${sidebarExpanded ? "16rem" : "5rem"})` }}
        >
          <Navbar />
        </div>

        {/* Content Section */}
        <div className="pt-16 flex-1 overflow-auto ">
          <div className={`bg-third ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero fileUploadRef={fileUploadRef} />
            </div>
          </div>
          <div className="mt-8">
            <Statistics />
          </div>
          <div >
            <Detail />
          </div>

          <div
            ref={fileUploadRef}
            className={`bg-gray-100 ${styles.paddingX} ${styles.flexCenter}`}
          >
            <div className={`${styles.boxWidth}`}>
              <Fileupload uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
