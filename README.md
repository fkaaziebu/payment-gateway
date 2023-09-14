# Payment Gateway Solution

## Folder description
1. __tests__ folder contains test for testing out the functionalities of the payment api

2. __lib__ folder contains the test library I wrote for the test validation

3. __src__ contains the gateway and payment service folders as well as app.ts where the api to call out the getway is implemented

4. __gateway__ contains code for the gateway implementation

5. __pay__ contains the code to interact with the different payment services

## Running test file
To run the test file, you must change directory into where the test file is in the __tests__ folder

Type out these commands in the command line to execute the test file while in the test folder.

```bash
tsc payment-test.ts
node payment-test.js
```

## Take note
_Running the first command generate javascript files out of the typescript files._
_Make sure to take note of the file extensions when running the commands and also change directory to the test folder before running the commands stated_