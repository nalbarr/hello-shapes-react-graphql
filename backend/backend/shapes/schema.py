import graphene
from graphene_django import DjangoObjectType

from shapes.models import Category, Shape


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ("id", "name", "shapes")


class ShapeType(DjangoObjectType):
    class Meta:
        model = Shape
        fields = ("id", "name", "area_expr", "category")


class Query(graphene.ObjectType):
    all_shapes = graphene.List(ShapeType)
    category_by_name = graphene.Field(CategoryType, name=graphene.String(required=True))

    def resolve_all_shapes(root, info):
        # We can easily optimize query count in the resolve method
        return Shape.objects.select_related("category").all()

    def resolve_category_by_name(root, info, name):
        try:
            return Category.objects.get(name=name)
        except Category.DoesNotExist:
            return None


schema = graphene.Schema(query=Query)
