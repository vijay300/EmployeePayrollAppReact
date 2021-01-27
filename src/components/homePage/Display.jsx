import { Link } from "react-router-dom"
import React from 'react';
import './HomePage.css';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import './HomePage.css';
import EmployeeService from "../../services/EmployeeService";
import profile from "../assets/profile-images/Ellipse -3.png"

const service = new EmployeeService();

export default class Display extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeArray: [],
      update: ''
    }

  }

  deleteEmployee = (id) => { 
    console.log(id);
    service.deleteEmployeeData(id).then(() => {
      console.log("deleted successfully");
      this.setState({update: "updates"});
      this.props.callUpdate();
    }).catch(err => {
      console.log(err);
    })
  }

  updateEmployee = (data) => {
    localStorage.setItem('id', data);
    console.log(data);

  }

  render () {
    return (
      <table id="table-diplay" className="table">
        <tbody>
          <tr key={-1}>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
          </tr>
          {
            this.props.employeeArray && this.props.employeeArray.map((element, ind) => (
              <tr key={element.employeeId}>
                <td><img className="profile" src={element.profilePic} alt="img" /></td>
                <td>{element.name}</td>
                <td>{element.gender}</td>
                <td>{element.departments && element.departments.map(dept => (
                  <div className="dept-label">{dept}</div>
                ))}</td>
                <td>{element.salary}</td>
                <td>{element.startDate}</td>
                { <td><img onClick={() => this.deleteEmployee(element.employeeId)} src={deleteIcon} alt="delete" />
                    <Link to="Update">
                      <img onClick={() => this.updateEmployee(element.employeeId)} src={editIcon} alt="edit" />
                    </Link>
              
                </td> }
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}