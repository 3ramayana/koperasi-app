## 1. Project Description

Application for recording customer savings and loan. This is web-based application for recording customer transactions for savings and loans at Pendidikan Sains Averos Foundation cooperation with customers being employees of the foundation.

Link to the video: [https://youtu.be/E29vdPhcsZ0](https://youtu.be/E29vdPhcsZ0)

Link to project repository: [koperasi-app](https://github.com/3ramayana/koperasi-app)

## 2. Requirements

Prepare the installed application requirements first.

1. Install [Node.js](https://nodejs.org/en)
   in this project using Node.js version 20.10.0

## 3. Getting Started

1. Visit the project repository using the following link: https://github.com/3ramayana/koperasi-app
2. Download the project by clicking the green button then selecting Download ZIP
3. Extract the downloaded project zip file
4. Open project using code editor (VSCode)
5. Open a terminal in a code editor with the shortcut `ctrl+backticks`
6. Run the following command to install dependencies and devDependencies in the project. Wait until it's finished
   ```sh
   npm install
   ```
7. Run the following command to run the development server
   ```sh
   npm run dev
   ```
8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![alt text](screenshot/customers.png)

## 4. Prepare Database on railway

1. Create account in railway
2. Create new project then select Provision PostgreSQL
3. After initialization project finish, Select project and copy `DATABASE_URL` variable.
   ![alt text](screenshot/postgres_project.png)
4. Create `.env` file in main project directory and paste `DATABASE_URL` as a variable.
   ![alt text](screenshot/database_url.png)
5. Run the following command
   ```sh
   npx prisma generate
   npx prisma db push
   ```
   for create database model on railway based on`./prisma/schema.prisma` file.
6. Add initial data at `tblSchool` before add data school feature is created. To do this, run following command to open prisma studio

   ```sh
   npx prisma studio
   ```

   Then select table `tblSchool`, add record and save changes. Example initial data as following image
   ![alt text](screenshot/tblSchool_initial.png)

7. Reload [http://localhost:3000](http://localhost:3000)

## 4. QnA

1.  **Q: Does admin need to login?**

    _A: Yes, admin needs to log in to make transactions and manage customer data._

2.  **Q: Can users register an account??**

    _A: No, users cannot register an account. Admin accounts are created by superadmin._
