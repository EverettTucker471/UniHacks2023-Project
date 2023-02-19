# Health Data Interface
This website reads and parses an XML file and displays health data to a user. It also computes health statistics such as VO2 max, and target heart rates for various exercise intensities.
## Inspiration
Our inspiration for Health Data Interface was wanting to give people more individualized feedback about their health. We also desired to make it convenient for people to use, so they could continue using their devices and gain additional insights.
## What it does
Our website allows a user to input an XML file and see their health data, along with individualized statistics. XML files are the most common type of exported data for fitness trackers, but they are difficult to read alone. Our website transforms the hard-to-read XML file into an intuitive interface. It also displays statistics for the user, such as maximum heart rate, heart rate reserve, maximum exertion, VO2 Max, and target heart rates for various exercise intensities.
## How we built it
We built our website using a combination of HTML, CSS, and javascript. The HTML handles the website and text, CSS creates the formatting of the website, and javascript parses the XML file and performs calculations with the data. We built the CSS, HTML, and javascript separately and combined them once we finished the code.
## Challenges we ran into
The primary challenge we ran into was the parsing of XML files. The parsing of XML files is format-specific, meaning that you have to know the format of the file before parsing it effectively. To solve this problem, we standardized the XML files using a template and created an algorithm to parse the template.
## Accomplishments that we're proud of
We're proud of the algorithm we created to parse the XML files and extract relevant data. Because we have limited experience in javascript, writing our algorithm took a lot of research and code analysis.
## What we learned
### From our own project
We learned a lot about website development through this project. This knowledge includes the syntax and methods of HTML, Cascading-Style Sheets, and javascript. We also learned about the syntax of XML and Comma-Separated Values (CSV) files. Additionally, we learned valuable teamwork, task distribution, and brainstorming skills by working together.
### From workshops
We attended workshops on topics including Git, Arduino, React, and software debugging tools. These workshops both prepared us to complete our UniHacks project, and readied us for future work on technical applications. 
## What's next for Health Data Interface
### More data and ML
Right now, Health Data Interface can only gather a small amount of data describing heart rate, height, weight, and age. In the future, we want to interpret more data about people's motion, breathing, and heart rate throughout the day. With this data, we could train machine learning models to give people a personalized understanding of their health, and possibly even predict diseases. 

