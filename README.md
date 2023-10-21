# Assignments

This repository contains three different assignments, each designed to address specific tasks:
**Speed Generator, Net Salary Generator, and Student Grade Generator.**


**1.Student Grade Generator**

**Description**

The Student Grade Generator is a simple command-line tool that allows instructors to input student scores and generate their grades based on a specified grading scale. It's a handy utility for educators looking to automate the grading process and maintain consistency.

**Set Up Instructions**

To use the Student Grade Generator, follow these setup instructions:

**Clone the Repository**: 

git clone git@github.com:arnoldkaroki/wk1codechallenge.git

**Navigate to the Project Directory**:

cd student-grade-generator

**Install Dependencies and Run Test (if required)**:

npm install

npm test

**Run the Program**:

node grade-generator.js

**Follow the On-Screen Instructions**:

The program will guide you through the process of inputting student scores and configuring the grading scale. You can customize the grading scale to suit your specific needs.

**View the Generated Grades**:

Once you've input all the student scores, the program will display the calculated grades based on the grading scale you provided.

**Exit the Program**:

After viewing the grades, you can exit the program by following the on-screen instructions.

**Author**:

Arnold Karoki.


**2.Speed Demerit Generator**

**Description**

The Speed Demerit Calculator is a simple JavaScript program that helps determine demerit points for drivers based on their speed while driving. It checks if the speed is above a specified speed limit, and if so, calculates demerit points according to a predefined rule: one demerit point for every 5 km/h over the speed limit. The program provides feedback to the driver, informing them whether they are within the speed limit, how many demerit points they've earned, and whether their license might be suspended if they accumulate too many points.

**Set Up Instructions:**

To use the Speed Demerit Calculator, follow these setup instructions:

**Clone the Repository:**

git clone git@github.com:arnoldkaroki/wk1codechallenge.git

**Navigate to the Project Directory:**


cd speed-demerit-calculator

**Run the Program:**

Open the program in a text editor or integrated development environment (IDE) and modify the value of carSpeed to the desired speed you want to calculate demerit points for.

const carSpeed = 80; // Change the speed value

**Run the Program:**

node speed-demerit-calculator.js

**View the Result:**

The program will display whether the speed is "Ok" or the number of demerit points. If the driver accumulates 12 or more points, the program will inform them that their license is "suspended."

**Repeat and Customize:** 

You can run the program multiple times with different speed values by changing the carSpeed variable to simulate different scenarios.

**Exit the Program:**

After viewing the result, you can exit the program.

**Author:** Arnold Karoki.


