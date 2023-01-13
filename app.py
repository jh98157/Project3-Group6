from flask import Flask, render_template
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


if __name__ == "__main__":
    app.run(debug=True)
