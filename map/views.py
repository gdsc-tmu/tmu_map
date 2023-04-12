import os
from django.shortcuts import render

TMU_MAP_GOOGLE_MAP_API_KEY = os.getenv("TMU_MAP_GOOGLE_MAP_API_KEY")

def index(request):
    context = {
        'key': TMU_MAP_GOOGLE_MAP_API_KEY,
    }
    return render(request, 'tmu_map/index.html', context)
