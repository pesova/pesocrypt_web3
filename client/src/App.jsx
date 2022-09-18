import { Welcome } from "./components";
import Navbar from "./components/Navbar";

const  App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome/>
      </div>
    </div>
  );
}

export default App;
