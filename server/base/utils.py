def attribute_names(cls):
    keys = cls.__dict__.keys()
    model_fields = {"objects", "get_type_display"}
    keys = filter(lambda key: not key.startswith("_") and not key[0].isupper(), keys)
    keys = set(keys).difference(model_fields)
    cls._attrs = keys
    return cls
