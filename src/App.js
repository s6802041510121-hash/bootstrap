import Header from "./components/Header";
import Footer from "./components/Footer";
import Student from "./components/Student";

function App() {

  const std1 = {
    name: "JIdapa Sukhaphirom",
    stdid: "680241510121",
    sect: "TCT"
  };

  return (
    <div>
      <Header />
      <Student stdInfo={std1} />
      <Footer />
    </div>
  );
}

export default App;
