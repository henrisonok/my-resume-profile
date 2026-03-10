// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import Header from "./components/Header";
import About from "./components/About";
// import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Certifications from "./components/Certification";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      <Header />
      <About />
      {/* <Profile /> */}
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Contacts />
      <Footer />
    </div>
  );
}


export default App;






// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
