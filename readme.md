Hello World!

---
kubernetesAPI:
  enabled: true
fullnameOverride: "learning-and-development"
mandatoryLabels:
  application: "doc-manager"
  function: "Digital-Modernisation-and-Efficiency"
  environment: "Dev"

aws:
  services:
    iam:
      enabled: true
      role: arn:aws:iam::943009210227:role/pdu-dev-aii-gail-content-creation-gail-account

deployment:
  env:
    NODE_ENV: development
    db_name: gaildev
    # db_url: db.aii-gail-gaildev.pdu-dev.hcs-eks.dwpcloud.uk
    # db_username: /mnt/secrets-store/username
    # db_password: /mnt/secrets-store/password
    # db_certificate: /app/rds-truststore.jks
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 1
    maxUnavailable: 25%
  replicasCount: 1
  image:
    pullPolicy: Always
    repository: 943009210227.dkr.ecr.eu-west-2.amazonaws.com/pdu-dev/tenant/aii-gail/doc-manager
    imagePullSecrets: []
  serviceAccount:
    create: true
    name: gail-account
    automountToken: true

  securityContext:
    runAsUser: 10002
    runAsGroup: 20002
    capabilities:
      drop: ["ALL"]
    runAsNonRoot: true
    readOnlyRootFilesystem: true
    allowPrivilegeEscalation: false
    seccompProfile:
      type: RuntimeDefault

  # volumes:
  #   - name: secrets-store
  #     csi:
  #       driver: secrets-store.csi.x-k8s.io
  #       readOnly: true
  #       volumeAttributes:
  #         secretProviderClass: "aii-gail-gaildev-db-creds"
  # volumeFromSecretProviderClass:
  #   aii-gail-gaildev-db-creds:
  #     mountPath: /mnt/secrets-store


  readinessProbe:
    httpGet:
      path: /v1/readiness/
      port: 8080
      scheme: HTTP
    initialDelaySeconds: 60
    periodSeconds: 10
    timeoutSeconds: 5
    successThreshold: 1
    failureThreshold: 3
  livenessProbe:
    httpGet:
      path: /v1/liveness/
      port: 8080
      scheme: HTTP
    initialDelaySeconds: 120
    periodSeconds: 100
    timeoutSeconds: 5
    successThreshold: 1
    failureThreshold: 3
  resources:
    limits:
      cpu: 1000m
      memory: 512Mi
      ephemeral-storage: 128M
    requests:
      cpu: 50m
      memory: 128Mi
      ephemeral-storage: 64M

  terminationGracePeriodSeconds: 100
  nodeSelector:
    agentpool: internal
  affinity: {}
  tolerations: []

  emptyDirVolume:
    enabled: true
    mountPath: /tmp

horizontalPodAutoscaler:
  enabled: true
  minReplicas: 2
  maxReplicas: 4
  additionalMetrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 50

networkPolicy:
  ingress:
    - namespace: aii-gail-front-end-ui
      app: front-end-ui
      port: 8080

  egress:
    - namespace: aii-gail-front-end-ui
      app: front-end-ui
      port: 8080

service:
  name: doc-manager
  ports:
    http:
      protocol: TCP
      port: 8080
      targetPort: 8080
  type: ClusterIP

istio:
  enabled: true
  # enabled: false
  ingress:
    enabled: true
    gateways:
      - istio-ingress/gateway-platform
    hosts:
      - doc-manager.aii.pdu-dev.hcs-eks.dwpcloud.uk
    http:
      - route:
          - destination:
              host: doc-manager
              port:
                number: 8080

podDisruptionBudget:
  maxUnavailable: 1
