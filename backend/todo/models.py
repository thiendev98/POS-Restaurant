from django.db import models
from django.db.models.deletion import CASCADE
from PIL import Image

# Create your models here.

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)

class Foods(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    info = models.TextField(blank=True, null=True)
    qty_day = models.IntegerField()
    image = models.ImageField(upload_to='uploads/FImages')
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.BigIntegerField()
    cost = models.BigIntegerField()

class Table(models.Model):
    id = models.AutoField(primary_key=True)
    STATUS = (
        ('E', 'Empty'),
        ('R', 'Reserved'),
    )
    status = models.CharField(max_length=1, choices=STATUS)

class Staff(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    email = models.EmailField()
    password = models.CharField(max_length=20)
    avatar = models.ImageField(upload_to='uploads/SImages')
    STAFF_TYPE = (
        ('M', 'Manager'),
        ('R', 'Receiption'),
        ('S', 'Shipper'),
    )
    staff_type = models.CharField(max_length=1, choices=STAFF_TYPE)

class Reservation(models.Model):
    id = models.BigAutoField(primary_key=True)
    table_id = models.ForeignKey(Table, on_delete=CASCADE)
    rtime = models.DateTimeField()
    no_customer = models.IntegerField()
    interval = models.IntegerField()    #don vi: gio
    staff_name = models.ForeignKey(Staff, on_delete=CASCADE, null=True)
    name = models.CharField(max_length=100)


class Order(models.Model):
    id = models.AutoField(primary_key=True)
    c_name = models.CharField(max_length=30)
    c_tele = models.CharField(max_length=10)
    c_email = models.EmailField()
    FORMALITY = (
        ('E', 'Eat now'),
        ('T', 'Take away'),
    )
    formality = models.CharField(max_length=1, choices=FORMALITY)
    c_address = models.CharField(max_length=200, null=True)
    total = models.BigIntegerField()
    STATUS = (
        ('D', 'Doing'),
        ('F', 'Finish'),
        ('C', 'Canceled'),
    )
    time = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=1, choices=STATUS)

class Food_Order(models.Model):
    order_id = models.ForeignKey(Order, on_delete=CASCADE)
    food_id = models.ForeignKey(Foods, on_delete=CASCADE)
    quantity = models.IntegerField()