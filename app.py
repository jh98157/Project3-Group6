from flask import Flask, render_template, jsonify
import json
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/map/")
def data():
    return render_template('map.html')
@app.route("/bystate/")
def state():
    return render_template('bargraph.html')
@app.route("/overtime/")
def year():
    return render_template('linegraph.html')




@app.route("/api/sitings.json")
def sitings():

    file = open('data/sitings.json','r')
    
    data = json.load(file)
    file.close()
    return jsonify(data)

@app.route("/api/sitings2.json")
def sitings2():

    file = open('data/sitings2.json','r')
    
    data = json.load(file)
    file.close()
    return jsonify(data)

@app.route("/api/bigfoot.json")
def bfmap():

    file = open('data/bigfoot.json','r')
    
    data = json.load(file)
    file.close()
    return jsonify(data)

@app.route("/api/haunted.json")
def housemap():

    file = open('data/haunted.json','r')
    
    data = json.load(file)
    file.close()
    return jsonify(data)

@app.route("/api/UFO.json")
def ufomap():

    file = open('data/ufo.json','r')
    
    data = json.load(file)
    file.close()
    return jsonify(data)
if __name__ == "__main__":
    app.run(debug=True)
