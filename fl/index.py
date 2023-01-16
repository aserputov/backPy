from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('templates/index.html')

@app.route('/greet', methods=['GET'])
def greet():
    # name = request.json['name']
    return jsonify({'message': f'Hello, Ana!'})

if __name__ == '__main__':
    app.run()
