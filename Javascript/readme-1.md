Alert #

Component

Incident Severity

Alert Name (SLI)

Alert Condition (SLO)

Metric Namespace

Actions/Steps to Take

1

GAIL Microservices

4

http 4xx errors

Count of HTTP 4xx errors >= 1 over 5 minutes
Exceptions: HTTP 401, 403, 404

istio_requests_total



2

GAIL Microservices

4

http 5xx errors

Count of HTTP 5xx errors >= 1 over 5 minutes

istio_requests_total



3

GAIL Microservices

4

Availability  

Microservice availability  < 99.5% across 5 minutes across core business hours

kube_pod_status_phase



4

Application Load Balancer (Bedrock Account)

4

Health check 

Target Group does not meet the routing healthy state requirements:

One AZ is down

UnhealthyStateRouting



5

Application Load Balancer (Bedrock Account)

4

Health check 

Target Group does not meet the routing healthy state requirements:

Two or more AZ’s are down

UnhealthyStateRouting



6

Data Storage (DocumentDB)

4

CPU Utilisation

CPU Utilisation > 80% for more than 5 minutes

aws_docdb_cpuutilization_average



7

Data Storage (DocumentDB)

4

Availability

Availability < 99.5% across 5 minutes across core business hours





8

Data Storage (DocumentDB)

4

Free Storage

Available storage on the DocDB instance is < 4GB

aws_docdb_free_local_storage_average



9

Data Storage (DocumentDB)

4

Free Storage

Available storage on the DocDB instance is < 2GB

aws_docdb_free_local_storage_average

