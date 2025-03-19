To use this Application

Register a user on this endpoint:POST http://localhost:5000/auth/register
in the body:
           {
             "name":"marq",
             "email":"marquiesnissan@gmail.com",
             "password":"12345"
           }
You will get a server response as
           {
    "success": true,
    "message": "User Register Successfully",
    "user": {
        "email": "marquiesnissan@gmail.com",
        "name": "marq",
        "password": "$2a$10$Vt0.Jtfat8Qx9L2Z1/LoWOMqDQthaU//zgq2AlU/oNxz4UmOPqWbW",
        "isVerified": false,
        "verficationToken": "511954",
        "verficationTokenExpiresAt": "2025-03-20T17:57:40.477Z",
        "_id": "67db0594aeb8215c89bde53d",
        "lastLogin": "2025-03-19T17:57:40.485Z",
        "createdAt": "2025-03-19T17:57:40.491Z",
        "updatedAt": "2025-03-19T17:57:40.491Z",
        "__v": 0
    }
}
Verify the user on this endpoint:POST http://localhost:5000/auth/verifyemail
in the body:
           {
             "code":"511954"
           } 
You will get a server response as 
           {
             "success": true,
             "message": "Email Verifed Successfully"
           }                  
