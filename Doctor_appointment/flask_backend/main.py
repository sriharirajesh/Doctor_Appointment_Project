from flask import Flask

app = Flask(__name__)

doctors = [
{
    
        '_id': 'doc1',
        'name': 'Dr. Richard James',
        'image': 'doc1',
        'speciality': 'General physician',
        'degree': 'MBBS',
        'experience': '4 Years',
        'about': 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        'fees': '50',
        'address': {
            'line1': '17th Cross, Richmond',
            'line2': 'Circle, Ring Road, London'
        
    }
    

      
      
    
    

}

]


@app.route('/api/doctors')
def get_doctors(doctor_id,doctor):
       doctor=doctors.get(doctor_id)
       return doctor
         
        
      




if __name__ == "__main__":
    app.run()