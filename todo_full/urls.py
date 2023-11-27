from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('todo_full', views.TodoViewSet, basename='todo_full')

urlpatterns = [
]

urlpatterns += router.urls