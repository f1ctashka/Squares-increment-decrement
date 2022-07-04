import Squares from "./components/Squares";

import './App.css';

function App() {
    return (
        <div className="container">
            <div className="squares">
                <Squares/>
                <Squares/>
                <Squares/>
            </div>
        </div>
    )
}

export default App;
