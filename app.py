from flask import Flask, render_template, url_for
from flask import request as req
import requests

app = Flask(__name__)

@app.route("/",methods=["GET","POST"])
def Index():
    return render_template("index.html")


@app.route("/summarize",methods=["GET","POST"])
def summarize():
    if req.method=="POST":
        API_Token = "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"
        API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
        headers = {"Authorization": f"Bearer {API_Token}"}

        data=req.form["data"] 
        maxL=int(req.form["maxL"]) 
        minL= int(maxL/4)

        def query(payload):
            response = requests.post(API_URL, headers=headers, json=payload)
            return response.json()
            
        output = query({
            "inputs":data,
            "parameters":{"min_length":minL,"max_length":maxL},
        })

        return render_template("index.html",result=output[0]['summary_text'])
    
    else:
        return render_template("index.html",result="Incorrect Input")

if __name__ == "__main__":
    app.run(debug=True)

