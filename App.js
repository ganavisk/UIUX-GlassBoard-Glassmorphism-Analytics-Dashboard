import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {

return (

<div className="container">

<h1 className="title">GlassBoard Analytics Dashboard</h1>

<div className="card-container">

<Card title="Total Users" value="1200" />
<Card title="Active Sessions" value="320" />
<Card title="Revenue" value="$15,200" />
<Card title="Growth Rate" value="18%" />

</div>

</div>

);

}

export default App;
