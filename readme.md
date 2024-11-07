Hello World!

kubectl get events 
]LAST SEEN   TYPE      REASON                    OBJECT                                                  MESSAGE
53m         Normal    NoPods                    poddisruptionbudget/doc-manager-main                    No matching pods found
10m         Warning   FailedCreate              replicaset/learning-and-development-main-578c7f9968     Error creating: admission webhook "admission.ecr.amazonaws.com" denied the request: image 'pdu-dev/tenant/aii-gail/doc-manager:ac4b0fc7' contains CRITICAL vulnerabilities
2m15s       Warning   FailedCreate              replicaset/learning-and-development-main-578c7f9968     Error creating: admission webhook "admission.ecr.amazonaws.com" denied the request: image 'pdu-dev/tenant/aii-gail/doc-manager:ac4b0fc7' contains CRITICAL vulnerabilities
8m57s       Warning   FailedCreate              replicaset/learning-and-development-main-5b9df8f4cc     Error creating: admission webhook "admission.ecr.amazonaws.com" denied the request: image 'pdu-dev/tenant/aii-gail/doc-manager:ac4b0fc7' contains CRITICAL vulnerabilities
19m         Warning   FailedCreate              replicaset/learning-and-development-main-6549476f99     Error creating: admission webhook "admission.ecr.amazonaws.com" denied the request: image 'pdu-dev/tenant/aii-gail/doc-manager:41b03e6b' contains CRITICAL vulnerabilities
56m         Warning   FailedMount               pod/learning-and-development-main-779f7fb7d8-8frjs      (combined from similar events): MountVolume.SetUp failed for volume "aii-gail-gaildev-db-creds-volume" : rpc error: code = Unknown desc = failed to mount secrets store objects for pod aii-gail-doc-manager/learning-and-development-main-779f7fb7d8-8frjs, err: rpc error: code = Unknown desc = Failed fetching secret arn:aws:secretsmanager:eu-west-2:943009210227:secret:/pdu-dev/aii-gail/gaildev/db-creds-MvqSCF: WebIdentityErr: failed to retrieve credentials...
53m         Normal    SuccessfulDelete          replicaset/learning-and-development-main-779f7fb7d8     Deleted pod: learning-and-development-main-779f7fb7d8-8frjs
15m         Warning   FailedCreate              replicaset/learning-and-development-main-787d697454     Error creating: admission webhook "admission.ecr.amazonaws.com" denied the request: image 'pdu-dev/tenant/aii-gail/doc-manager:47633744' contains CRITICAL vulnerabilities
14m         Warning   FailedCreate              replicaset/learning-and-development-main-868cfdb5f7     Error creating: admission webhook "admission.ecr.amazonaws.com" denied the request: image 'pdu-dev/tenant/aii-gail/doc-manager:559ad501' contains CRITICAL vulnerabilities
3m47s       Warning   FailedGetResourceMetric   horizontalpodautoscaler/learning-and-development-main   failed to get cpu utilization: unable to get metrics for resource cpu: no metrics returned from resource metrics API
8m47s       Warning   FailedGetScale            horizontalpodautoscaler/learning-and-development-main   deployments/scale.apps "learning-and-development-main" not found
53m         Normal    ScalingReplicaSet         deployment/learning-and-development-main                Scaled down replica set learning-and-development-main-779f7fb7d8 to 0 from 1
53m         Normal    ScalingReplicaSet         deployment/learning-and-development-main                Scaled up replica set learning-and-development-main-787d697454 to 1 from 0
15m         Normal    ScalingReplicaSet         deployment/learning-and-development-main                Scaled down replica set learning-and-development-main-6549476f99 to 0 from 1
15m         Normal    ScalingReplicaSet         deployment/learning-and-development-main                Scaled up replica set learning-and-development-main-578c7f9968 to 1 from 0
9m42s       Normal    ScalingReplicaSet         deployment/learning-and-development-main                Scaled down replica set learning-and-development-main-868cfdb5f7 to 0 from 1
9m42s       Normal    ScalingReplicaSet         deployment/learning-and-development-main                Scaled up replica set learning-and-development-main-5b9df8f4cc to 1 from 0
7m48s       Normal    ScalingReplicaSet         deployment/learning-and-development-main                Scaled up replica set learning-and-development-main-578c7f9968 to 1
7m47s       Normal    ScalingReplicaSet         deployment/learning-and-development-main                Scaled up replica set learning-and-development-main-578c7f9968 to 2 from 1
