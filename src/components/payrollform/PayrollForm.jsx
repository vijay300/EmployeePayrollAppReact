import profile1 from "../../assets/profile-images/Ellipse -3.png";
import profile2 from "../../assets/profile-images/Ellipse -8.png";
import profile3 from "../../assets/profile-images/Ellipse -1.png";
import profile4 from "../../assets/profile-images/Ellipse -7.png";
import logo from "../../assets/images/logo.png";
import '../payrollform/PayrollForm.css';
import { withRouter } from 'react-router-dom';
import { useState } from "react";
import EmployeeService from '../../services/EmployeeService';

const service = new EmployeeService();

const PayrollForm = (props) => {

  let inititalValue = {
    name: '',
    profileArray: [
      { url: profile1},
      { url: profile2},
      { url: profile3},
      { url: profile4},
    ],
    allDepartment: [
      'HR', 'Sales', 'Finance', 'Engineer', 'Others'
    ],
    departmentValue: [],
    gender: '',
    salary: '',
    day: '1',
    month: 'Jan',
    year: '2020',
    startDate: '',
    notes: '',
    id: '',
    profileUrl: '',
    isUpdate: false,
    error: {
      department: '',
      name: '',
      gender: '',
      salary: '',
      profileUrl: '',
      startDate: ''
    }
  }
  const [formValue, setForm] = useState(inititalValue);

  const changeValue = (event) => {
    setForm({...formValue, [event.target.name]: event.target.value})
  }

  const onCheckChange = (name) => {
    let index = formValue.departmentValue.indexOf(name);
    let checkArray = [...formValue.departmentValue]
    if (index > -1)
      checkArray.splice(index, 1)
    else  
      checkArray.push(name);
    setForm({...formValue, departmentValue: checkArray}); 
  }

  const getChecked = (name) => {
    return formValue.departmentValue && formValue.departmentValue.includes(name);
  }

  const validData = async () => {
    let isError = false;
    let error = {
      department: '',
      name: '',
      gender: '',
      salary: '',
      profileUrl: '',
      startDate: ''
    }
    if (formValue.name.length < 1) {
      error.name = 'name is required field'
      isError = true;
    }
    if (formValue.gender.length < 1) {
      error.gender = 'gender is required field'
      isError = true;
    }
    if (formValue.salary.length < 1) {
      error.salary = 'salary is required field'
      isError = true;
    }
    if (formValue.profileUrl.length < 1) {
      error.profileUrl = 'profileUrl is required field'
      isError = true;
    }
    if (formValue.department.length < 1) {
      error.department = 'department is required field'
      isError = true;
    }
    await setForm({...formValue, error: error})
    return isError;
  }

  const save = async (event) => {
    event.preventDefault();
    let object = {
      name: formValue.name,
      salary: formValue.salary,
      gender: formValue.gender,
      startDate: formValue.day + " " + formValue.month + " " + formValue.year,
      note: formValue.notes,
      profilePic: formValue.profileUrl,
      departments: formValue.departmentValue
    }

    service.employeeRegistration(object).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
    console.log(this.state);
  }

  const reset = () => {
    setForm({...inititalValue, id: formValue.id, isUpdate: formValue.isUpdate});
  }

  return (
    <div className="payroll-main">
      <header className="header-content header">
        <div className="logo-content">
          <img src={logo} alt="" />
          <div>
            <span className="emp-text">EMPLOYEE</span><br />
            <span className="emp-text emp-payroll"> PAYROLL</span>
          </div>
        </div>
      </header>
      <div className="form-content">
        <form className="form" action="#" onSubmit>
          <div className="form-head">Employee Payroll</div>
          <div className="row-content">
            <label className="label text" htmlFor="name">Name</label>
            <input className="input" type="text" id="name" name="name" value={formValue.name} onChange={changeValue} placeholder="Your name..." />
          </div>
          <div className="error"> {formValue.error.name} </div>
          <div className="row-content">
            <label className="label text" htmlFor="profileUrl">Profile Image</label>
            <div className="profile-radio-content">
              <label>
                <input type="radio" checked={formValue.profileUrl==='../assets/profile-images/Ellipse -3.png'} name="profileUrl"
                  value="../assets/profile-images/Ellipse -3.png" onChange={changeValue} />
                <img className="profile" src={profile1} alt=""/>
              </label>
              <label>
                <input type="radio" checked={formValue.profileUrl==='../assets/profile-images/Ellipse -1.png'} name="profileUrl"
                  value="../assets/profile-images/Ellipse -1.png" onChange={changeValue} />
                <img className="profile" src={profile2} alt=""/>
              </label>
              <label>
                <input type="radio" checked={formValue.profileUrl==='../assets/profile-images/Ellipse -8.png'} name="profileUrl"
                  value="../assets/profile-images/Ellipse -8.png" onChange={changeValue} />
                <img className="profile" src={profile3} alt=""/>
              </label>
              <label>
                <input type="radio" checked={formValue.profileUrl==='../assets/profile-images/Ellipse -7.png'} name="profileUrl"
                  value="../assets/profile-images/Ellipse -7.png" onChange={changeValue} />
                <img className="profile" src={profile4} alt=""/>
              </label>
            </div>
          </div>
          <div className="error"> {formValue.error.profileUrl} </div>
          <div className="row-content">
            <label className="label text" htmlFor="gender">Gender</label>
            <div>
              <input type="radio" id="male" onChange={changeValue} name="gender" value="male" />
              <label className="text" htmlFor="male">Male</label>
              <input type="radio" id="female" onChange={changeValue} name="gender" value="female" />
              <label className="text" htmlFor="female">Female</label>
            </div>
          </div>
          <div className="error"> {formValue.error.gender} </div>
          <div className="row-content">
            <label className="label text" htmlFor="department">Department</label>
            <div>
              {formValue.allDepartment.map(item => (
                <span key={item}>
                  <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item}
                    defaultChecked={() => getChecked(item)} value={item} />
                  <label className="text" htmlFor={item}>{item}</label>
                </span>
              ))}
            </div>
          </div>
          <div className="error"> {formValue.error.department} </div>
          <div className="row-content">
            <label className="label text" htmlFor="salary">Salary</label>
            <input className="input" type="number" onChange={changeValue} id="salary" value={formValue.salary} name="salary" placeholder="Salary" />
          </div>
          <div className="error"> {formValue.error.salary} </div>
          <div className="row-content">
            <label className="label text" htmlFor="startDate">Start Date</label>
            <div>
              <select onChange={changeValue} id="day" name="day"> 
                <option value="1">1</option>
                <option value="2">2</option>  
              </select>
              <select onChange={changeValue} id="month" name="month"> 
                <option value="Jan">January</option>
                <option value="Feb">Febraury</option>  
              </select>
              <select onChange={changeValue} id="year" name="year"> 
                <option value="2021">2021</option>
                <option value="2020">2020</option>  
              </select>
            </div>
          </div>
          <div className="error"> {formValue.error.startDate} </div>
          <div className="row-content">
            <label className="label text" htmlFor="notes">Notes</label>
            <textarea onChange={changeValue} id="notes" value={formValue.notes} className="input" name="notes"
               style={{height: '100%' }}></textarea>
          </div>

          <div className="button-content">
            <a routerLink="" className="resetButton button cancelButton">Cancel</a>
            <div className="submit-reset">
              <button type="submit" className="button submitButton" id="submitButton" onSubmit={save}>{formValue.isUpdate ? 'Update' : 'Submit'} </button>
              <button type="button" onClick={reset} className="resetButton button">Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default withRouter(PayrollForm);