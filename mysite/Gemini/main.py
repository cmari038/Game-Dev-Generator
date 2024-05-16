import os

import google.generativeai as genai

# Using `GOOGLE_API_KEY` environment variable.
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)

"""# Checking for all available models with generateContent feature
for model in genai.list_models():
    if "generateContent" in model.supported_generation_methods:
        print(model.name) """

# Initiate the Model
model = genai.GenerativeModel(model_name="gemini-pro")

# Query the Model
response = model.generate_content(
    "Give me an idea for a game that is a roguelike.")

print(response.text)
