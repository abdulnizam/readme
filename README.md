#11 [7/9] RUN npm config set registry https://nexus.nonprod.dwpcloud.uk/repository/npm/     && echo "prefer-offline=true" >> ~/.npmrc     && echo "fetch-retries=1" >> ~/.npmrc     && npm install prisma@5.17.0
#11 0.632 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#11 0.632 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#11 0.817 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
#11 0.818 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
#11 11.43 npm error code SELF_SIGNED_CERT_IN_CHAIN
#11 11.43 npm error errno SELF_SIGNED_CERT_IN_CHAIN
#11 11.43 npm error request to https://nexus.nonprod.dwpcloud.uk/repository/npm/prisma failed, reason: self-signed certificate in certificate chain
#11 11.43 npm error A complete log of this run can be found in: /root/.npm/_logs/2025-07-28T10_10_42_193Z-debug-0.log
#11 ERROR: process "/bin/sh -c npm config set registry https://nexus.nonprod.dwpcloud.uk/repository/npm/     && echo \"prefer-offline=true\" >> ~/.npmrc     && echo \"fetch-retries=1\" >> ~/.npmrc     && npm install prisma@5.17.0" did not complete successfully: exit code: 1
------
 > [7/9] RUN npm config set registry https://nexus.nonprod.dwpcloud.uk/repository/npm/     && echo "prefer-offline=true" >> ~/.npmrc     && echo "fetch-retries=1" >> ~/.npmrc     && npm install prisma@5.17.0:
0.632 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
0.632 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
0.817 npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
0.818 npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
11.43 npm error code SELF_SIGNED_CERT_IN_CHAIN
11.43 npm error errno SELF_SIGNED_CERT_IN_CHAIN
11.43 npm error request to https://nexus.nonprod.dwpcloud.uk/repository/npm/prisma failed, reason: self-signed certificate in certificate chain
11.43 npm error A complete log of this run can be found in: /root/.npm/_logs/2025-07-28T10_10_42_193Z-debug-0.log
------
Dockerfile:37
--------------------
  36 |     # Configure npm to use internal registry and install Prisma
  37 | >>> RUN npm config set registry https://nexus.nonprod.dwpcloud.uk/repository/npm/ \
  38 | >>>     && echo "prefer-offline=true" >> ~/.npmrc \
  39 | >>>     && echo "fetch-retries=1" >> ~/.npmrc \
  40 | >>>     && npm install prisma@5.17.0
  41 |     
--------------------
ERROR: failed to solve: process "/bin/sh -c npm config set registry https://nexus.nonprod.dwpcloud.uk/repository/npm/     && echo \"prefer-offline=true\" >> ~/.npmrc     && echo \"fetch-retries=1\" >> ~/.npmrc     && npm install prisma@5.17.0" did not complete successfully: exit code: 1
