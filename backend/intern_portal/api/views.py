from django.http import JsonResponse

def intern_info(request):
    if request.method == "GET":
        data = [
            {"name": "Sibin C",
            "referral_code": "sibin2025",
            "donations": 1000},
            {"name": "Asha",
            "referral_code": "Asha2025",
            "donations": 8900},
            {"name": "Rahul",
            "referral_code": "Rahul2025",
            "donations": 6000},
        ]
        return JsonResponse(data,safe=False)
