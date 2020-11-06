import pymongo
from flask import jsonify,Flask
from flask import request
import json
app= Flask(__name__)

@app.route('11.py',methods=['post','get'])
def postman():
    key = ('id', 'name', 'hot')
    all = []
    for i in range(1, 10):
        t = {}
        t[key[0]] = i
        t[key[1]] = 'name' + '%s' % i
        t[key[2]] = i * 1000 + 558
        all.append(t)
    print(all)





