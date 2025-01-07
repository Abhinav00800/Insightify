from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_login import LoginManager, login_user, login_required, logout_user
from models import db, User, Lecture, Quiz
from utils import summarize_lecture, generate_questions
import os

app = Flask(__name__)
app.config.from_object('config.Config')
CORS(app)
db.init_app(app)

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    if user and user.password_hash == data['password']:  # Simplified for demo
        login_user(user)
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/api/summarize', methods=['POST'])
@login_required
def summarize():
    data = request.json
    summary = summarize_lecture(data['content'])
    return jsonify({"summary": summary}), 200

@app.route('/api/generate-questions', methods=['POST'])
@login_required
def generate_questions_route():
    data = request.json
    questions = generate_questions(data['content'])
    return jsonify({"questions": questions}), 200

@app.route('/upload/audio', methods=['POST'])
def upload_audio():
    audio_file = request.files['audio_data']
    if audio_file:
        file_path = os.path.join('uploads', audio_file.filename)
        audio_file.save(file_path)
        return {'message': 'File uploaded successfully'}, 200
    return {'message': 'No file uploaded'}, 400

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)