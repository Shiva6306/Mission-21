from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Store data in memory (you can replace this with a database)
data_store = []

@app.route('/api/submit', methods=['POST'])
def submit_data():
    try:
        # Get JSON data from request
        data = request.get_json()
        
        # Add timestamp to the data
        data['timestamp'] = datetime.now().isoformat()
        
        # Store the data
        data_store.append(data)
        
        # Print received data to console
        print(f"Received data: {data}")
        
        # Return success response
        return jsonify({
            'status': 'success',
            'message': 'Data received successfully!',
            'data': data
        }), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({
            'status': 'error',
            'message': f'Error processing data: {str(e)}'
        }), 500

@app.route('/api/data', methods=['GET'])
def get_data():
    """Get all stored data"""
    return jsonify({
        'status': 'success',
        'data': data_store,
        'count': len(data_store)
    }), 200

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'message': 'Server is running!'
    }), 200

if __name__ == '__main__':
    print("Starting Flask server...")
    print("Server will run on http://localhost:5000")
    app.run(debug=True, host='0.0.0.0', port=5000)