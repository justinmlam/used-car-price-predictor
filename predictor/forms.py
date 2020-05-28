from django import forms

class VehicleForm(forms.Form):
    brand = forms.CharField(max_length=100,
                              label="Brand",
                              widget=forms.TextInput(attrs={'class': 'text-field'}))
    model = forms.CharField(max_length=100,
                            label="Model",
                            widget=forms.TextInput(attrs={'class': 'text-field'}))
    year = forms.CharField(max_length=4,
                           label="Year",
                           widget=forms.TextInput(attrs={'class': 'text-field'}))