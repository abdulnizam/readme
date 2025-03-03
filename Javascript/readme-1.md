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


DEM-FF20RFW3CM :: ~/Desktop » rsync -e "ssh -p 2222" -avz gail-kong-web-sso-0.5.0.tar ssm-user@localhost:/home/ssm-user/Gail
ssm-user@localhost: Permission denied (publickey).
rsync: connection unexpectedly closed (0 bytes received so far) [sender]
rsync error: unexplained error (code 255) at /AppleInternal/Library/BuildRoots/5bb93434-bef0-11ef-bef2-d285688f7a47/Library/Caches/com.apple.xbs/Sources/rsync/rsync/io.c(453) [sender=2.6.9]
DEM-FF20RFW3CM :: ~/Desktop » scp -P 2222 gail-kong-web-sso-0.5.0.tar ssm-user@localhost:/home/ssm-user/Gail                                                                                       255 ↵
ssm-user@localhost: Permission denied (publickey).
scp: Connection closed
DEM-FF20RFW3CM :: ~/Desktop »      
