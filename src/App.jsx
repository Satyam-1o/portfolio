import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import AppRoutes from "./Routes";

export default function App(){
  return(
    <div className="h-full w-full mx-auto max-w-[47.5rem] p-6">
        <Navbar />

        <AppRoutes/>
        
        <Footer />
    </div>
  );
}
