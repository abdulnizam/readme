FYI these are the IPs from the public web.

nslookup 26jma4daa5.execute-api.eu-west-2.amazonaws.com
Server:           127.0.0.53
Address:    127.0.0.53#53

Non-authoritative answer:
Name: 26jma4daa5.execute-api.eu-west-2.amazonaws.com
Address: 3.166.65.59
Name: 26jma4daa5.execute-api.eu-west-2.amazonaws.com
Address: 3.166.65.108
Name: 26jma4daa5.execute-api.eu-west-2.amazonaws.com
Address: 3.166.65.20
Name: 26jma4daa5.execute-api.eu-west-2.amazonaws.com
Address: 3.166.65.112

So it looks like the resolution is going to a NAT? Then out to AWS?

@Marc Allen when you did a TCP telnet on port 443 for the domain, which IP did it resolve to?

Thanks,
