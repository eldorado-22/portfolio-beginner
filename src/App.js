import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/hero";
import Category from "./components/Category/category";
import {useState} from "react";

function App() {
    const [dark, setDark] = useState(false)

    return (
        <div style={{
            background: dark ? "rgba(9,7,72,0.91)" : "black",
        }}>
            <Header setDark={setDark} dark={dark}/>
            <Hero setDark={setDark} dark={dark}/>
            <Category setDark={setDark} dark={dark}/>
            <Footer/>
        </div>
    );
}

export default App;
