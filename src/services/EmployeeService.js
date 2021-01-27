import AxiosService from "./AxiosService";


const service = new AxiosService();
export default class EmployeeService {

    employeeRegistration(requestData) {
        return service.Post('/create', requestData);
    }

    getAllEmployeeData() {
        return service.Get('/');
    }

    deleteEmployeeData(data) {
        return service.Delete('/delete/' + data);
    }

    updateEmployeeData(id, requestData) {
        return service.Put('/update/' + id, requestData);
    }

    getEmployeeById(id) {
        return service.Get('/get/' + id);
    }
}