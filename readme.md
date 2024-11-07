Hello World!

    Environment:
      NODE_ENV:  development
      db_name:   gaildev
    Mounts:
      /tmp from tmp-volume (rw)
  Volumes:
   tmp-volume:
    Type:                       EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:                     
    SizeLimit:                  <unset>
  Topology Spread Constraints:  kubernetes.io/hostname:ScheduleAnyway when max skew 1 is exceeded for selector app=doc-manager,app.kubernetes.io/component=,app.kubernetes.io/instance=content-creation-document-management-main,app.kubernetes.io/managed-by=Helm,app.kubernetes.io/name=doc-manager,app.kubernetes.io/part-of=,app.kubernetes.io/version=,dwp.gov.uk-application=doc-manager,dwp.gov.uk-environment=Dev,dwp.gov.uk-function=Digital-Modernisation-and-Efficiency,helm.sh/chart=generic-service-0.50.0
                                topology.kubernetes.io/zone:ScheduleAnyway when max skew 1 is exceeded
  Node-Selectors:               <none>
  Tolerations:                  <none>
Conditions:
  Type             Status  Reason
  ----             ------  ------
  Available        False   MinimumReplicasUnavailable
  ReplicaFailure   True    FailedCreate
  Progressing      False   ProgressDeadlineExceeded
OldReplicaSets:    learning-and-development-main-74d6b9c5c6 (0/0 replicas created), learning-and-development-main-779f7fb7d8 (0/0 replicas created), learning-and-development-main-6549476f99 (0/1 replicas created), learning-and-development-main-868cfdb5f7 (0/1 replicas created)
NewReplicaSet:     learning-and-development-main-787d697454 (0/1 replicas created)
Events:
  Type    Reason             Age   From                   Message
  ----    ------             ----  ----                   -------
  Normal  ScalingReplicaSet  15m   deployment-controller  Scaled down replica set learning-and-development-main-779f7fb7d8 to 0 from 1
  Normal  ScalingReplicaSet  15m   deployment-controller  Scaled up replica set learning-and-development-main-787d697454 to 1 from 0
