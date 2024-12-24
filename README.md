# Web based Micro Loan management Application


# Getting started
- Clone the repository

- Install dependencies
```
cd Challenges-jali-group
npm install
```
- Build and run the project
```
npm run dev
```

##Technologies used
   ```
    -*Backend*: Node.js/ Express
    -*Database*: MongoDB with Mongoose
    -*Authentication*: `bcryptjs` for hashing password and `passport` for authentication
    -*Testing*: Mocha
  ```

### Running tests using NPM Scripts
````
npm run test

````
Test files are created under tests folder.



## ROUTES FOR AUTHENTICATION, FILES AND DIRECTORY UPLOADS

#### 1. **Sign Up** (`POST`)
Use this route to create a new user account.
    
    http://localhost:3000/api/users/auth/login 
    
**Request Body**:  
```json
    {   
        "first_name": "test",
        "last_name": "test@gmail.com",
        "password": "Password123",
        "telephone": "123233443"
    }
```


#### 2. **Login ** (`POST`)
Use this route to Login.
    
    http://localhost:3000/api/users/auth/signup 
    
**Request Body**:  
```json
    {   
        "telephone": "123233443",
        "password": "Password123",
    }
```

### 3. **Loan** (`POST`)
use this route to apply for Loan
    
    http://localhost:3000/api/applyloan 

### 4. **View applications and decisions** (`GET,PATCH`)
use this route to view single applications
    
    http://localhost:3000/api/applications/:id

The following route is used to retrieve all applications
    http://localhost:3000/api/applications


### 5. **Decisions** (`PATCH`)
This route is used to APPROVE OR DECLINE

    http://localhost:3000/api/applications/

## Contributors
   - [Ruth Uwamahoro](https://github.com/Ruthuwamahoro)
