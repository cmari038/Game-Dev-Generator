from django.db import models


# Create your models here.
class Game(models.Model):
    """gameTitle = models.CharField(max_length=100)
    setting = models.TextField()
    story = models.TextField()
    lore = models.TextField()
    characters = models.TextField()
    enemies = models.TextField()
    levels = models.TextField()
    bosses = models.TextField()
    equipment = models.TextField()
    gameplay = models.TextField()
    features = models.TextField() """
    game = models.TextField()
