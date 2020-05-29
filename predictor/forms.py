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

    odometer = forms.CharField(max_length=100,
                            label="Odometer",
                            widget=forms.TextInput(attrs={'class': 'text-field'}))
    title = forms.CharField(max_length=100,
                            label="Title Status",
                            widget=forms.TextInput(attrs={'class': 'text-field'}))

    color = forms.CharField(max_length=100,
                            label="Colour",
                            widget=forms.TextInput(attrs={'class': 'text-field'}))
    transmission = forms.CharField(max_length=100,
                            label="Transmission",
                            widget=forms.TextInput(attrs={'class': 'text-field'}))
    condition = forms.CharField(max_length=100,
                            label="Condition",
                            widget=forms.TextInput(attrs={'class': 'text-field'}))
