from django.shortcuts import render
from .models import Coordination, ClassroomAllocation, SyllabusBaseInfo
from .forms import SearchForm
import json


def search_page(request):
    if request.method == "POST":
        form = SearchForm(request.POST)
        if form.is_valid():
            season = form.cleaned_data["時期"]
            day = form.cleaned_data["曜日"]
            period = form.cleaned_data["時限"]

            joined_tables= join_syllabus_base_info_and_classroom_allocation_full_info()

            results = get_results(season, day, period, joined_tables)
         
            non_matching_rows = get_non_matching_rows(results)

            json_data = get_json_data(non_matching_rows)

            return render(
                request,
                "map/search.html",
                {
                    "data": json_data,
                    "form": form,
                    "results": results,
                    "non_matching_rows": non_matching_rows,
                },
            )

    else:
        form = SearchForm()
        return render(request, "map/search.html", {"form": form})

from django.db.models import OuterRef, Subquery

def join_syllabus_base_info_and_classroom_allocation_full_info():
    classroom_allocations = ClassroomAllocation.objects.filter(
        lecture_id=OuterRef('lecture_id')
    )

    queryset = SyllabusBaseInfo.objects.annotate(
        building=Subquery(classroom_allocations.values('building')),
        room_id=Subquery(classroom_allocations.values('room_id'))
    )

    return queryset

def get_results(season, day, period, joined_tables):
    return joined_tables.filter(season=season, day=day, period=period).values(
        "season", "day", "period", "lecture_id", "building", "room_id", "name"
    )

def get_non_matching_rows(results):
    buildings = set(row["building"] for row in results)
    names = set(row["room_id"] for row in results)
    return  Coordination.objects.exclude(
            building__in=buildings,
            name__in=names,
    ).values("id", "latitude", "longitude", "name", "building")


def get_json_data(non_matching_rows):
    coordinationData = []
    for item in non_matching_rows:
        lat = item["latitude"]
        lng = item["longitude"]
        coordinates = {
            "lat": float(lat),
            "lng": float(lng),
            "title": item[
                "name"
            ],  # Include the 'name' column value as the 'title' property
        }
        coordinationData.append(coordinates)
    return json.dumps(coordinationData)
