import React from "react";

const hello = <div>Hello, World</div>;
const goodbye = React.createElement("div", null, "Goodbye, World");

function App() {
  return <div>
    {hello}
    {goodbye}
  </div>;
}

export default App;
