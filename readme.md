
│ Error: creating/updating "Resource: (ResourceId \"/subscriptions/7ef85eaf-ac4b-4dd0-89fc-d645056092a8/resourceGroups/rg-uks-devt1-sd-sib-dwpask/providers/Microsoft.CognitiveServices/accounts/openai-uks-devt1-sd-sib-dwpask/providers/Microsoft.CognitiveServices/accounts/openai-uks-devt1-sd-sib-dwpask\" / Api Version \"2023-10-01-preview\")": PUT https://management.azure.com/subscriptions/7ef85eaf-ac4b-4dd0-89fc-d645056092a8/resourceGroups/rg-uks-devt1-sd-sib-dwpask/providers/Microsoft.CognitiveServices/accounts/openai-uks-devt1-sd-sib-dwpask/providers/Microsoft.CognitiveServices/accounts/openai-uks-devt1-sd-sib-dwpask
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


resource "azapi_resource" "network_acls" {
  type      = "Microsoft.CognitiveServices/accounts@2023-10-01-preview"
  parent_id = azurerm_cognitive_account.openai.id
  schema_validation_enabled = false
  name = azurerm_cognitive_account.openai.name
  location = azurerm_resource_group.dwpask_rg.location
  body = jsonencode({
    properties = {
      networkAcls = {
        bypass = "AzureServices"
      }
    }
  })
  depends_on = [azurerm_cognitive_account.openai]
}


resource "azurerm_cognitive_account" "openai" { 
  name                = var.openai_name 
  location            = azurerm_resource_group.dwpask_rg.location
  custom_subdomain_name = var.openai_name 
  resource_group_name = azurerm_resource_group.dwpask_rg.name 
  kind                = "OpenAI" 
  sku_name            = "S0"
  tags     =  { 
    Name = "azure.dwpask.openai_cognitive_account.${var.environment-tag-name}"
    Application = "${var.application}"
    Environment = "${var.environment-tag-name}"
  }
 network_acls   {
    default_action             = "Deny"
    ip_rules = [var.gitlab_runner_ip]
    virtual_network_rules {
      subnet_id  = data.azurerm_subnet.privateendpoint_subnet.id
    }
    virtual_network_rules {
      subnet_id  = data.azurerm_subnet.appgw_subnet.id
    }
 }
}
  
resource "azapi_resource" "update_network_acls" {
  type      = "Microsoft.CognitiveServices/accounts@2024-10-01"
  name      = azurerm_cognitive_account.openai.name
  parent_id = azurerm_cognitive_account.openai.id
  location  = azurerm_cognitive_account.openai.location

  body = jsonencode({
    properties = {
      networkAcls = {
        bypass        = "AzureServices"    # Add the bypass option
        defaultAction = "Deny"            # Keep the existing default action
        ipRules = [                       # Keep the existing IP rules
          {
            value = var.gitlab_runner_ip
          }
        ]
        virtualNetworkRules = [           # Keep the existing virtual network rules
          {
            id = data.azurerm_subnet.privateendpoint_subnet.id
          },
          {
            id = data.azurerm_subnet.appgw_subnet.id
          }
        ]
      }
    }
  })

  depends_on = [azurerm_cognitive_account.openai]
}