│ Error: creating/updating "Resource: (ResourceId \"/subscriptions/7ef85eaf-ac4b-4dd0-89fc-d645056092a8/resourceGroups/rg-uks-devt1-sd-sib-dwpask/providers/Microsoft.CognitiveServices/accounts/openai-uks-devt1-sd-sib-dwpask/providers/Microsoft.CognitiveServices/accounts/openai-network-acls\" / Api Version \"2023-10-01-preview\")": PUT https://management.azure.com/subscriptions/7ef85eaf-ac4b-4dd0-89fc-d645056092a8/resourceGroups/rg-uks-devt1-sd-sib-dwpask/providers/Microsoft.CognitiveServices/accounts/openai-uks-devt1-sd-sib-dwpask/providers/Microsoft.CognitiveServices/accounts/openai-network-acls
│ --------------------------------------------------------------------------------
│ RESPONSE 404: 404 Not Found
│ ERROR CODE: ResourceTypeNotFound
│ --------------------------------------------------------------------------------
│ {
│   "error": {
│     "code": "ResourceTypeNotFound",
│     "message": "The resource type 'Microsoft.CognitiveServices/accounts' is not found."
│   }
│ }
│ --------------------------------------------------------------------------------
│ 
│ 
│   with azapi_resource.update_network_acls,
│   on openai.tf line 25, in resource "azapi_resource" "update_network_acls":
│   25: resource "azapi_resource" "update_network_acls" {
