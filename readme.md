# Inxtinct Security Assignment

AI-powered query router that processes natural language questions and returns results from weather API and database.

## Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **AI/LLM**: Google Gemini API
- **HTTP Client**: Axios
- **Environment**: Dotenv
- **Middleware**: CORS

## Project Structure

```
.
├── config/
│   └── db.js                 # MongoDB connection
├── model/
│   ├── Employee.js           # Employee schema
│   └── Order.js              # Order schema
├── controller/
│   └── askController.js      # Request handler
├── routes/
│   └── askRoutes.js          # API routes
├── services/
│   ├── llm/
│   │   ├── geminiClient.js   # Gemini API initialization
│   │   └── llmRouter.js      # Query routing logic
│   └── tools/
│       ├── dbTool.js         # Database queries
│       └── weatherTool.js    # Weather API calls
├── utils/
│   └── responseFormatter.js
├── server.js                 # Entry point
├── package.json
└── .env
```

## Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/AbbasGawali/inxtinctsecurityAssignment
cd inxtinct-security-assignment
npm install
```

### 2. Setup .env
Create `.env` file with:
```
PORT=8000
MONGOURI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
WEATHER_API_KEY=your_openweathermap_api_key
WEATHER_URL=https://api.openweathermap.org/data/2.5/weather
```


### Demo Env that can be Used 
Create `.env` file with the below credentials:
```
PORT=8000
MONGOURI=mongodb+srv://hihellooppo:Ubu9QgEEPLdVsIoI@cluster0.auycswj.mongodb.net/
GEMINI_API_KEY=AIzaSyDqHFI1Ot5arY0XO-8LVR7W6Ll4ctyq2uk
GEMINI_API_KEY2=AIzaSyAfRUl0jKOptZj3M-ym_urnt7Yio09ds8E
WEATHER_API_KEY=36927439c051711ce5ab3380dac0d2a8
WEATHER_URL=https://api.openweathermap.org/data/2.5/weather?
```



### 3. Start Server
```bash
node server.js
```
Server runs on `http://localhost:8000`

## API Usage

### Endpoint
```
POST /api/v1/ask
```

### Request Body
```json
{
  "query": "what is the weather at pune"
}
```

### Supported Queries

**Weather:**
- "weather in Mumbai"
- "what is the weather at pune"
- "show me weather for London"

**Database:**
- "how many employees joined last month"
- "list all orders over 500"

### Response
```json
{
  "text": "The weather in pune is 28°C with partly cloudy."
}
```

## How It Works

1. User sends natural language query
2. LLM Router (Gemini AI) classifies query as "weather" or "database"
3. Appropriate tool executes the request
4. Response returns as summarized English text

## Features

✅ NLP-powered query classification  
✅ Weather data from OpenWeatherMap API  
✅ MongoDB integration with Mongoose  
✅ CORS enabled  
✅ Error handling & graceful fallbacks  

## Database Setup

### Employee Model
- name (String)
- age (Number)
- joinDate (Date)

### Order Model
- customerName (String)
- amount (Number)
- orderDate (Date)

Already inserted more than 5 sample records in each collection before testing database queries, insert if you are using a seperate db insted of mine.

## Notes

- Gemini API has free tier rate limits (20 requests/day)
- Weather API requires valid API key from OpenWeatherMap
- MongoDB requires active internet connection




