from flask import Flask, render_template, request
import requests
import google.generativeai as genai

# Initialize API keys and models
API_KEY = "AIzaSyApiCBUk3qMBQnUZgsuDQt3aX5U67j-_kw"
GENAI_MODEL = "gemini-1.5-flash"
API_TOKEN = "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"
API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
genai.configure(api_key=API_KEY)

app = Flask(__name__)
summarized_data = ""

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")

@app.route("/summarize", methods=["POST"])
def summarize():
    if request.method == "POST":
        data = request.form.get("data", "")
        max_length = request.form.get("maxL", type=int, default=100)
        min_length = max_length // 4

        if not data:
            return render_template("index.html", result="Please provide text to summarize.")

        response = query_huggingface(data, min_length, max_length)

        if 'summary_text' in response[0]:
            summarized_text = response[0]['summary_text']
            global summarized_data
            summarized_data = summarized_text
            return render_template("index.html", result=summarized_text)
        else:
            return render_template("index.html", result="Error in summarization.")

def query_huggingface(data, min_length, max_length):
    headers = {"Authorization": f"Bearer {API_TOKEN}"}
    payload = {
        "inputs": data,
        "parameters": {"min_length": min_length, "max_length": max_length}
    }
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

@app.route("/question", methods=["POST"])
def question():
    if summarized_data:
        model = genai.GenerativeModel(GENAI_MODEL)
        prompt = f"Read the following text {summarized_data} and generate question-answer pairs to facilitate learning. Ensure that each question targets important information, definitions, or concepts discussed in the text. For each question, provide a clear, concise answer in a way that helps reinforce understanding.. Use the following format: 1. Question: [Insert question here] Answer: [Insert answer here]"
        ques = model.generate_content(prompt)
        qa_text = ques["result"]["candidates"][0]["content"]["parts"][0]["text"]
        return render_template("index.html", ques=qa_text)
    else:
        return render_template("index.html", ques="No summarized data available. Please summarize first.")

if __name__ == "__main__":
    app.run(debug=True)
