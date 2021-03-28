BrandBastion_Task

#### Codes and Test Prepared by:
**Mustafa Celik**

**Software Test Engineer**

mustafacelik.eng@gmail.com

linkedin.com/in/mustafacelikeng

------------

#### Manual Testing:
- To see the test scenarios for manual testing:

please go to: **src/test/resources/Manual_Scenarios** 

------------

##### Environment: 
`https://bbtestassignment.now.sh/`

------------

#### System Requirements: 
- Java 8 + JDK
- IntelliJ Cucumber Plugin
- IntelliJ Gherkin Plugin

------------

**- Build Tool:** Maven
**- Test Framework:** Cucumber BBD (with JUnit Assertions)

------------

## Test RUN 

Note: To run the scenarios, use `@login` tag for testing the login functionality, 
use `@logout` tag for testing the logout functionality,  
use `@comments` tag for testing the process button after choosing a classification and a status,
use `@radio` tag for testing all the radio buttons if they are enabled,
and use `@regression` tag for testing all the scenarios in the CukesRunner class/Cucumber Options.

#### 1. Way:
 - Clone the projects
 - Import maven dependencies from POM
 - Go **src/test/java/Runners/CukesRunner** and Run
 - To generate "HTML Maven Cucumber Report" ; 
    > Open Maven right side panel
    > Double Click Project's Lifecycle
    > Click "verify"
                                                  
#### 2. Way:
 - Run from command line invoke `mvn clean verify` 

------------

## Test Reports Locations
1- Cucumber HTML Plugin Reports
**target -> cucumber-html-reports > overview-steps.html** 
(Right Click and Open in any Browser )

2- When you run my project, Cucumber will create automatically online report link. You can click the link
with in the 24 hours and check the all test steps and status. 

------------
 
2021 March;
https://github.com/MustafaCelik-E

### End

------------
