# ToDo List - Soroco Take Home Assignment
![image](https://github.com/njain794/TODOSoroco/assets/44344547/e845699f-ed40-41c0-be9c-4296c4adbfb3)

# Frontend
- Frontend is based on React with Javascript with Pixel perfect styles using CSS although i have the proficency to build it using other CSS frameworks as well such as Fluent UI / Chakra UI.
- CRUD Operations for API is performed using AXIOS Library.
- React Icons library is used for rendering delete icon in task list.

# Backend
- Backend is based on ExpressJs and NodeJs for creation of CRUD Controllers and Routes.
- Schema Models are made using Mongoose since i am using MongoDB for DB part of this application.
- Additionally cors package was also used to handle cors exceptions while building this application.

# Features
- [CREATE]: User has an option to add a task from the input box on enter trigger from keyboard and also handles the null value exception from this input box.
- Once the task is created it would be visible in the task list below.
- [DELETE]: User has an option to delete this task by clicking on delete button on far right of task details.
- [UPDATE]: User has an option to modify the task details by checking the check box which indicates the overall status of completion of task.
- [READ]: Once the user opens this application in other tabs or in consecutive sessions then the changes would be preserved and can continue on the same data as before.
- Below the task details user also have an additional info. of completed and in progress task with respect to their status 

# Note
- To use this application locally, please refer to packages in package.json files for Backend and Frontend files or install all dependencies by npm i
- Additionally i have also removed MongoDB secret from .env file which is also required, so you can create a database in any serverless cluster present on MongoDB Atlas and replace it by your own secret.  
