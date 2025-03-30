from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser  # Ensure this import matches your actual model location

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ("username", "email", "role", "is_active", "is_staff")  # Display user roles
    search_fields = ("email", "username", "role")  # Allow searching by role
    ordering = ("email",)

    fieldsets = (
        (None, {"fields": ("username", "email", "password")}),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Role", {"fields": ("role",)}),  # Include role field
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("username", "email", "password1", "password2", "role", "is_active", "is_staff"),
        }),
    )

admin.site.register(CustomUser, CustomUserAdmin)
