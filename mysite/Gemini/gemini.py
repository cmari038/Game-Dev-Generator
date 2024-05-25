import os

import google.generativeai as genai


def generateGame(genreList):
    # Using `GOOGLE_API_KEY` environment variable.
    GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
    genai.configure(api_key=GOOGLE_API_KEY)

    """# Checking for all available models with generateContent feature
    for model in genai.list_models():
        if "generateContent" in model.supported_generation_methods:
            print(model.name) """

    # print(genreString)

    # Initiate the Model
    model = genai.GenerativeModel(model_name="gemini-pro")

    if len(genreList) == 0:
        response = model.generate_content(
            f"Give me a unique idea for a game, including a detailed description of the game's setting, story, characters, gameplay, and unique features")
        print(response.text)

    else:
        genreString = ''
        for genre in genreList["Genre"]:
            genreString = genreString + genre + ", "

        # Query the Model
        response = model.generate_content(
            f"Give me a unique idea for a game, including a detailed description of the game's setting, story, characters, gameplay, and unique features for each of the following genres:{genreString}")

        print(response.text)

    # return response.json()


genreList = {
    "Genre": ["Roguelite", "Open World"]
}

generateGame(genreList)
