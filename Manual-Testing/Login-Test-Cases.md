# Login Test Cases

## Objective
To verify the functionality, validation, usability, security, and error handling of the Login module.

## Test Cases

| TC ID | Test Scenario | Test Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC_001 | Verify login with valid credentials | Enter valid username and password → Click Login | User should login successfully and navigate to dashboard | High |
| TC_002 | Verify login with invalid username | Enter invalid username and valid password → Click Login | Appropriate error message should be displayed | High |
| TC_003 | Verify login with invalid password | Enter valid username and invalid password → Click Login | Appropriate error message should be displayed | High |
| TC_004 | Verify login with both invalid credentials | Enter invalid username and password → Click Login | Login should fail and error message should be displayed | High |
| TC_005 | Verify login with blank username | Leave username blank → Enter valid password → Click Login | Username required validation should be displayed | High |
| TC_006 | Verify login with blank password | Enter valid username → Leave password blank → Click Login | Password required validation should be displayed | High |
| TC_007 | Verify login with both fields blank | Leave username and password blank → Click Login | Required field validations should be displayed | High |
| TC_008 | Verify password masking | Enter password in password field | Password should be displayed in masked format | Medium |
| TC_009 | Verify password visibility toggle | Enter password → Click visibility icon | Password should be displayed/hidden accordingly | Medium |
| TC_010 | Verify Forgot Password link | Click Forgot Password | User should be redirected to password recovery page | Medium |
| TC_011 | Verify Login button functionality | Enter valid credentials → Click Login | Login request should be triggered | High |
| TC_012 | Verify login using Enter key | Enter valid credentials → Press Enter | User should login successfully | Medium |
| TC_013 | Verify username with leading spaces | Enter username with leading spaces and valid password | Application should handle spaces according to requirements | Medium |
| TC_014 | Verify username with trailing spaces | Enter username with trailing spaces and valid password | Application should handle spaces according to requirements | Medium |
| TC_015 | Verify password with spaces | Enter password containing spaces | Application should validate password according to requirements | Medium |
| TC_016 | Verify case sensitivity of username | Enter username with different letter case | Application should behave according to username case-sensitivity rules | Medium |
| TC_017 | Verify password case sensitivity | Enter password with different letter case | Login should fail if password case is incorrect | High |
| TC_018 | Verify maximum username length | Enter username exceeding allowed character limit | Application should restrict or validate input appropriately | Medium |
| TC_019 | Verify maximum password length | Enter password exceeding allowed character limit | Application should restrict or validate input appropriately | Medium |
| TC_020 | Verify special characters in username | Enter username containing special characters | Application should validate input appropriately | Medium |
| TC_021 | Verify special characters in password | Enter valid password containing special characters | User should login if password is valid | Medium |
| TC_022 | Verify SQL injection input | Enter SQL injection-like input in username/password | Application should reject malicious input and login should fail | High |
| TC_023 | Verify XSS input | Enter script-like input in login fields | Script should not execute and input should be handled safely | High |
| TC_024 | Verify multiple failed login attempts | Enter incorrect credentials multiple times | Application should apply configured security controls such as lockout/captcha | High |
| TC_025 | Verify error message for invalid credentials | Enter invalid credentials → Click Login | Error message should be clear and user-friendly | High |
| TC_026 | Verify login page UI | Open Login page | Username, password, Login and required links should be properly displayed | Medium |
| TC_027 | Verify tab navigation | Use Tab key to navigate through login elements | Focus should move in logical order | Medium |
| TC_028 | Verify Login button state | Open login page without entering credentials | Button should behave according to defined UI requirements | Medium |
| TC_029 | Verify login after browser refresh | Login successfully → Refresh browser | User session should behave according to session management requirements | High |
| TC_030 | Verify logout and back button behavior | Login → Logout → Press browser Back button | User should not access authenticated pages without login | High |
| TC_031 | Verify session timeout | Login → Remain inactive until session expires | User should be logged out after configured timeout | High |
| TC_032 | Verify login over HTTPS | Open login page and inspect URL | Login page should use HTTPS | High |
| TC_033 | Verify password is not visible in URL | Login with valid credentials | Password should never appear in browser URL | High |
| TC_034 | Verify login on different browsers | Test login on Chrome, Firefox and Edge | Login functionality should work consistently | Medium |
| TC_035 | Verify login on different screen sizes | Test login on desktop, tablet and mobile resolutions | Login page should be responsive and usable | Medium |
