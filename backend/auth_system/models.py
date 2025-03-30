from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('analyst', 'Security Analyst'),
        ('viewer', 'Viewer'),
    ]
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='viewer')

    USERNAME_FIELD = 'email'  # Authenticate using email instead of username
    REQUIRED_FIELDS = ['username']  # Keep username but make it secondary
