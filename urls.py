from django.urls import path, include
from .views import *

from utilities.project_variables import end_point

urlpatterns = [
    path(f'{end_point}/Google-Maps-Api/maps/route', route, name="route"),
    path(f'{end_point}/Google-Maps-Api/maps/map', map, name="map"),
]