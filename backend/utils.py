# from transformers import pipeline
from flask import request
import requests
import google.generativeai as genai

API_KEY = "AIzaSyApiCBUk3qMBQnUZgsuDQt3aX5U67j-_kw"
GENAI_MODEL = "gemini-1.5-flash"
API_TOKEN = "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"
API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"
genai.configure(api_key=API_KEY)

# def summarize_lecture(content):
#     summarizer = pipeline("summarization")
#     summary = summarizer(content, max_length=130, min_length=30, do_sample=False)
#     return summary[0]['summary_text']

def summarize_lecture(content):
    data = content
    # max_length = request.form.get("maxL", type=int, default=100)
    max_length = 100
    min_length = max_length // 4

    if not data:
        return "Please provide text to summarize."

    response = query_huggingface(data, min_length, max_length)

    if 'summary_text' in response[0]:
        summarized_text = response[0]['summary_text']
        global summarized_data
        summarized_data = summarized_text
        return summarized_data
    else:
        return "Error in summarization"

def query_huggingface(data, min_length, max_length):
    headers = {"Authorization": f"Bearer {API_TOKEN}"}
    payload = {
        "inputs": data,
        "parameters": {"min_length": min_length, "max_length": max_length}
    }
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()


def generate_questions(content):
    if summarized_data:
        model = genai.GenerativeModel(GENAI_MODEL)
        prompt = f"Read the following text {summarized_data} and generate question-answer pairs to facilitate learning. Ensure that each question targets important information, definitions, or concepts discussed in the text. For each question, provide a clear, concise answer in a way that helps reinforce understanding.. Use the following format: 1. Question: [Insert question here] Answer: [Insert answer here]"
        ques = model.generate_content(prompt)
        qa_text = ques
        return qa_text
    else:
        return "No summarized data available. Please summarize first."