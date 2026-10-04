from django.db import models

# Create your models here.
from django.db import models


class Appointment(models.Model):

    STATUS_CHOICES = (
        ("Pending", "Pending"),
        ("Confirmed", "Confirmed"),
    )

    patient_name = models.CharField(max_length=150)

    phone = models.CharField(max_length=20)

    email = models.EmailField(blank=True, null=True)

    doctor = models.CharField(max_length=150)

    test_name = models.CharField(max_length=150)

    test_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    appointment_date = models.DateField()

    appointment_time = models.TimeField()

    message = models.TextField(blank=True, null=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.patient_name