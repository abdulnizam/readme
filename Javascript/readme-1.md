aws iam get-user-policy --user-name abdul.nizam --policy-name SSM-StartSession


aws iam attach-user-policy --user-name abdul.nizam --policy-arn arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore


aws sts get-caller-identity


aws configure list
aws configure --profile default



aws ec2 associate-iam-instance-profile --instance-id i-07a7797becf4fdac4 --iam-instance-profile Name=SSM-EC2-Role


ssh i-07a7797becf4fdac4


aws ssm start-session --target i-07a7797becf4fdac4