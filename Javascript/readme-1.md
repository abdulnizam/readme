aws iam get-user-policy --user-name abdul.nizam --policy-name SSM-StartSession


aws iam attach-user-policy --user-name abdul.nizam --policy-arn arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore


aws sts get-caller-identity


aws configure list
aws configure --profile default



aws ec2 associate-iam-instance-profile --instance-id i-07a7797becf4fdac4 --iam-instance-profile Name=ithc-kali-pdu-test-role


ssh i-07a7797becf4fdac4


aws ssm start-session --target i-07a7797becf4fdac4


aws ssm start-session --target i-07a7797becf4fdac4 --document-name AWS-StartPortForwardingSession --parameters "portNumber=22,localPortNumber=2222"

scp -P 2222 gail-kong-web-sso-0.5.0.tar ssm-user@localhost:/home/ssm-user/Gail



aws ssm start-session --target i-07a7797becf4fdac4 --document-name AWS-StartPortForwardingSession --parameters "portNumber=22,localPortNumber=2222"


rsync -e "ssh -p 2222" -avz gail-kong-web-sso-0.5.0.tar ssm-user@localhost:/home/ssm-user/Gail


base64 gail-kong-web-sso-0.5.0.tar > gail_encoded.b64


aws ssm send-command \
    --document-name "AWS-RunShellScript" \
    --targets "Key=instanceids,Values=i-07a7797becf4fdac4" \
    --parameters 'commands=["echo BASE64_ENCODED_STRING > /tmp/gail_encoded.b64"]' \
    --region eu-west-2


aws ec2 describe-instances \
    --instance-ids i-07a7797becf4fdac4 \
    --query "Reservations[*].Instances[*].IamInstanceProfile"


DEM-FF20RFW3CM :: ~/Desktop » aws ec2 describe-instances \
    --instance-ids i-07a7797becf4fdac4 \
    --query "Reservations[*].Instances[*].IamInstanceProfile"
[
    [
        {
            "Arn": "arn:aws:iam::943009210227:instance-profile/kali-iam-profile-pdu-test",
            "Id": "AIPA5XD52T5ZWDTCUYWYE"
        }
    ]
]


aws iam get-instance-profile --instance-profile-name kali-iam-profile-pdu-test

aws iam list-attached-role-policies --role-name ithc-kali-pdu-test-role

aws iam get-role-policy --role-name kali-ssm-role --policy-name <policy-name>


aws iam attach-role-policy \
    --role-name kali-ssm-role \
    --policy-arn arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore


sudo cat /var/log/amazon/ssm/amazon-ssm-agent.log



aws iam attach-role-policy \
    --role-name your-instance-role \
    --policy-arn arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore


DEM-FF20RFW3CM :: ~/Desktop » aws iam list-attached-role-policies --role-name ithc-kali-pdu-test-role                                                                                                                                130 ↵
{
    "AttachedPolicies": [
        {
            "PolicyName": "AmazonSSMManagedInstanceCore",
            "PolicyArn": "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
        }
    ]
}


sudo cat /var/log/amazon/ssm/amazon-ssm-agent.log | tail -n 50


scp -o ProxyCommand="aws ssm start-session --target i-07a7797becf4fdac4 --document-name AWS-StartSSHSession --parameters 'portNumber=22'" \
    gail-kong-web-sso-0.5.0.tar ssm-user@i-07a7797becf4fdac4:/home/ssm-user/Gail/


aws ssm list-command-invocations --details


aws iam attach-role-policy \
    --role-name ithc-kali-pdu-test-role \
    --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess


base64 gail-kong-web-sso-0.5.0.tar > gail_encoded.b64

aws ssm send-command \
    --document-name "AWS-RunShellScript" \
    --targets "Key=instanceids,Values=i-07a7797becf4fdac4" \
    --parameters 'commands=["echo BASE64_ENCODED_STRING > /tmp/gail_encoded.b64"]' \
    --region eu-west-2


aws ssm send-command \
    --document-name "AWS-RunShellScript" \
    --targets "Key=instanceids,Values=i-07a7797becf4fdac4" \
    --parameters 'commands=["mkdir -p /home/ssm-user/Gail && curl -o /home/ssm-user/Gail/gail-kong-web-sso-0.5.0.tar https://yourdomain.com/gail-kong-web-sso-0.5.0.tar"]' \
    --region eu-west-2


aws ssm start-session \
    --target i-07a7797becf4fdac4 \
    --document-name AWS-StartPortForwardingSession \
    --parameters 'localPortNumber=2222,remotePortNumber=22'


scp -P 2222 gail-kong-web-sso-0.5.0.tar ssm-user@localhost:/home/ssm-user/Gail/