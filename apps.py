from django.apps import AppConfig
from .utilities.app_variables import local_app_name

class GoogleApiAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = local_app_name
