from django.shortcuts import render, redirect, get_object_or_404
from .models import Appointment
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth import logout
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.decorators import login_required

from django.conf import settings


# Home
def home(request):
    return render(request, "Home.html")


# Book Appointment
def book_appointment(request):

    if request.method == "POST":

        patient_name = request.POST.get("patient_name")
        phone = request.POST.get("phone")
        email = request.POST.get("email")
        doctor = request.POST.get("doctor")
        test_name = request.POST.get("test_name")
        test_price = request.POST.get("test_price")
        appointment_date = request.POST.get("appointment_date")
        appointment_time = request.POST.get("appointment_time")
        message = request.POST.get("message")

        Appointment.objects.create(
            patient_name=patient_name,
            phone=phone,
            email=email,
            doctor=doctor,
            test_name=test_name,
            test_price=test_price,
            appointment_date=appointment_date,
            appointment_time=appointment_time,
            message=message,
            status="Pending"
        )

        return redirect("appointment_dashboard")

    return render(request, "Appointment.html")


# Appointment Dashboard
@staff_member_required
def appointment_dashboard(request):

    appointments = Appointment.objects.all().order_by("-created_at")

    return render(
        request,
        "dashboard.html",
        {
            "appointments": appointments
        }
    )


# Confirm Appointment
@staff_member_required
def confirm_appointment(request, id):

    appointment = get_object_or_404(
        Appointment,
        id=id
    )

    appointment.status = "Confirmed"
    appointment.save()

    return redirect("appointment_dashboard")


# Delete Appointment
@staff_member_required
def delete_appointment(request, id):

    appointment = get_object_or_404(
        Appointment,
        id=id
    )

    appointment.delete()

    return redirect("appointment_dashboard")

def Tests(request):
    return render(request,'Tests.html')
def Allviews(request):
    return render(request,'Viwes.html')

def admin_logout(request):

    logout(request)

    return redirect("home")

def admin_register(request):

    if request.user.is_authenticated:
        return redirect("appointment_dashboard")

    if request.method == "POST":

        username = request.POST.get("username", "").strip()
        email = request.POST.get("email", "").strip()
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm_password")
        register_key = request.POST.get("register_key")

        # Registration key check
        if register_key != settings.ADMIN_REGISTER_KEY:

            return render(
                request,
                "admin_register.html",
                {
                    "error": "Invalid Admin Registration Key."
                }
            )

        if not username or not password:

            return render(
                request,
                "admin_register.html",
                {
                    "error": "Username and password are required."
                }
            )

        if password != confirm_password:

            return render(
                request,
                "admin_register.html",
                {
                    "error": "Passwords do not match."
                }
            )

        if User.objects.filter(username=username).exists():

            return render(
                request,
                "admin_register.html",
                {
                    "error": "Username already exists."
                }
            )

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        user.is_staff = True
        user.is_active = True

        user.save()

        messages.success(
            request,
            "Admin account created successfully. Please login."
        )

        return redirect("admin_login")

    return render(
        request,
        "admin_register.html"
    )
@login_required
def change_admin_password(request):

    if not request.user.is_staff:
        return redirect("home")

    if request.method == "POST":

        old_password = request.POST.get("old_password")
        new_password = request.POST.get("new_password")
        confirm_password = request.POST.get("confirm_password")

        if not request.user.check_password(old_password):

            return render(
                request,
                "change_password.html",
                {
                    "error": "Current password is incorrect."
                }
            )

        if new_password != confirm_password:

            return render(
                request,
                "change_password.html",
                {
                    "error": "New passwords do not match."
                }
            )

        if len(new_password) < 8:

            return render(
                request,
                "change_password.html",
                {
                    "error": "Password must be at least 8 characters."
                }
            )

        request.user.set_password(new_password)
        request.user.save()

        # Login again after password change
        login(
            request,
            request.user
        )

        messages.success(
            request,
            "Password updated successfully."
        )

        return redirect("appointment_dashboard")

    return render(
        request,
        "change_password.html"
    )

@staff_member_required
def appointment_dashboard(request):

    appointments = Appointment.objects.all().order_by("-created_at")

    return render(
        request,
        "dashboard.html",
        {
            "appointments": appointments
        }
    )

@staff_member_required
def confirm_appointment(request, id):

    appointment = get_object_or_404(
        Appointment,
        id=id
    )

    appointment.status = "Confirmed"
    appointment.save()

    return redirect("appointment_dashboard")


@staff_member_required
def delete_appointment(request, id):

    appointment = get_object_or_404(
        Appointment,
        id=id
    )

    appointment.delete()

    return redirect("appointment_dashboard")