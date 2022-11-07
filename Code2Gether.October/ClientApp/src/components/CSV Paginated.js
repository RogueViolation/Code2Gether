import React, { Component } from 'react';
import axios from 'axios';

export class CSVPaginated extends Component {
    static displayName = CSVPaginated.name;

    constructor(props) {
        super(props);
        this.state = { file: undefined, show: false };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ file: event.target.files[0], show: true });
    }

    handleSubmit(event) {
        event.preventDefault()
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('fileName', this.state.file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });

    }

    validFile = () => {
        if (this.state.file.type === "text/csv") {
            return (
                <div>
                    <p color="green">Valid file selected.</p>
                </div>
            );
        } else {
            return (
                <div>
                    <p color="red">Invalid file type!</p>
                </div>
            );
        }
    };

    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.file,
            this.state.file.name
        );

        // Details of the uploaded file
        console.log(this.state.file);

        // Request made to the backend api
        // Send formData object
        //axios.post("api/uploadfile", formData);
    };

    fileData = () => {
        if (this.state.file) {
            return (
                <div>
                    <h2>File Details:</h2>

                    <p>File Name: {this.state.file.name}</p>


                    <p>File Type: {this.state.file.type}</p>


                    <p>
                        Last Modified:{" "}
                        {new Date(this.state.file.lastModified).toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="CSVPaginated" >
                <h1>CSV Paginated</h1>
                <div>
                    <input type="file" onChange={this.handleChange} />
                    <button onClick={this.onFileUpload}>Upload</button>
                    <div>{this.state.show ? this.validFile() : null}</div>
                </div>
                {this.fileData()}
            </div>
        );
    }
}