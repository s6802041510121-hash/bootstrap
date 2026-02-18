import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Student from "./components/Student";
import Education from "./components/Education";
import Activity from "./components/Activity";
import PageNotFound from "./components/PageNotFound";
import ClickEvent from "./components/ClickEvent";
import TCTForm from "./components/TCTForm";

function App() {

  const std1 = {
    name: "Jidapa Sukhaphirom",
    stdid: "680241510121",
    sect: "TCT"
  };

  return (
    <div>
      
      <BrowserRouter>
      <Header />
        <Routes>

          <Route path="/" element={<Student stdInfo={std1} />} />
          <Route path='/edu' element={<Education />} />
          <Route path='/act' element={<Activity />} />
          <Route path='/event' element={<ClickEvent />} />
          <Route path='/form' element={<TCTForm />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
