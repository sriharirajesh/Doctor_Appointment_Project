from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow CORS for frontend requests
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False) 
    password = db.Column(db.String(100), unique = True , nullable = False) 

with app.app_context():
    db.create_all()

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    user = User.query.filter_by(username=username).first()
    if user:
        return jsonify({
            'id': user.id,
            'username': user.name,
            'email': user.email,
            'password':user.password
        })
    return jsonify({'error': 'User not found'}), 404

@app.route('/create', methods=['POST'])
def register():
    data = request.json
    new_user = User(username=data['username'], email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created'}), 201

if __name__ == '__main__':
    app.run(debug=True)