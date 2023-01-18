from flask import Flask, render_template, jsonify
import json
import pandas as pd
from sqlalchemy import create_engine

app = Flask(__name__)

protocol = 'postgresql'
username = 'postgres'
password = 'postgres'
host = 'localhost'
port = 5432
database_name = 'paranormal_db'
rds_connection_string = f'{protocol}://{username}:{password}@{host}:{port}/{database_name}'
engine = create_engine(rds_connection_string)
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
@app.route("/comparisons/")
def year():
    return render_template('linegraph.html')




@app.route("/api/sitings.json")
def sitings():

    file = open('data/sitings.json','r')
    
    data = json.load(file)
    file.close()
    return jsonify(data)

@app.route("/api/sitings2")
def sitings2():

    sitings = pd.read_sql_query("select state, bigfoot_sitings, reported_hauntings, ufo_sitings from states", con=engine)
    pd.DataFrame(sitings).set_index('state').T.to_json('data/info.json')
    file = open('data/info.json','r')
    
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
