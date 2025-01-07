resource "azapi_resource" "openai" {
  type = "Microsoft.CognitiveServices/accounts@2024-10-01"

  name     = var.openai_name
  location = azurerm_resource_group.dwpask_rg.location
  parent_id = "/subscriptions/${var.subscription_id}/resourceGroups/${azurerm_resource_group.dwpask_rg.name}"

  schema_validation_enabled = false

  body = jsonencode({
    properties = {
      customSubDomainName = var.openai_name
      kind                = "OpenAI"
      sku = {
        name = "S0"
      }
      networkAcls = {
        bypass        = "AzureServices"
        defaultAction = "Deny"
        ipRules = [
          {
            value = var.gitlab_runner_ip
          }
        ]
        virtualNetworkRules = [
          {
            id = data.azurerm_subnet.privateendpoint_subnet.id
          },
          {
            id = data.azurerm_subnet.appgw_subnet.id
          }
        ]
      }
    }
    tags = {
      Name         = "azure.dwpask.openai_cognitive_account.${var.environment_tag_name}"
      Application  = var.application
      Environment  = var.environment_tag_name
    }
  })

  depends_on = [azurerm_resource_group.dwpask_rg]
}