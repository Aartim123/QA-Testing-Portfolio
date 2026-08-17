# Login Test Cases

## Objective
To verify the login functionality of the application.

| TC ID | Test Scenario | Test Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC_001 | Verify login with valid credentials | Enter valid username and password, then click Login | User should login successfully | High |
| TC_002 | Verify login with invalid password | Enter valid username and invalid password | Error message should be displayed | High |
| TC_003 | Verify login with invalid username | Enter invalid username and valid password | Error message should be displayed | High |
| TC_004 | Verify login with blank username | Leave username blank and enter password | Username validation should be displayed | High |
| TC_005 | Verify login with blank password | Enter username and leave password blank | Password validation should be displayed | High |
| TC_006 | Verify login with both fields blank | Leave username and password blank | Required field validation should be displayed | High |
| TC_007 | Verify password masking | Enter password in password field | Password should be masked | Medium |
| TC_008 | Verify Forgot Password link | Click Forgot Password | Password recovery page should open | Medium |
| TC_009 | Verify login button | Enter valid credentials and click Login | User should be redirected to dashboard | High |
| TC_010 | Verify login using Enter key | Enter valid credentials and press Enter | User should login successfully | Medium |
