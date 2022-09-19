import { Footer, Services, Welcome } from "./components";
import Navbar from "./components/Navbar";
import Transactions from "./components/Transactions";

const  App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome/>
        <Services/>
        <Transactions/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
