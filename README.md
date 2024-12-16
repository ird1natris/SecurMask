# SecurMask: Fortifying Data Privacy With Intelligent Masking

**SecurMask** is a web application designed to securely mask sensitive data in .csv and .xlsx files. With a sleek React frontend and a dual backend powered by both Node.js and Flask, the app ensures a seamless and secure data masking experience.

Features
Upload .csv and .xlsx files for secure processing.
Mask sensitive data such as birthdates, addresses, emails, credit card details, and more.
Customizable masking options: select specific columns or apply masking to all columns.
Fast and secure processing with Python’s Pandas and Node.js libraries.
Responsive and user-friendly UI.
Download the masked file securely.
Technologies Used
Frontend
React: Dynamic user interface.
SweetAlert2: Elegant alert modals for user interactions.
CSS: Custom styling and animations.
Backend
Node.js: For file handling, routing, and integration with React.
Express.js: API routing and server setup.
Flask: Python-based backend for advanced data masking and processing.
Pandas: Efficient data handling and transformation.
Python Faker: Generating fake data for sensitive fields.
Getting Started
Prerequisites
Ensure the following tools are installed:

Node.js (for the frontend and Node.js backend)
Python 3.8+ (for the Flask backend)
pip (Python package manager)
Installation
1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/securmask.git  
cd securmask  
2. Set Up the Node.js Backend
Navigate to the Node.js backend folder:

bash
Copy code
cd backend/nodejs  
Install dependencies:

bash
Copy code
npm install  
Run the Node.js server:

bash
Copy code
npm start  
3. Set Up the Flask Backend
Navigate to the Flask backend folder:

bash
Copy code
cd ../flask  
Install the required Python packages:

bash
Copy code
pip install -r requirements.txt  
Run the Flask backend:

bash
Copy code
python app.py  
4. Set Up the Frontend
Navigate to the frontend folder:

bash
Copy code
cd ../../frontend  
Install dependencies:

bash
Copy code
npm install  
Start the React development server:

bash
Copy code
npm start  
5. Access the Application
Frontend: http://localhost:3000
Node.js API: http://localhost:5000
Flask API: http://localhost:5001
Usage
Upload File: Click "Choose File" to upload a .csv or .xlsx file.
Select Columns: Pick specific columns to mask or select all columns.
Mask Data: Click "Mask Data" to process the file.
Download: Download the masked file once processing is complete.
Project Structure
Frontend
csharp
Copy code
frontend/
├── public/
│   └── logo.png    # Application logo
├── src/
│   ├── App.js      # Main React component
│   ├── App.css     # Styling
│   └── components/  
└── package.json
Backend
Node.js Backend
bash
Copy code
backend/nodejs/
├── app.js          # Node.js server
├── routes/         # API routes
├── middleware/     # Middleware for validation
└── package.json    # Node.js dependencies
Flask Backend
bash
Copy code
backend/flask/
├── app.py          # Flask app
├── masking.py      # Data masking logic
├── requirements.txt  # Python dependencies
└── uploads/        # Temporary storage for uploaded files
License
This project is licensed under the MIT License. See the LICENSE file for details.

Future Enhancements
Implement a unified backend API (Node.js + Flask integration).
Expand support for other file formats (e.g., .json, .xml).
Incorporate machine learning for intelligent data masking patterns.
Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

Acknowledgments
Faker for generating fake data.
React, Flask, and Node.js communities for their excellent documentation and support.
SweetAlert2 for stunning modal dialogs.
