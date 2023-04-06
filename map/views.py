from django.shortcuts import render

def index(request):
    context = dict()
    if (k := request.GET.get('key')) is not None:
        context['key'] = k
    return render(request, 'map/index.html', context)
