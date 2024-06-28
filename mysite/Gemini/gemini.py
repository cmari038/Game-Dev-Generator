import json
import os

import google.generativeai as genai

# from views import parser


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
            "Give me 2 unique ideas for games, including a detailed description of the game's title, setting, lore, story, characters, enemies, levels, bosses, equipment, gameplay, and unique features. Add an END on its own line to indicate the end of a game idea")
        # print(response.text)

    else:
        genreString = ''
        for genre in genreList:
            genreString = genreString + genre + ", "

        # Query the Model
        response = model.generate_content(
            f"Give me a unique idea for a game, including a detailed description of the game's title, setting, lore, story, characters, enemies, levels, bosses, gameplay, equipment, and unique features for each of the following genres:{genreString}. Add an END on its own line to indicate the end of a game idea")

        # print(response.text)

    return response.text


genreList = ["immersive sim"]

output = generateGame(genreList)
print(output)

game = ""
games = []
for word in output.split():
    if word.find("END") != -1:
        games.append(game)
        game = ""
    else:
        game += word
        game += " "


for game in games:
    print(game, end=' ')

# print(len(games))"""
