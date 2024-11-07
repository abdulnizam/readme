Hello World!
Conditions:
  Type             Status  Reason
  ----             ------  ------
  Progressing      True    NewReplicaSetCreated
  Available        False   MinimumReplicasUnavailable
  ReplicaFailure   True    FailedCreate
OldReplicaSets:    <none>
NewReplicaSet:     learning-and-development-main-578c7f9968 (0/2 replicas created)
Events:
  Type    Reason             Age   From                   Message
  ----    ------             ----  ----                   -------
  Normal  ScalingReplicaSet  61s   deployment-controller  Scaled up replica set learning-and-development-main-578c7f9968 to 1
  Normal  ScalingReplicaSet  60s   deployment-controller  Scaled up replica set learning-and-development-main-578c7f9968 to 2 from 1
