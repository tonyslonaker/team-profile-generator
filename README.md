# team-profile-generator

# Description
Team Profile Generator is a command-line-input application that is run in Node. It requests information from the user about members of a team and generates an HTML file.  To run the application, a user must perform an npm install, which installs the required dependencies.

Once launched, the user is asked to describe the first member of the team.  The user enters the team member's name, selects that member's role from a list (options include "Systems Engineer," "Intern," and "Manager), enters the member's ID (any string), enters the member's email address, and then must enter another piece of information that will differ depending on what role was selected.  

# Technologies Used
The app was created using (OOP) Object-Oriented Programming. It uses classes and constructors to create a "team member" based on the information entered by the user.  The app is run with Node.js, and uses both the inquirer & fs node modules.  

The app uses Test-Driven Development.  Jest is used to perform tests on all the class constructors to ensure that they behave as expected.  The fs node module is used to generate a html file.