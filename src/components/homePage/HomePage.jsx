import React from 'react';
import logo from "../../assets/images/logo.png";
import { Link, withRouter } from "react-router-dom"
import addIcon from '../../assets/icons/add-24px.svg';
import './HomePage.css';
import EmployeeService from '../../services/EmployeeService';
import profile from "../../assets/profile-images/Ellipse -3.png";
import Display from "./Display";
const service = new EmployeeService();

export default class HomePage extends React.Component {

  

  constructor() {
    super();
    this.state = {
      employeeArray: []
    }
  }
  componentDidMount() {
    this.getEmployeeData();
  }

  getEmployeeData = () => {
    service.getAllEmployeeData().then(data => {
      this.setState({ employeeArray: data.data.data});
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <header className="header-content header">
          <div className="logo-content">
            <img src={logo} alt="" />
            <div>
              <span className="emp-text">EMPLOYEE</span><br />
              <span className="emp-text emp-payroll"> PAYROLL</span>
            </div>
          </div>
        </header>
        <div className="main-content">
          <div className="header-content">
            <div className="emp-detail-text">
              Employee Details <div className="emp-count">{this.state.employeeArray.length}</div>
            </div>
            <div className="row center button-box">
              <Link to="PayrollForm" className="add-button flex-row-center">
                <img src={addIcon} alt="" /> Add User
              </Link>
            </div>
          </div>
          <div className="table-main">
            <table id="table-diplay" className="table">
            <tbody>
              <Display employeeArray={this.state.employeeArray} />
            </tbody>
    </table>
          </div>
        </div>
      </div>
    );
  }
}