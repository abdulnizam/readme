aws iam get-user-policy --user-name abdul.nizam --policy-name SSM-StartSession


aws iam attach-user-policy --user-name abdul.nizam --policy-arn arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore


aws sts get-caller-identity


aws configure list
aws configure --profile default



aws ec2 associate-iam-instance-profile --instance-id i-07a7797becf4fdac4 --iam-instance-profile Name=ithc-kali-pdu-test-role


ssh i-07a7797becf4fdac4


aws ssm start-session --target i-07a7797becf4fdac4



DEM-FF20RFW3CM :: ~/Desktop » aws iam get-user-policy --user-name abdul.nizam --policy-name SSM-StartSession                                                                                                                         255 ↵

An error occurred (NoSuchEntity) when calling the GetUserPolicy operation: The user with name abdul.nizam cannot be found.
DEM-FF20RFW3CM :: ~/Desktop » aws ssm start-session --target i-07a7797becf4fdac4                                                                                                                                                     254 ↵

Starting session with SessionId: adbul.nizam-ovnyc2zub7k7civ6lhc3cuqcou
This session is encrypted using AWS KMS.
$ aws iam get-user-policy --user-name abdul.nizam --policy-name SSM-StartSession
^C
$ exir
sh: 2: exir: not found
$ exitr
sh: 3: exitr: not found
$ exist
sh: 4: exist: not found
$ exit


Exiting session with sessionId: adbul.nizam-ovnyc2zub7k7civ6lhc3cuqcou.

DEM-FF20RFW3CM :: ~/Desktop » aws iam attach-user-policy --user-name abdul.nizam --policy-arn arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore

An error occurred (AccessDenied) when calling the AttachUserPolicy operation: User: arn:aws:iam::943009210227:user/adbul.nizam is not authorized to perform: iam:AttachUserPolicy on resource: user abdul.nizam because no identity-based policy allows the iam:AttachUserPolicy action
DEM-FF20RFW3CM :: ~/Desktop » aws sts get-caller-identity                                                                                                                                                                            254 ↵
{
    "UserId": "AIDA5XD52T5ZQZOQ2JPWE",
    "Account": "943009210227",
    "Arn": "arn:aws:iam::943009210227:user/adbul.nizam"
}
DEM-FF20RFW3CM :: ~/Desktop » aws ec2 associate-iam-instance-profile --instance-id i-07a7797becf4fdac4 --iam-instance-profile Name=ithc-kali-pdu-test-role

An error occurred (InvalidParameterValue) when calling the AssociateIamInstanceProfile operation: Value (ithc-kali-pdu-test-role) for parameter iamInstanceProfile.name is invalid. Invalid IAM Instance Profile name
DEM-FF20RFW3CM :: ~/Desktop » ssh i-07a7797becf4fdac4                                                                                                                                                                                254 ↵

An error occurred (AccessDeniedException) when calling the StartSession operation: User: arn:aws:iam::943009210227:user/adbul.nizam is not authorized to perform: ssm:StartSession on resource: arn:aws:ssm:eu-west-2::document/AWS-StartSSHSession because no identity-based policy allows the ssm:StartSession action
Connection closed by UNKNOWN port 65535
DEM-FF20RFW3CM :: ~/Desktop »
