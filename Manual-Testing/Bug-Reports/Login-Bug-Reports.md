# Login Bug Reports

## Objective
Sample defect reports demonstrating bug identification, documentation, severity, priority, and expected behavior.

## Bug Report 01

| Field | Details |
|---|---|
| Bug ID | BUG_001 |
| Title | Login button remains enabled when mandatory fields are blank |
| Module | Login |
| Severity | Medium |
| Priority | High |
| Environment | Web |
| Preconditions | User is on Login page |
| Steps to Reproduce | 1. Open Login page<br>2. Leave Username blank<br>3. Leave Password blank<br>4. Observe Login button |
| Expected Result | Login button should remain disabled or proper validation should be displayed |
| Actual Result | Login button remains enabled and allows submission |
| Status | Open |

## Bug Report 02

| Field | Details |
|---|---|
| Bug ID | BUG_002 |
| Title | Password is displayed in plain text |
| Module | Login |
| Severity | High |
| Priority | High |
| Environment | Web |
| Preconditions | User is on Login page |
| Steps to Reproduce | 1. Open Login page<br>2. Enter password<br>3. Observe password field |
| Expected Result | Password should be masked by default |
| Actual Result | Password is displayed as plain text |
| Status | Open |

## Bug Report 03

| Field | Details |
|---|---|
| Bug ID | BUG_003 |
| Title | User can access dashboard using browser Back button after logout |
| Module | Authentication |
| Severity | Critical |
| Priority | High |
| Environment | Web |
| Preconditions | User has valid login credentials |
| Steps to Reproduce | 1. Login successfully<br>2. Navigate to dashboard<br>3. Logout<br>4. Click browser Back button |
| Expected Result | User should not be able to access authenticated pages after logout |
| Actual Result | Dashboard page is displayed |
| Status | Open |

## Bug Report 04

| Field | Details |
|---|---|
| Bug ID | BUG_004 |
| Title | Invalid credentials error message is not displayed |
| Module | Login |
| Severity | Medium |
| Priority | High |
| Environment | Web |
| Preconditions | User is on Login page |
| Steps to Reproduce | 1. Enter invalid username<br>2. Enter invalid password<br>3. Click Login |
| Expected Result | Clear error message should be displayed |
| Actual Result | User remains on login page without any error message |
| Status | Open |

## Bug Report 05

| Field | Details |
|---|---|
| Bug ID | BUG_005 |
| Title | Login page is not responsive on mobile screen |
| Module | Login UI |
| Severity | Medium |
| Priority | Medium |
| Environment | Mobile Browser |
| Preconditions | Login page is opened on mobile device |
| Steps to Reproduce | 1. Open Login page on mobile<br>2. Observe username, password and Login button |
| Expected Result | All elements should be properly aligned and accessible |
| Actual Result | Login button is partially hidden and requires horizontal scrolling |
| Status | Open |
