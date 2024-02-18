# LRNR 

## Project Overview
LRNR is an interactive learning application designed to enhance learning experiences through personalized quizzes generated with the OpenAI API. By leveraging React.js, Materialize, and Node.js, LRNR offers a seamless user interface for creating and taking quizzes tailored to individual preferences. Whether you're a student, educator, or lifelong learner, LRNR empowers you to engage with educational content in an interactive and dynamic way.

## Tech Stack
LRNR incorporates the following technologies:
- **React.js**: A JavaScript library for building user interfaces, enabling fast and responsive frontend development.
- **Materialize**: A modern responsive front-end framework based on Material Design, providing pre-styled UI components for streamlined design.
- **Node.js**: A runtime environment for executing JavaScript code server-side, facilitating backend development and API integration.
- **OpenAI API**: An artificial intelligence platform offering a wide range of natural language processing capabilities, utilized to generate quiz content based on user preferences.

## Installation Instructions
To set up LRNR locally, follow these steps:

1. **Clone the Repository**: Clone the LRNR repository from [GitHub](https://github.com/vbenavi0/lrnr-victor.git):
   ```
   git clone https://github.com/vbenavi0/lrnr-victor.git
   ```

2. **Navigate to the Frontend Directory**: Move into the frontend directory:
   ```
   cd lrnr/frontend
   ```

3. **Install Frontend Dependencies**: Install the necessary frontend dependencies using npm:
   ```
   npm install
   ```

4. **Start the Frontend Server**: Launch the frontend development server to run LRNR locally:
   ```
   npm start
   ```

5. **Open Another Terminal Window**

6. **Navigate to the Backend Directory**: Move into the backend directory:
   ```
   cd lrnr/backend
   ```

7. **Install Backend Dependencies**: Install the necessary backend dependencies using npm:
   ```
   npm install
   ```

8. **Start the Backend Server**: Launch the backend server to run LRNR locally:
   ```
   npm start
   ```

9. **Access LRNR**: Open your web browser and navigate to `http://localhost:3000` to access LRNR.

## API Documentation
LRNR relies on the [OpenAI API](https://platform.openai.com/docs/introduction) to generate quiz content. Refer to the documentation for comprehensive information on authentication, endpoints, parameters, and usage examples. Ensure you have an API key from OpenAI and configure it properly in the LRNR environment.

## Configuration Guide
To configure LRNR with your OpenAI API key, follow these steps:

1. **Obtain an API Key**: Sign up for an account on the OpenAI website to obtain an API key.

2. **Create a `.env` File**: In the LRNR project root directory, create a `.env` file.

3. **Add API Key to `.env`**: Inside the `.env` file, add your OpenAI API key:
   ```
   OPENAI_API_KEY=YOUR_API_KEY_HERE
   ```

4. **Ensure Security**: Add the `.env` file to your `.gitignore` to prevent exposing your API key publicly.

## Testing Instructions
To test LRNR locally, follow these steps:

# Frontend Testing

1. **Clone the Repository**: Clone the LRNR repository from [GitHub](https://github.com/vbenavi0/lrnr-victor.git):
   ```
   git clone https://github.com/vbenavi0/lrnr-victor.git
   ```

2. **Navigate to the Frontend Directory**: Move into the frontend directory:
   ```
   cd lrnr/frontend
   ```

3. **Install Frontend Dependencies**: Install the necessary frontend dependencies using npm:
   ```
   npm install
   ```

4. **Start the Frontend Server**: Launch the frontend development server to run LRNR locally:
   ```
   npm start
   ```

5. **Open Another Terminal Window**

6. **Navigate to the Frontend Directory**: Move into the frontend directory:
   ```
   cd lrnr/frontend
   ```

7. **Start the Frontend Testing**: Run the frontend server cypress command to test LRNR locally:
   ```
   npm run cypress:open
   ```

8. **Select E2E Testing in Cypress Window**

9. **Select frontend-tests.cy.js spec in Cypress Window**

# Backend Testing

1. **Clone the Repository**: Clone the LRNR repository from [GitHub](https://github.com/vbenavi0/lrnr-victor.git):
   ```
   git clone https://github.com/vbenavi0/lrnr-victor.git
   ```

2. **Navigate to the Backend Directory**: Move into the backend directory:
   ```
   cd lrnr/backend
   ```

3. **Install Backend Dependencies**: Install the necessary backend dependencies using npm:
   ```
   npm install
   ```

4. **Start the Backend Server**: Launch the backend server to run LRNR locally:
   ```
   npm start
   ```

5. **Open Another Terminal Window**

6. **Navigate to the Backend Directory**: Move into the backend directory:
   ```
   cd lrnr/backend
   ```

7. **Start the Backend Server Testing**: Launch the backend server jest testing locally:
   ```
   npm test
   ```

## License
LRNR is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this software in accordance with the terms specified in the license agreement. If you have any questions or suggestions, please reach out to the LRNR development team. Thank you for using LRNR to enhance your learning journey!
