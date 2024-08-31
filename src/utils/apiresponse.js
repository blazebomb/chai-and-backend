class ApiResponse {
  constructor(statusCode, message= "success", data) {
    this.statuscode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400
  }
}