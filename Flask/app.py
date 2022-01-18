from distutils.log import debug
from unittest import result
from urllib import response
import requests
from flask import Flask,jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return 'Flask REST API'

@app.route('/currencyInfo/<currency>', methods=['GET'])
def currencyInfo(currency):
    response = requests.get("https://free.currconv.com/api/v7/currencies?apiKey=d56d519c7b10be853f29")
    response = response.json()
    response = response["results"]
    result = response[currency]["currencyName"]
    response = jsonify({"result": result})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
    
@app.route('/currencyConversion/<source>/<destination>/<amount>', methods=['GET'])
def currencyConversion(source, destination, amount):
    response = requests.get("https://free.currconv.com/api/v7/convert?q=%s_%s&compact=ultra&apiKey=d56d519c7b10be853f29"%(source, destination)) 
    data = response.json()
    conversion = float(data["%s_%s"%(source, destination)])*float(amount)

    response = jsonify({"result": conversion})

    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

    

if __name__== '__main__':
    app.run(debug=True, port=4000)