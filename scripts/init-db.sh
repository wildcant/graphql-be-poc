#!/bin/bash

# Start mongodb and postgres instance.
docker compose up -d

# Wait 2 seconds for mongodb container to start.
echo 'Waiting 2 seconds for mongodb container to start..'
sleep 2

# Initiate the Replica Set.
docker exec -it mongo1 mongosh --eval "rs.initiate({ _id: \"rs\", members: [{ _id: 0, host: \"mongo1\" }]})"

# Check replica set was set correctly.
docker exec -it mongo1 mongosh --eval "rs.status()"

# Avoid sudden disconnection error.
sleep 1
