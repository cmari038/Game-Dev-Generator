import json
import os

import google.generativeai as genai

# from views import parser


def parser(output, genreList):
    if len(genreList) == 0:
        for i in range(3):
            index = output.find("END")
            games.append(output[0::index])
            output = output[index+1::len(output)]
            return games
    else:
        games = []
        for i in range(len(genreList)):
            index = output.find("END")
            games.append(output[0::index])
            output = output[index+1::len(output)]
            return games


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
            "Give me a unique idea for a game, including a long and detailed description of the game's title, setting, story, enemies, levels, bosses, abilities, equipment, core gameplay features, and unique mechanics.")
        # print(response.text)

    else:
        genreString = ''
        for genre in genreList:
            genreString = genreString + genre + ", "

        # Query the Model
        response = model.generate_content(
            f"Give me a unique idea for a game that fits each of the following genres:{genreString}, including a long and detailed description of the game's genre, title, setting, story, enemies, levels, bosses, core gameplay features (in how they fit the chosen genre), abilities, equipment, and unique mechanics.")

        # print(response.text)

    return response.text


genreList = ["Metroidvania"]

output = generateGame(genreList)
print(output)

"""
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
