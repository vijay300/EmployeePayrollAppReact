import AxiosService from "./AxiosService";


const service = new AxiosService();
export default class EmployeeService {

    employeeRegistration(requestData) {
        return service.Post('/create', requestData);
    }

    getAllEmployeeData() {
        return service.Get();
    }

    deleteEmployeeData(data) {
        return service.Delete('/delete/' + data);
    }

    updateEmployeeData(requestData) {
        return service.Put('/update/1', requestData);
    }
}