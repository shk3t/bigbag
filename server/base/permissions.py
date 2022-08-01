from rest_framework.permissions import BasePermission


SAFE_METHODS = ["GET", "HEAD", "OPTIONS"]


class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.method in SAFE_METHODS or request.user and request.user.is_staff
        )


class ReadOnlyMixin:
    pass  # TODO delete
    # permission_classes = [IsAdminOrReadOnly]
