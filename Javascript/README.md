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
