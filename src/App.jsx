import {InputText} from "primereact/inputtext";
import {useState} from "react";

function App() {
  const [text,setText] = useState("");
  return (
    <div className="text-3xl font-bold ">
      <p>Hello world</p>
      <InputText value={text} onChange={e => setText(e.target.value)}/>
      {text}
    </div>
  );
}

export default App;
