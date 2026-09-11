# API Testing Test Cases

## Objective
To verify API functionality, request/response validation, status codes, authentication, and error handling.

| TC ID | Test Scenario | Test Steps | Expected Result | Priority |
|---|---|---|---|---|
| API_TC_001 | Verify API with valid GET request | Send GET request with valid endpoint | Response should be received successfully | High |
| API_TC_002 | Verify GET API status code | Send valid GET request | Status code should be 200 OK | High |
| API_TC_003 | Verify POST API with valid data | Send POST request with valid payload | Resource should be created successfully | High |
| API_TC_004 | Verify POST API status code | Send valid POST request | Status code should be 201 Created | High |
| API_TC_005 | Verify PUT API | Send PUT request with valid data | Existing resource should be updated | High |
| API_TC_006 | Verify DELETE API | Send DELETE request for valid resource | Resource should be deleted successfully | High |
| API_TC_007 | Verify API with invalid endpoint | Send request to invalid endpoint | API should return 404 Not Found | Medium |
| API_TC_008 | Verify API with missing mandatory field | Remove mandatory field from request body | API should return validation error | High |
| API_TC_009 | Verify API with invalid data type | Send incorrect data type in payload | API should reject invalid data | High |
| API_TC_010 | Verify unauthorized API request | Send request without valid authentication | API should return 401 Unauthorized | High |
| API_TC_011 | Verify forbidden API request | Send request with insufficient permissions | API should return 403 Forbidden | High |
| API_TC_012 | Verify response content type | Send valid API request | Response should have expected content type | Medium |
| API_TC_013 | Verify response schema | Send valid API request | Response should match expected schema | High |
| API_TC_014 | Verify response time | Send valid API request | Response should be returned within acceptable time | Medium |
| API_TC_015 | Verify duplicate record handling | Send same POST request multiple times | API should handle duplicate data according to requirements | Medium |
| API_TC_016 | Verify invalid authentication token | Send request with invalid token | API should reject the request | High |
| API_TC_017 | Verify expired authentication token | Send request with expired token | API should return authentication error | High |
| API_TC_018 | Verify empty request body | Send POST request without body | API should return appropriate validation error | Medium |
| API_TC_019 | Verify special characters in request | Send special characters in input fields | API should handle input safely | Medium |
| API_TC_020 | Verify server error handling | Trigger server-side failure condition | API should return appropriate 5xx response | High |
