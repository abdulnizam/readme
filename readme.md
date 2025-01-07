│ Error: Invalid for_each argument
│ 
│   on openai.tf line 26, in resource "azapi_resource" "this":
│   26:   for_each  = [azurerm_cognitive_account.openai.id]
│ 
│ The given "for_each" argument value is unsuitable: the "for_each" argument must be a map, or set of strings, and you have provided a value of type
│ tuple.
╵
