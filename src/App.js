
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Components
const Login = React.lazy(() => import("./Components/Login/Login"));
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<React.Suspense fallback="Loading DGRA"><Login/></React.Suspense>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
