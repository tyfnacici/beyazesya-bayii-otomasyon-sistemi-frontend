import Login from "./routes/Login.jsx";
import Home from "./routes/Home.jsx";
import Navigation from "./components/Navigation.jsx";
import Musteri from "./routes/Musteri.jsx";
import Urun from "./routes/Urun.jsx";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-row bg-teal-100">
      <Navigation />
      <div className="w-full pr-12 pt-12">
        <Login />
        {/* <Home /> */}
        {/* <Musteri />
        <Urun /> */}
      </div>
    </div>
  );
};

export default App;
