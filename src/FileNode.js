import React, { Component } from "react";

class Item extends Component {
    state = {
        itemValue: true
    };

    eachClick = e => {
        //是非同步
        this.setState({
            itemValue: !this.state.itemValue
        });
    };
    render() {
        const { name, checkboxValue } = this.props;
        const { itemValue } = this.state;

        // console.log("ff");
        // console.log("should 狀態", itemValue);
        console.log("in out", checkboxValue);
        console.log("in in", itemValue);

        return (
            <div>
                <input
                    type="checkbox"
                    checked={itemValue}
                    onChange={this.eachClick}
                />
                <label>{name}</label>
            </div>
        );
    }
}

class FileNode extends Component {
    state = {
        open: true,
        checkboxValue: this.props.checkboxValue || false
    };
    componentDidUpdate() {
        console.log("FFFFFFFFFFFF");
    }

    eachFile = (files, checkboxValue) => {
        const arr = [1, 2, 3];
        // console.log(checkboxValue);
        console.log("out");

        return (
            <ul>
                <div className="folder__name" />
                {arr.map(ar => (
                    <Item
                        key={ar}
                        name={ar}
                        checkboxValue={checkboxValue}
                        eachItemClick={this.eachItemClick}
                    />
                ))}
                {/* {files.map(file => (
                    <li key={file.name}>
                        {file.files ? (
                            // <FileNode {...file} checkboxValue={checkboxValue} />
                            <FileNode {...file} />
                        ) : (
                            <div>
                                <input type="checkbox" />
                                <label>{file.name}</label>
                            </div>
                        )}
                    </li>
                ))} */}
            </ul>
        );
    };
    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    };
    groupClick = e => {
        //是非同步
        this.setState({
            checkboxValue: !this.state.checkboxValue
        });
    };
    eachItemClick = () => {
        console.log("ss");
    };
    render() {
        const { name, files } = this.props;
        const { open, checkboxValue } = this.state;
        // console.log("init", this.state.checkboxValue);

        return (
            <div key={this.props.keyName || ""}>
                <div
                    className={`folder ${open ? "open" : ""}`}
                    onClick={this.toggle}
                />
                <div className="folder__name">
                    <input
                        type="checkbox"
                        value={name}
                        checked={checkboxValue}
                        onChange={this.groupClick}
                    />
                    <label>{name}</label>
                </div>
                {!this.state.open ? null : this.eachFile(files, checkboxValue)}
            </div>
        );
    }
}
export default FileNode;
