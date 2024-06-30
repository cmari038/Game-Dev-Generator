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
            f"Give me a unique idea for a game, including a long and detailed description of the game's title, setting, lore, story, characters, levels, enemies, bosses, gameplay, equipment, and unique features for each of the following genres:{genreString}. Add an END on its own line to indicate the end of a game idea")

        # print(response.text)

    # return parser(response.text)
    return response.text


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


def getGenre():
    response = requests.get("http://localhost:3000/genre")
    if response.status_code == 200:
        # data = response.json()
        return HttpResponse(response)


def getGameIdea(request):
    genreList = []
    if request.method == 'POST':
        genreList = request.POST
    return HttpResponse(generateGame(genreList=genreList))


def sendGameIdea():
    post = requests.post("http://localhost:3000/response")
