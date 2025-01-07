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

resource "azapi_resource" "this" {
  type      = "Microsoft.CognitiveServices/accounts@2024-10-01"
  name      = local.network_acls
  location  = azurerm_resource_group.dwpask_rg.location
  parent_id = azurerm_cognitive_account.openai.id
  schema_validation_enabled = false
  
  body = jsonencode({
    properties = {
      networkAcls = {
        bypass        = "AzureServices"    # Add the bypass option
      }
    }
  })

  depends_on = [azurerm_cognitive_account.openai]
}
