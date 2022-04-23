from types import MethodType
from django.conf.urls import url 
from todo import views 
 
urlpatterns = [ 
    url(r'^api/order$', views.OrderApi),
    url(r'^api/order/(?P<id>[0-9]+)$', views.OrderApi),

    url(r'^api/food$', views.FoodApi),
    url(r'^api/food/(?P<id>[0-9]+)$', views.FoodApi),

    url(r'^api/table$', views.TableApi),
    url(r'^api/table/(?P<id>[0-9]+)$', views.TableApi),
    
    url(r'^api/reservation$', views.ReservationApi),
    url(r'^api/reservation/(?P<id>[0-9]+)$', views.ReservationApi),

    url(r'^api/staff$', views.StaffApi),
    url(r'^api/staff/(?P<id>[0-9]+)$', views.StaffApi),

    url(r'^api/food_order$', views.Food_OrderApi),
    url(r'^api/food_order/(?P<id>[0-9]+)$', views.Food_OrderApi),

    url(r'^api/category$', views.CategoryApi),
    url(r'^api/category/(?P<id>[0-9]+)$', views.CategoryApi),
  
    url(r'^api/summary$', views.summaryApi),
    url(r'^api/graph$', views.graphApi),
  
    url(r'^api/order2$', views.OrderApi2),

    url(r'^auth$', views.CheckAuth),
]