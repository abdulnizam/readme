
│ Error: Provider produced inconsistent final plan
│ 
│ When expanding the plan for azurerm_application_gateway.appgtw to include new values learned so far during apply, provider
│ "registry.terraform.io/hashicorp/azurerm" produced an invalid new value for .probe: planned set element
│ cty.ObjectVal(map[string]cty.Value{"host":cty.StringVal("ai-search-service-devt1-sd-sib-dwpask.search.windows.net"),
│ "id":cty.StringVal("/subscriptions/7ef85eaf-ac4b-4dd0-89fc-d645056092a8/resourceGroups/rg-uks-devt1-sd-sib-dwpask/providers/Microsoft.Network/applicationGateways/devt1-apgw-sd-sib-dwpask/probes/search-devt1-health-probe-sd-sib-dwpask"),
│ "interval":cty.NumberIntVal(30),
│ "match":cty.ListVal([]cty.Value{cty.ObjectVal(map[string]cty.Value{"body":cty.NullVal(cty.String),
│ "status_code":cty.ListVal([]cty.Value{cty.StringVal("200-399")})})}), "minimum_servers":cty.NumberIntVal(0),
│ "name":cty.StringVal("search-devt1-health-probe-sd-sib-dwpask"), "path":cty.StringVal("/health"),
│ "pick_host_name_from_backend_http_settings":cty.False, "port":cty.NumberIntVal(443), "protocol":cty.StringVal("Https"),
│ "timeout":cty.NumberIntVal(30), "unhealthy_threshold":cty.NumberIntVal(3)}) does not correlate with any element in actual.
│ 
│ This is a bug in the provider, which should be reported in the provider's own issue tracker.
╵
╷
│ Error: Provider produced inconsistent final plan
│ 
│ When expanding the plan for azurerm_application_gateway.appgtw to include new values learned so far during apply, provider
│ "registry.terraform.io/hashicorp/azurerm" produced an invalid new value for .backend_http_settings: planned set element
│ cty.ObjectVal(map[string]cty.Value{"affinity_cookie_name":cty.NullVal(cty.String),
│ "authentication_certificate":cty.ListValEmpty(cty.Object(map[string]cty.Type{"id":cty.String, "name":cty.String})),
│ "connection_draining":cty.ListValEmpty(cty.Object(map[string]cty.Type{"drain_timeout_sec":cty.Number, "enabled":cty.Bool})),
│ "cookie_based_affinity":cty.StringVal("Disabled"),
│ "host_name":cty.StringVal("ai-search-service-devt1-sd-sib-dwpask.search.windows.net"),
│ "id":cty.StringVal("/subscriptions/7ef85eaf-ac4b-4dd0-89fc-d645056092a8/resourceGroups/rg-uks-devt1-sd-sib-dwpask/providers/Microsoft.Network/applicationGateways/devt1-apgw-sd-sib-dwpask/backendHttpSettingsCollection/https-devt1-aisearch-backend-sd-sib-dwpask"),
│ "name":cty.StringVal("https-devt1-aisearch-backend-sd-sib-dwpask"), "path":cty.StringVal("/"),
│ "pick_host_name_from_backend_address":cty.False, "port":cty.NumberIntVal(443),
│ "probe_id":cty.StringVal("/subscriptions/7ef85eaf-ac4b-4dd0-89fc-d645056092a8/resourceGroups/rg-uks-devt1-sd-sib-dwpask/providers/Microsoft.Network/applicationGateways/devt1-apgw-sd-sib-dwpask/probes/search-devt1-health-probe-sd-sib-dwpask"),
│ "probe_name":cty.StringVal("search-devt1-health-probe-sd-sib-dwpask"), "protocol":cty.StringVal("Https"),
│ "request_timeout":cty.NumberIntVal(60), "trusted_root_certificate_names":cty.ListValEmpty(cty.String)}) does not correlate
│ with any element in actual.
│ 
│ This is a bug in the provider, which should be reported in the provider's own issue tracker.
