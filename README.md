gary.addison@DEM-GXKXGGQY99 helm % kubectl port-forward middleware-6d7cf9bcb6-ks7sj 3000 8080 -n icca
Forwarding from 127.0.0.1:3000 -> 3000
Forwarding from [::1]:3000 -> 3000
Forwarding from 127.0.0.1:8080 -> 8080
Forwarding from [::1]:8080 -> 8080
Handling connection for 3000
E0718 12:38:29.452664   43050 portforward.go:424] "Unhandled Error" err="an error occurred forwarding 3000 -> 3000: error forwarding port 3000 to pod 5c46b9a128dd2bbccc02cd96cc91d6354739e49ef3d5e7531b54b40c5d92b344, uid : failed to execute portforward in network namespace \"/var/run/netns/cni-d0c4965f-80e9-d317-058a-d9730da54e61\": failed to connect to localhost:3000 inside namespace \"5c46b9a128dd2bbccc02cd96cc91d6354739e49ef3d5e7531b54b40c5d92b344\", IPv4: dial tcp4 127.0.0.1:3000: connect: connection refused IPv6 dial tcp6: address localhost: no suitable address found "
error: lost connection to pod
