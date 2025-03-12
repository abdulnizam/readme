

Initial Response:
1. Acknowledge the alert in the monitoring system.
2. Notify the on-call team and stakeholders.
Investigation Steps
1. Access to AWS 
    * Log in to the AWS Dashboard https://dwp-sso.awsapps.com/start/#/?tab=accounts
2. Access to Grafana Dashboard 
	https://grafana.tooling.pdu-dev.hcs-eks.dwpcloud.uk/d/AII-GAIL/aii-gail?orgId=1&refresh=30s

1. Review recent deployments pipelines or changes to the application.
2. Verify the status of dependent services and APIs..
3. Go to cloud watch for the logs to monitor - https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#logsV2:logs-insights$3FqueryDetail$3D~(end~0~start~-3600~timeType~'RELATIVE~unit~'seconds~editorString~'~isLiveTail~false~queryId~'~source~(~'*2faws*2feks*2fpdu-dev-eks-cluster*2ftenant*2faii-gail))
Resolution Steps
1. If a recent deployment caused the issue, consider rolling back.
2. Restart the failed pods if necessary.
3. Scale out resources if the issue is load-related.
4. Fix any identified code or configuration issues.
5. Verify dependent services are operational and accessible.
