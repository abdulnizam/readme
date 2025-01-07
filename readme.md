
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
  

│ Error: Invalid body
│ 
│   with azapi_resource.content_filter,
│   on openai.tf line 65, in resource "azapi_resource" "content_filter":
│   65: resource "azapi_resource" "content_filter" {
│ 
│ The argument "body" is invalid: unmarshaling failed: value:
│ "{\"displayName\":\"\",\"properties\":{\"basePolicyName\":\"Microsoft.Default\",\"contentFilters\":[{\"blocking\":true,\"enabled\":true,\"name\":\"hate\",\"severityThreshold\":\"High\",\"source\":\"Prompt\"},{\"blocking\":true,\"enabled\":true,\"name\":\"sexual\",\"severityThreshold\":\"High\",\"source\":\"Prompt\"},{\"blocking\":true,\"enabled\":true,\"name\":\"selfharm\",\"severityThreshold\":\"High\",\"source\":\"Prompt\"},{\"blocking\":true,\"enabled\":true,\"name\":\"violence\",\"severityThreshold\":\"High\",\"source\":\"Prompt\"},{\"blocking\":true,\"enabled\":true,\"name\":\"hate\",\"severityThreshold\":\"High\",\"source\":\"Completion\"},{\"blocking\":true,\"enabled\":true,\"name\":\"sexual\",\"severityThreshold\":\"High\",\"source\":\"Completion\"},{\"blocking\":true,\"enabled\":true,\"name\":\"selfharm\",\"severityThreshold\":\"High\",\"source\":\"Completion\"},{\"blocking\":true,\"enabled\":true,\"name\":\"violence\",\"severityThreshold\":\"High\",\"source\":\"Completion\"},{\"blocking\":true,\"enabled\":true,\"name\":\"jailbreak\",\"source\":\"Prompt\"},{\"blocking\":true,\"enabled\":true,\"name\":\"protected_material_text\",\"source\":\"Completion\"},{\"blocking\":true,\"enabled\":true,\"name\":\"protected_material_code\",\"source\":\"Completion\"}],\"mode\":\"Default\",\"type\":\"UserManaged\"}}",
│ err: json: cannot unmarshal string into Go value of type map[string]interface {}
╵
╷
│ Error: Invalid Type
│ 
│   with azapi_resource.content_filter,
│   on openai.tf line 71, in resource "azapi_resource" "content_filter":
│   71:   body = jsonencode({
│   72:     displayName = ""
│   73:     properties = {
│   74:       mode           = "Default",
│   75:       basePolicyName = "Microsoft.Default",
│   76:       type           = "UserManaged"
│   77:       contentFilters = [
│   78:         { name = "hate", blocking = true, enabled = true, severityThreshold = "High", source = "Prompt" },
│   79:         { name = "sexual", blocking = true, enabled = true, severityThreshold = "High", source = "Prompt" },
│   80:         { name = "selfharm", blocking = true, enabled = true, severityThreshold = "High", source = "Prompt" },
│   81:         { name = "violence", blocking = true, enabled = true, severityThreshold = "High", source = "Prompt" },
│   82:         { name = "hate", blocking = true, enabled = true, severityThreshold = "High", source = "Completion" },
│   83:         { name = "sexual", blocking = true, enabled = true, severityThreshold = "High", source = "Completion" },
│   84:         { name = "selfharm", blocking = true, enabled = true, severityThreshold = "High", source = "Completion" },
│   85:         { name = "violence", blocking = true, enabled = true, severityThreshold = "High", source = "Completion" },
│   86:         { name = "jailbreak", blocking = true, enabled = true, source = "Prompt" },
│   87:         { name = "protected_material_text", blocking = true, enabled = true, source = "Completion" },
│   88:         { name = "protected_material_code", blocking = true, enabled = true, source = "Completion" },
│   89:       ]
│   90:     }
│   91:   })
│ 
│ The value must not be a string




resource "azapi_resource" "content_filter" {
  type = "Microsoft.CognitiveServices/accounts/raiPolicies@2024-10-01"
  name = local.content_filter
  parent_id = azurerm_cognitive_account.openai.id
  schema_validation_enabled = false

  body = jsonencode({
    displayName = ""
    properties = {
      mode           = "Default",
      basePolicyName = "Microsoft.Default",
      type           = "UserManaged"
      contentFilters = [
        { name = "hate", blocking = true, enabled = true, severityThreshold = "High", source = "Prompt" },
        { name = "sexual", blocking = true, enabled = true, severityThreshold = "High", source = "Prompt" },
        { name = "selfharm", blocking = true, enabled = true, severityThreshold = "High", source = "Prompt" },
        { name = "violence", blocking = true, enabled = true, severityThreshold = "High", source = "Prompt" },
        { name = "hate", blocking = true, enabled = true, severityThreshold = "High", source = "Completion" },
        { name = "sexual", blocking = true, enabled = true, severityThreshold = "High", source = "Completion" },
        { name = "selfharm", blocking = true, enabled = true, severityThreshold = "High", source = "Completion" },
        { name = "violence", blocking = true, enabled = true, severityThreshold = "High", source = "Completion" },
        { name = "jailbreak", blocking = true, enabled = true, source = "Prompt" },
        { name = "protected_material_text", blocking = true, enabled = true, source = "Completion" },
        { name = "protected_material_code", blocking = true, enabled = true, source = "Completion" },
      ]
    }
  })

  timeouts {
    create = "60m"
    update = "60m"
    delete = "60m"
  }

  lifecycle {
    create_before_destroy = true
  }
  depends_on = [
    azurerm_cognitive_account.openai
  ]
}
