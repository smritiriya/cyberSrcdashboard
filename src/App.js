// import { Header, Sidebar } from "./components";
// import "./App.scss";
// import { Dashboard } from "./containers";

// function App() {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="outlet-container">
//         <Header />
//         <Dashboard />
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";
import { Header, Sidebar } from "./components";
import Home from "./components/Home/Home";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home />
    </div>
  );
}

export default App;