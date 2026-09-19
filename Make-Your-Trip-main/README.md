
# Make Your Trip

Make Your Trip is a full-stack travel accommodation application. Users can browse stays, create and manage listings, upload listing images, register or sign in, and leave reviews and ratings.

## Features

- Browse listing cards and detailed property pages
- Create, edit, and delete listings
- Upload listing images through Cloudinary
- Local authentication with Passport.js
- Optional Google OAuth sign-in
- Reviews and ratings with protected create and delete actions
- MongoDB-backed sessions and flash messages
- Joi validation and centralized error pages

## Tech Stack

- Node.js and Express
- EJS and EJS Mate for server-rendered views
- MongoDB with Mongoose
- Passport Local and Google OAuth 2.0
- Cloudinary and Multer for image uploads
- Bootstrap, custom CSS, and vanilla JavaScript

## Requirements

- Node.js 18 or newer
- A MongoDB Atlas database
- A Cloudinary account for listing images
- Google OAuth credentials if Google sign-in is enabled

## Getting Started

1. Clone the repository and enter the project directory.

	```bash
	git clone <repository-url>
	cd Make-Your-Trip-main
	```

2. Install dependencies.

	```bash
	npm install
	```

3. Create a `.env` file in the project root:

	```env
	ATLASDB_URL=mongodb+srv://<username>:<password>@<cluster>/<database>
	SECRET=replace-with-a-long-random-session-secret
	CLOUD_NAME=your-cloudinary-cloud-name
	CLOUD_API_KEY=your-cloudinary-api-key
	CLOUD_API_SECRET=your-cloudinary-api-secret
	GOOGLE_CLIENT_ID=your-google-client-id
	GOOGLE_CLIENT_SECRET=your-google-client-secret
	```

	`GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are only needed for Google OAuth. Configure the OAuth callback URL as `http://localhost:8080/auth/google/callback` during local development.

4. Start the application.

	```bash
	node app.js
	```

5. Open [http://localhost:8080](http://localhost:8080). The root route redirects to `/listings`.

## Project Structure

```text
controllers/   Request handlers for listings, reviews, and users
models/        Mongoose models
routes/        Express route modules
views/         EJS pages and layouts
public/        CSS and browser-side JavaScript
utils/         Async wrapper and application errors
app.js         Main Express application
cloudConfig.js Cloudinary configuration
schema.js      Joi validation schemas
```

## Available Commands

The project does not currently define npm scripts. Use these commands directly:

```bash
npm install
node app.js
```

`index.js` is a small MongoDB connection and listing smoke-test server. The complete web application is started with `app.js`.

## Notes

- Never commit `.env` or service credentials.
- The application expects the MongoDB connection string in `ATLASDB_URL`.
- The server listens on port `8080` by default.
