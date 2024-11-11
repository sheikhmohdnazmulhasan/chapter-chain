# Library Management System API

## Project Description

This project is a backend API for a Library Management System that allows library staff and members to manage books, memberships, and borrowing activities. It provides CRUD operations for books and members, as well as functionality for borrowing and returning books.

## Technology Stack & Packages

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Date FNS

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/sheikhmohdnazmulhasan/chapter-chain.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your PostgreSQL database and update the connection string in the `.env` file.
4. Run Prisma migrations:
   ```
   npx prisma migrate dev
   ```
5. Start the server:
   ```
   npm run dev
   ```

## Key Features & Functionality

1. Book Management:
   - Create, read, update, and delete books
   - Track total and available copies
2. Member Management:
   - Create, read, update, and delete library members
3. Borrowing System:
   - Borrow and return books
   - Track borrow records
4. Overdue Book Tracking:
   - List books that are past their due date
5. Error Handling:
   - Consistent error response structure

## API Endpoints

- Books:
  - POST /api/books
  - GET /api/books
  - GET /api/books/:bookId
  - PUT /api/books/:bookId
  - DELETE /api/books/:bookId
- Members:
  - POST /api/members
  - GET /api/members
  - GET /api/members/:memberId
  - PUT /api/members/:memberId
  - DELETE /api/members/:memberId
- Borrow/Return:
  - POST /api/borrow
  - POST /api/return
  - GET /api/borrow/overdue

## Future Improvements

- Implement user authentication and authorization
- Add pagination for book and member lists
- Create a front-end interface for easier management
