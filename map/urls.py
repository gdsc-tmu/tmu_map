from django.urls import path
from . import views

urlpatterns = [
        path("", views.search_page, name="map"),
        path("class_location_map", views.class_location_map, name="class_location_map"),

]


