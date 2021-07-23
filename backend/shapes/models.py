from django.db import models


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Shape(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    area_expr = models.CharField(max_length=100, null=True)
    category = models.ForeignKey(
        Category, related_name="shapes", on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name
