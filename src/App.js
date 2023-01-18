import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
