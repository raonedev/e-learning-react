import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage'
import VideoPlayerPage from "./pages/VideoPlayerPage";

function App() {

  return (
    <>
      {/* <HomePage/> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch/:videoId" element={<VideoPlayerPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
