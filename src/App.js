import "./App.css";

import ToDoList from "./components/ToDoList";
import Weather from "./components/Weather";
import ImageOfTheDay from "./components/ImageOfTheDay";
import Clock from "./components/Clock";

function App() {
  // JSX
  return (
    <div className="App">
      <div>
        <Weather city="Reykjavík" />
        <Weather city="Sakskobing" />
      </div>

      <div>
        <ToDoList />
      </div>

      <div>
        <Clock />
      </div>

      <div>
        <ImageOfTheDay />
      </div>
    </div>
  );
}

export default App;
