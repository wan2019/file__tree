import "./scss/all.scss";

import React from "react";
import ReactDOM from "react-dom";
import FileNode from "./FileNode";

import file from "./file.json";

const App = () => {
    return (
        <div className="warr">
            <h1>file tree</h1>
            <FileNode {...file} checkboxValue={true} />
        </div>
    );
};
//first
ReactDOM.render(<App />, document.getElementById("root"));
