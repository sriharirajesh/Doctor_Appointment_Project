from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_mail import Mail, Message

app = Flask(__name__)
CORS(app)  # Allow CORS for frontend requests
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Use your email provider's SMTP server
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your_email@gmail.com'  # Your email
app.config['MAIL_PASSWORD'] = 'your_email_password'   # Your email password
app.config['MAIL_DEFAULT_SENDER'] = 'your_email@gmail.com'
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
    email=data.get('email')
    password=data.get('password')
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
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    if User.query.filter_by(username=username).first() is not None:
        return jsonify({'error' : "Username already Exists"}) , 400
    if User.query.filter_by(email=email).first() is not None:
        return jsonify({'error': "Email already Exists"}) , 400
    if User.query.filter_by(passsword=password).first() is not None:
        return jsonify({'error': "This Password is Already Exists"}) , 400

    new_user = User(username=username , email=email , password = password)
    db.session.add(new_user)
    db.session.commit()

    send_confirmation_email(email)

    return jsonify({'message': 'User Email is  created successfully'}), 201

    def send_confirmation_email(to_email):
        Msg = Message('Welcome to Prescripto Online Doctor Appointment',recipients=[to_email])
        msg.body = "Thank you for Registering With Prescripto"
        mail.send(msg)

if __name__ == '__main__':
    app.run(debug=True)