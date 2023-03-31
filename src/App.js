import logo from "./logo.svg";
import "./App.css";

import Todolist from "./TodoList";
import AliyunVideoPlayer from "./AliyunVideoPlayer";

function App() {
  const videoSources = ["xx.mp4", "xx.mp4", "xx.mp4"];

  return (
    <div className="App">
      {/* <Todolist /> */}
      <h1>Aliyun Video Player Example</h1>
      <AliyunVideoPlayer videoSources={videoSources} />
    </div>
  );
}

export default App;
