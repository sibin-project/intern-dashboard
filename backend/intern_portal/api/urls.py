from django.urls import path
from . import views

urlpatterns = [
    path('intern/', views.intern_info),
]
