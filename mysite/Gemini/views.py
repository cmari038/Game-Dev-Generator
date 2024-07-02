import os

import google.generativeai as genai
import requests
from django.http import HttpResponse
from django.shortcuts import render

# from models import Game

# from gemini import generateGame

# Create your views here.


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
            f"Give me 4 unique ideas for games, including a long and detailed description of the game's title, setting, lore, story, characters, levels, enemies, bosses, equipment, gameplay, and unique features. Add an END on its own line to indicate the end of a game idea")
        # print(response.text)

    else:
        genreString = ''
        for genre in genreList:
            genreString = genreString + genre + ", "

        # Query the Model
        response = model.generate_content(
            f"Give me a unique idea for a game that fits each of the following genres:{genreString}, including a long and detailed description of the game's title, setting, lore, story, characters, enemies, levels, bosses, gameplay features (in how they fit the chosen genre), abilities, equipment, and unique mechanics.")

        # print(response.text)

    # return parser(response.text)
    # return response.text
    return response.text.replace('\n', '<br>')


def parser(output):
    game = ""
    games = []
    for word in output.split():
        if word.find("END") != -1:
            games.append(game)
            game = ""
        else:
            game += word
            game += " "


def getGameIdea(request):
    genreList = []
    if request.method == 'POST':
        genreList = request.POST
    return HttpResponse(generateGame(genreList=genreList))


def sendGameIdea():
    post = requests.post("http://localhost:3000/response")
