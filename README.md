# API with Express.js for school  

https://factorialapi.onrender.com/

# API Documentation 
#### (made with help from CHAT GPT, I'll write one myself later)

This is a simple API that calculates factorial and superfactorial of a given number. The API is hosted on `https://factorialapi.onrender.com/` or locally on `http://localhost:8080/` and has the following endpoints:

## Endpoint for web page

- **GET /**
- `https://factorialapi.onrender.com/`
- `http://localhost:8080/`
  
  Returns the web page.

## Endpoint for factorial

- **GET /factorial/:value**
- `https://factorialapi.onrender.com/factorial/:value`
- `http://localhost:8080/factorial/:value`

  Calculates the factorial of the specified `value`.
  
  - `:value` (integer): The number for which the factorial is to be calculated.
  
  Returns a JSON object with the following properties:
  
  - `result`: The factorial value of `value`.
  - `wasCached`: A boolean indicating whether the result was retrieved from the cache (`true`) or calculated (`false`).

## Endpoint for superfactorial

- **GET /superfactorial/:value**
- `https://factorialapi.onrender.com/superfactorial/:value`
- `http://localhost:8080/superfactorial/:value`

  Calculates the superfactorial of the specified `value`.
  
  - `:value` (integer): The number for which the superfactorial is to be calculated.
  
  Returns a JSON object with the following properties:
  
  - `result`: The superfactorial value of `value`.
  - `wasCached`: A boolean indicating whether the result was retrieved from the cache (`true`) or calculated (`false`).

Note: If the `value` is not a valid positive integer, an error response with status code 422 will be returned.

## Running the API locally

1. Install the required dependencies using `npm install`.
2. Set up a Redis server and provide the `REDIS_URL` in a `.env` file.
3. Run the API using `node .`.
4. Access the endpoints using an HTTP client.

- Make sure to **create** a **.env** file with a **variable** called `REDIS_URL` whose value should be the **URL** of your OWN **Redis Database**.  
- You can create a **FREE** Redis Database at `https://app.redislabs.com/`
