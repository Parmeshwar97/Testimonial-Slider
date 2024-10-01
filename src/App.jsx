import Testimonials from "./Components/Testimonials";
import data from "./data.js";
function App() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col justify-center gap-10 items-center">
      <nav className="flex flex-col items-center gap-1">
        <h1 className="font-bold text-3xl">Our Testimonials</h1>
        <div className="w-36 rounded h-1 bg-violet-500"></div>
      </nav>
      <div className="w-2/5 h-1/2 flex items-center justify-center ">
        <Testimonials reviews={data} />
      </div>
    </div>
  );
}

export default App;
