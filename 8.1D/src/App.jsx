import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostPage from "./components/Postpage";
import FindQuestionPage from "./components/FindQuestionpage";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/find-questions" element={<FindQuestionPage />} />
        </Routes>
      </Router>
  );
}

export default App;