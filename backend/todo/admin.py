from django.contrib import admin
from .models import Category, Foods, Table, Staff, Reservation, Order, Food_Order

class TodoCategory(admin.ModelAdmin):
    list_display = ('id', 'name')

class TodoFoods(admin.ModelAdmin):
    list_display = ('id', 'name', 'info', 'qty_day', 'image', 'category_id', 'price', 'cost')

class TodoTable(admin.ModelAdmin):
    list_display = ('id', 'status')

class TodoStaff(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'password', 'avatar', 'staff_type')

class TodoReservation(admin.ModelAdmin):
    list_display = ('table_id', 'rtime', 'no_customer', 'interval', 'staff_name')

class TodoOrder(admin.ModelAdmin):
    list_display = ('id', 'c_name', 'c_tele', 'c_email', 'formality', 'c_address', 'total', 'time', 'status')

class TodoFood_Order(admin.ModelAdmin):
    list_display = ('order_id', 'food_id', 'quantity')

# Register your models here.

admin.site.register(Category, TodoCategory)
admin.site.register(Foods, TodoFoods)
admin.site.register(Table, TodoTable)
admin.site.register(Staff, TodoStaff)
admin.site.register(Reservation, TodoReservation)
admin.site.register(Order, TodoOrder)
admin.site.register(Food_Order, TodoFood_Order)