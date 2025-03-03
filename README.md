DEM-FF20RFW3CM :: ~ » aws configure list
      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile                <not set>             None    None
access_key     ****************2ROB              env
secret_key     ****************OztS              env
    region                eu-west-2      config-file    ~/.aws/config


unset AWS_ACCESS_KEY_ID
unset AWS_SECRET_ACCESS_KEY
unset AWS_SESSION_TOKEN


[default]
aws_access_key_id = YOUR_NEW_ACCESS_KEY
aws_secret_access_key = YOUR_NEW_SECRET_KEY
aws_session_token = # Leave blank unless using STS/MFA


aws sts get-caller-identity

aws sts get-session-token --duration-seconds 3600




DEM-FF20RFW3CM :: ~ » aws ssm start-session --target i-07a7797becf4fdac4

SessionManagerPlugin is not found. Please refer to SessionManager Documentation here: http://docs.aws.amazon.com/console/systems-manager/session-manager-plugin-not-found


curl -o "/tmp/session-manager-plugin.pkg" "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/mac/session-manager-plugin.pkg"
sudo installer -pkg "/tmp/session-manager-plugin.pkg" -target /

session-manager-plugin --version

aws sts get-caller-identity

aws ssm start-session --target i-07a7797becf4fdac4


aws ec2 describe-instances --instance-ids i-07a7797becf4fdac4 --query "Reservations[*].Instances[*].IamInstanceProfile"



sudo systemctl status amazon-ssm-agent

sudo systemctl restart amazon-ssm-agent