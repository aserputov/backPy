from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import requests

app = Flask(__name__, template_folder='templates')
CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/greet', methods=['GET'])
def greet():
    # name = request.json['name']
    return jsonify({'message': f'Hello, Ana!'})


@app.route('/products', methods=['GET'])
def products():
    products = requests.get('https://fakestoreapi.com/products')
    print(products)
    data = products.json()
    print(data)
    return data


@app.route('/pic', methods=['POST'])
def pic():
    # image = request.files['image']
    # request.get_json()
    # print(request.files['image'])c
    return jsonify({'message': f'Hello, Ana!'})


if __name__ == '__main__':
    app.run()
