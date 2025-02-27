aws sso login --profile future-dev
aws sts get-caller-identity --profile future-dev
aws eks list-clusters --region eu-west-2 --profile future-dev


arn:aws:iam::741448915328:role/aii-gail-dev-doc-manager-role

aws eks update-kubeconfig --name <your-cluster-name> --region <your-region> --profile future-dev


aws eks update-kubeconfig --name my-cluster --region eu-west-1 --profile future-dev


kubectl config current-context
kubectl get nodes


KUBECONFIG=~/.kube/config k9s



export AWS_PROFILE=future-dev
export KUBECONFIG=~/.kube/config
k9s



echo 'export AWS_PROFILE=future-dev' >> ~/.zshrc
echo 'export KUBECONFIG=~/.kube/config' >> ~/.zshrc
source ~/.zshrc

aws sso login --profile future-dev


aws sts assume-role \
    --role-arn arn:aws:iam::741448915328:role/aii-gail-dev-doc-manager-role \
    --role-session-name k9s-session \
    --profile future-dev


export AWS_ACCESS_KEY_ID="ASIAEXAMPLE"
export AWS_SECRET_ACCESS_KEY="example-secret"
export AWS_SESSION_TOKEN="example-token"
export AWS_REGION="<your-region>"  # e.g., eu-west-1



aws eks update-kubeconfig --name gail-dev-cluster --region eu-west-1 --role-arn arn:aws:iam::741448915328:role/aii-gail-dev-doc-manager-role



export AWS_PROFILE=future-dev
export AWS_ROLE_ARN="arn:aws:iam::741448915328:role/aii-gail-dev-doc-manager-role"
export AWS_REGION="eu-west-1"

CREDENTIALS=$(aws sts assume-role --role-arn $AWS_ROLE_ARN --role-session-name k9s-session --profile $AWS_PROFILE --query "Credentials" --output json)
export AWS_ACCESS_KEY_ID=$(echo $CREDENTIALS | jq -r '.AccessKeyId')
export AWS_SECRET_ACCESS_KEY=$(echo $CREDENTIALS | jq -r '.SecretAccessKey')
export AWS_SESSION_TOKEN=$(echo $CREDENTIALS | jq -r '.SessionToken')

aws eks update-kubeconfig --name gail-dev-cluster --region $AWS_REGION --role-arn $AWS_ROLE_ARN


source ~/.zshrc  # or source ~/.bashrc