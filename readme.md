# Email Verification using Nodemailer

## Overview
This application provides user authentication functionality, including user registration and email verification.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Register User
**Endpoint:**
```
POST http://localhost:5000/auth/register
```

**Request Body:**
```json
{
  "name": "marq",
  "email": "marqueisnissan@gmail.com",
  "password": "12345"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User Register Successfully",
  "user": {
    "email": "marqueisnissan@gmail.com",
    "name": "marq",
    "isVerified": false,
    "verificationToken": "511954",
    "verificationTokenExpiresAt": "2025-03-20T17:57:40.477Z",
    "lastLogin": "2025-03-19T17:57:40.491Z",
    "createdAt": "2025-03-19T17:57:40.491Z",
    "updatedAt": "2025-03-19T17:57:40.491Z"
  }
}
```

---

### Verify Email
**Endpoint:**
```
POST http://localhost:5000/auth/verifyemail
```

**Request Body:**
```json
{
  "code": "511954"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email Verified Successfully"
}
```

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, please reach out to tulsi.gautam0000@gmail.com

                 
