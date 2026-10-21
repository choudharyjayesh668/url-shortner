# URL Shortener 
`https://url-shortner-seven-blush-49.vercel.app/`
A full-stack URL shortener application that converts long URLs into short, shareable links. The application allows users to generate short URLs and redirect visitors to their original destinations.

## Features

- Generate short URLs from long URLs.
- Redirect short links to their original URLs.
- Store URL mappings in MongoDB.
- Rate limiting to help prevent excessive requests.
- RESTful API built with Express.js.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** HTML, CSS, JavaScript ,Reactjs
- **Libraries:** nanoid, express-rate-limit

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB
- Git

### Clone the Repository

```bash
git clone `https://github.com/choudharyjayesh668/url-shortner`
cd URL-Shortener
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and configure the required variables.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

Use the environment variable names expected by your application. Never commit your `.env` file or expose database credentials.

### Run the Application

```bash
npm start
```

If your project uses a development script, you can run:

```bash
npm run dev
```

## How It Works

1. The user submits a long URL.
2. The application generates a unique short identifier.
3. The URL mapping is stored in MongoDB.
4. When someone visits the short URL, the server retrieves the original URL and redirects the visitor.

## Project Structure

```text
URL-Shortener/
├── models/
├── routes/
├── controllers/
├── views/
├── public/
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

The actual folder structure may differ depending on the implementation.

## Future Improvements

- Add user authentication.
- Track link visits and analytics.
- Add URL expiration.
- Create a dashboard to manage shortened URLs.

## License

This project is intended for learning and demonstrating full-stack web development skills.
