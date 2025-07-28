RUN npm config set registry https://nexus.nonprod.dwpcloud.uk/repository/npm/ \
    && npm config set strict-ssl false \
    && npm install prisma@5.17.0