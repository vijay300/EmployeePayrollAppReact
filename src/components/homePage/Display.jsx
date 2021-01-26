import { withRouter } from "react-router-dom"
import './HomePage.css';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import './HomePage.css';
import EmployeeService from "../../services/EmployeeService";

const service = new EmployeeService();

const Display = (props) => {

  const deleteEmployee = (id) => { 
    console.log(id);
    service.deleteEmployeeData(id).then(() => {
      console.log("deleted successfully");
    }).catch(err => {
      console.log(err);
    })
  }

  const updateEmployee = (id) => {
    service.updateEmployeeData(id).then()
  }

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
          props.employeeArray && props.employeeArray.map((element, ind) => (
            <tr key={ind}>
              <td><img className="profile" src={element.profilePic} alt="imge" /></td>
              <td>{element.name}</td>
              <td>{element.gender}</td>
              <td>{element.departments && element.departments.map(dept => (
                <div className="dept-label">{dept}</div>
              ))}</td>
              <td>{element.salary}</td>
              <td>{element.startDate}</td>
              { <td><img onClick={() => deleteEmployee(element.employeeId)} src={deleteIcon} alt="delete" />
                  <img src={editIcon} alt="edit" />
              </td> }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
export default withRouter(Display);