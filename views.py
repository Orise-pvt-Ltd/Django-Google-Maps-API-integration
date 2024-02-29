from django.shortcuts import render, redirect, reverse
from django.conf import settings
from .utilities.app_variables import local_app_name

from .mixins import Directions

'''
Basic view for routing 
'''


def route(request):
    context = {
        "google_api_key": settings.GOOGLE_API_KEY,
        "base_country": settings.BASE_COUNTRY}
    return render(request, f'{local_app_name}/route.html', context)

def google_map_location(request):
    point = {'lat':6.9841644, 'lon':79.8991384}
    context = {
        "google_api_key": settings.GOOGLE_API_KEY,
        "base_country": settings.BASE_COUNTRY,
        "point":point}
    return render(request, f'{local_app_name}/google_maps_location.html', context)

def google_map_route(request):
    points = [
        {"lat": 6.9271, "lng": 79.8612},  # Example coordinates
        {"lat": 7.2906, "lng": 80.6337},  # More coordinates
    ]
    center = {"lat": 6.9271, "lng": 79.8612}

    context = {
        "google_api_key": settings.GOOGLE_API_KEY,
        "base_country": settings.BASE_COUNTRY,
        "center":center,
        "point":json.dumps(points)}
    return render(request, f'{local_app_name}/google_maps_route.html', context)

'''
Basic view for displaying a map 
'''


def map(request):
    lat_a = request.GET.get("lat_a", None)
    long_a = request.GET.get("long_a", None)
    lat_b = request.GET.get("lat_b", None)
    long_b = request.GET.get("long_b", None)
    lat_c = request.GET.get("lat_c", None)
    long_c = request.GET.get("long_c", None)
    lat_d = request.GET.get("lat_d", None)
    long_d = request.GET.get("long_d", None)

    # only call API if all 4 addresses are added
    if lat_a and lat_b and lat_c and lat_d:
        directions = Directions(
            lat_a=lat_a,
            long_a=long_a,
            lat_b=lat_b,
            long_b=long_b,
            lat_c=lat_c,
            long_c=long_c,
            lat_d=lat_d,
            long_d=long_d
        )
    else:
        return redirect(reverse('route'))

    context = {
        "google_api_key": settings.GOOGLE_API_KEY,
        "base_country": settings.BASE_COUNTRY,
        "lat_a": lat_a,
        "long_a": long_a,
        "lat_b": lat_b,
        "long_b": long_b,
        "lat_c": lat_c,
        "long_c": long_c,
        "lat_d": lat_d,
        "long_d": long_d,
        "origin": f'{lat_a}, {long_a}',
        "destination": f'{lat_b}, {long_b}',
        "directions": directions,

    }
    return render(request, f'{local_app_name}/map.html', context)
