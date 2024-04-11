import React from "react";
import { Link } from "react-router-dom";
import Leftbar from "../Elements/leftbar";
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export default class Optimize extends React.Component {
    constructor() {
        super();
        this.state = {
            theme: "dark",
            color: "#ddd",
            portfolioColor: "#ddd",
            bookmarkColor: "#ddd",
            companies: ["MRNA", "GOOGL", "PFE", "JNJ", "FB", "AAPL", "COST", "WMT", "KR", "JPM", "BAC", "HSBC"],
            selectedCompanies: [],
            isDropDown: false,
            startDate: Date.now(),
            endDate: Date.now(),
            Results: null
        };
        this.status = React.createRef();
    }
    componentDidMount() {

    }



    Dates() {
        const changeStartDate = (e) => {
            this.setState({ ...this.state, startDate: new Date(e) })
        }
        const changeEndDate = (e) => {
            this.setState({ ...this.state, endDate: new Date(e) })
        }
        return (
            <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-evenly" }}>
                <div>
                    <span style={{ marginRight: "1rem" }}>Start Date</span>
                    <DatePicker onChange={changeStartDate} value={this.state.startDate} />
                </div>
                <div>
                    <span style={{ marginRight: "1rem" }}>End Date</span>
                    <DatePicker onChange={changeEndDate} value={this.state.endDate} />
                </div>
            </div>
        )
    }
    clickCompany = (e) => {
        console.log(e);
    }

    CompanySelection() {
        const list = this.state.companies.map((e) => {
            return { value: e, label: e }
        })

        return (
            <div style={{ marginTop: "2rem" }}>
                <span>Company</span>
                <Select isMulti options={list}
                    styles={{
                        option: (provided, state) => ({
                            ...provided,
                            color: 'black', // Change text color of options to black
                        }),
                    }}
                    onChange={(e) => { this.setState({ ...this.state, selectedCompanies: e.map((f) => { return f.value }) }) }}

                />
            </div>
        )
    }

    MethodSelection() {
        const list = [
            { value: "Mean Variance Method", label: "Mean Variance Method" },
            { value: "HRP Method", label: "HRP Method" },
            { value: "mCVAR Method", label: "mCVAR Method" }
        ]



        return (
            <div style={{ marginTop: "2rem" }}>
                <span >Method</span>
                <Select options={list}
                    styles={{
                        option: (provided, state) => ({
                            ...provided,
                            color: 'black', // Change text color of options to black
                        }),
                    }}
                    onChange={(e) => { this.setState({ ...this.state, selectedCompanies: e.map((f) => { return f.value }) }) }}

                />
            </div>
        )
    }

    findOptimize = async () => {

        const sendData = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            companies: this.state.selectedCompanies,
            method: this.state.method,
            amount: this.state.amount,
        }

        /* ------------------------INCOMPLETE ------------------------------ */
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': '',
        // }
        // const res = await fetch(.....);
        // const data = res.data;

        /*----------------------------------------------------------------*/
        /*
        data should be in this type : 
        data = {
            ERA : ,
            AV:  ,
            SR : ,
        }
        this will be accessed in below code with this.state.Results.ERA 
        */ 
        // this.setState({ ...this.state, Results: data })
    }


    render() {

        return (
            <section className="Dashboard" id="dashboard">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >

                    <div style={{ display: "flex", height: "100%" }}>
                        <Leftbar />
                        <div className="panel">
                            <h2>Optimize</h2>
                            {
                                this.Dates()
                            }
                            {
                                this.CompanySelection()
                            }
                            {
                                this.MethodSelection()
                            }

                            <div>
                                <label>Amount To Invest</label>
                                <input type="number" style={{ height: "2rem", marginTop: "2rem", marginLeft: "3rem", borderRadius: "2px" }}></input>
                            </div>
                            <div>
                                <button style={{ color: "white", border: "1px solid white", borderRadius: "3px", marginTop: "2rem", fontSize: "17px" }} onClick={this.findOptimize}> Optimize </button>
                            </div>
                            {
                                this.state.Results ?
                                    <div style={{ marginTop: "2rem" }}>
                                        <p style={{ fontSize: "1rem" }}>Expected annual return : {this.state.Results.ERA}</p>
                                        <p style={{ fontSize: "1rem" }}>Annual volatility : {this.state.AV}</p>
                                        <p style={{ fontSize: "1rem" }}>Sharpe ratio : {this.state.SR}</p>
                                    </div>
                                    : <></>
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
