from django import forms

class SearchForm(forms.Form):
    class Media:
        css = {
            "all": ["style.css"],
        }
        js = ["main.js"]
    SEASON_CHOICES = [
        ('前期', '前期'),
        ('後期', '後期'),
        ('集中', '集中'),
    ]
    DAY_CHOICES = [
        ('月', '月'),
        ('火', '火'),
        ('水', '水'),
        ('木', '木'),
        ('金', '金'),
        ('土', '土'),
        ('日', '日'),
    ]
    PERIOD_CHOICES = [
        ('1限', '1限'),
        ('2限', '2限'),
        ('3限', '3限'),
        ('4限', '4限'),
        ('5限', '5限'),
        ('6限', '6限'),
        ('7限', '7限'),
    ]

    時期 = forms.ChoiceField(choices=SEASON_CHOICES, widget=forms.Select(attrs={'class': 'custom-select'}))
    曜日 = forms.ChoiceField(choices=DAY_CHOICES, widget=forms.Select(attrs={'class': 'custom-select'}))
    時限 = forms.ChoiceField(choices=PERIOD_CHOICES, widget=forms.Select(attrs={'class': 'custom-select'}))

