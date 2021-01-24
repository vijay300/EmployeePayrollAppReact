import AxiosService from "./AxiosService";


const service = new AxiosService();
export default class EmployeeService {

    employeeRegistration(requestData) {
        return service.Post('/create', requestData);
    }
}