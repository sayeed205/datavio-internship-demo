# DATAVIO Internship Assignment

## Run locally

```bash
$ git clone https://github.com/sayeed205/datavio-internship-demo.git
$ cd datavio-internship-demo
$ pnpm install / yarn / npm i (preferred pnpm)
```

Add a `.env` file in the root directory and add the following:

```bash
MONGO_URI=<your_mongoDB_Atlas_uri_with_credentials>
JWT_SECRET=<your_secret_key>
JWT_EXPIRES_IN=<your_expires_in> // default 7d
```

Then run the following commands:

```bash
$ pnpm build / yarn build / npm run build
$ pnpm start / yarn start / npm start
```

It will start the server on `http://localhost:5000`.
You should see this message in the console:

```bash
> node dist/server.js

MongoDB connected
⚡️[server]: Server is running at `http://localhost:5000`
```

## API Documentation

### Authentication

#### Signup

```http
POST /api/auth/signup

Content-Type: application/json

{
  "email": "abcd@example.com",
  "password": "Abcd@1234"
}
```

It will return a JWT token which will be used for authentication.

```bash
{
    "ok": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

```

#### Login

```http
POST /api/auth/login

Content-Type: application/json

{
    "email": "abcd@example.com",
    "password": "Abcd@1234"
}
```

It will return a JWT token which will be used for authentication.

```bash
{
    "ok": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

```

### Flipkart

#### Get product details

```http
POST /api/flipkart

Content-Type: application/json

Authorization: Bearer <token>

{
    "url": "https://www.flipkart.com/longway-10-l-instant-water-geyser-superb-ivory/p/itmbf4bf0a9bdf23"
}
```

It will return the product details.

```bash
{
    "ok": true,
    "data": {
        "url": "https://www.flipkart.com/longway-10-l-instant-water-geyser-superb-ivory/p/itmbf4bf0a9bdf23",
        "content": {
            "title": "Longway 10 L Instant Water Geyser (SUPERB, IVORY)",
            "price": "₹2,749",
            "description": "",
            "numberOfRatings": 161,
            "numberOfReviews": 374,
            "rating": 4.3,
            "numberOfMedia": 8
        }
    }
}
```
