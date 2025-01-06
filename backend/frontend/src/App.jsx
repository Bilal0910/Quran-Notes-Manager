import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<SignUp />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>;
};

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Home from "../pages/Home";
// import FetchData from "../pages/FetchData";

// function App() {
//   return (
//     <Router>
//       <div style={{ display: "flex" }}>
//         <Sidebar />
//         <div style={{ flex: 1 }}>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/fetch" element={<FetchData />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


// .App {
//   font-family: sans-serif;
//   text-align: center;
// }

// html,
// body {
//   background-color: #ff1919;
//   color: #777;
// }

// h1 {
//   font-size: 1.5em;
// }


// import React from "react";
// import Hero from "../components/Hero";

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from "react";

// const FetchData = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       if (response.status === 200) {
//         const result = await response.json();
//         setData(result);
//       } else {
//         setError(`Error: ${response.status}`);
//       }
//     } catch (err) {
//       setError(`Error: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Fetch Data</h2>
//       <button
//         onClick={fetchData}
//         style={{ padding: "10px 20px", marginBottom: "20px" }}
//       >
//         Fetch Data
//       </button>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {data && (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default FetchData;

// import React from "react";

// const Hero = () => {
//   return (
//     <div style={{ textAlign: "center", padding: "50px", background: "#ddd" }}>
//       <h1>Welcome to the App</h1>
//       <p>This is the hero section!</p>
//     </div>
//   );
// };

// export default Hero;


// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav style={{ background: "#333", color: "#fff", padding: "10px" }}>
//       <ul
//         style={{
//           display: "flex",
//           gap: "10px",
//           listStyle: "none",
//           margin: 0,
//           padding: 0,
//         }}
//       >
//         <li>
//           <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/fetch" style={{ color: "#fff", textDecoration: "none" }}>
//             Fetch Data
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";

// const Sidebar = () => {
//   return (
//     <div
//       style={{
//         width: "100px",
//         background: "#546897",
//         padding: "20px",
//         height: "100vh",
//       }}
//     >
//       <h3>Sidebar</h3>
//       <ul>
//         <li>Option 1</li>
//         <li>Option 2</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
