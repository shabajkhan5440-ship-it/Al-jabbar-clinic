from django.urls import path
from django.contrib.auth import views as auth_views
from . import views


urlpatterns = [

    path(
        "",
        views.home,
        name="home"
    ),
    path(
        "Appointment/",
        views.book_appointment,
        name="Appointment"
    ),
    path(
        "Dashboard/",
        views.appointment_dashboard,
        name="Dashboard"
    ),

    path(
        "appointment-delete/<int:id>/",
        views.delete_appointment,
        name="delete_appointment"
    ),
    path(
        "appointment-confirm/<int:id>/",
        views.confirm_appointment,
        name="confirm_appointment"
    ),
    path(
    "appointment-dashboard/",
    views.appointment_dashboard,
    name="appointment_dashboard"
),
    path(
        "tests/",views.Tests,name="Tests"
    ) ,
    path(
        "Views/",views.Allviews,name="Views"
    ),
    path(
    "logout/",
    views.admin_logout,
    name="logout"
),

    path(
        "admin-register/",
        views.admin_register,
        name="admin_register"
    ),

    path(
        "change-password/",
        views.change_admin_password,
        name="change_admin_password"
    ),







]


