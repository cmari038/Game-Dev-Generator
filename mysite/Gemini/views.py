import json
import os

import google.generativeai as genai
import requests
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect

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
            f"Give me 3 unique ideas for games, including a long and detailed description of the game's title, setting, lore, story, characters, levels, enemies, bosses, equipment, gameplay features, and unique mechanics. Add an END on its own line to indicate the end of a game idea")
        # print(response.text)

    else:
        genreString = ''
        for genre in genreList:
            genreString = genreString + genre + ", "

        # Query the Model
        response = model.generate_content(
            f"Give me a unique idea for a game that fits each of the following genres:{genreString}, including a long and detailed description of the game's genre, title, setting, lore, story, characters, enemies, levels, bosses, gameplay features (in how they fit the chosen genre), abilities, equipment, and unique features. Add an END on its own line to indicate the end of a game idea")

        # print(response.text)

    # return parser(response.text)
    return response.text
    # return response.text.replace('\n', '<br>')


"""
@csrf_protect
def getGameIdea(request):
    genreList = []
    if request.method == 'POST':
        jsonData = json.loads(request.body)
        genreList = jsonData.get('genreList')
    return HttpResponse(generateGame(genreList))
    # return HttpResponse(genreList)


"""


@csrf_protect
def getGameIdea(request):
    genreList = []
    if request.method == 'POST':
        jsonData = json.loads(request.body)
        genreList = jsonData.get('genreList')
    gameIdeas = {'gameIdeas': generateGame(genreList)}
    return render(request, 'response.html', gameIdeas)


def parser(output, genreList):
    if len(genreList) == 0:
        for i in range(len(genreList)):
            index = output.find("END")
            games.append(output[0::index])
            output = output[index+1::len(output)]
            return games
        """
        first_index = output.find("END")
        game1 = output[0::first_index - 1]
        second_index = output[first_index+1::len(output)].find("END")
        game2 = output[first_index + 1::second_index]
        game3 = output[second_index+1::len(output)-1]
        return [game1, game2, game3]
        """
    else:
        games = []
        for genre in genreList:
            index = output.find("END")
            games.append(output[0::index])
            output = output[index+1::len(output)]
            return games
