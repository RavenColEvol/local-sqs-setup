#! /bin/bash

docker run \
  --name alpine-sqs \
  -p 9324:9324 \
  -p 9325:9325 \
  --platform linux/amd64 \
  -v ./sqs-insight.conf:/opt/sqs-insight.conf \
  -v ./elasticmq.conf:/opt/elasticmq.conf \
  -d roribio16/alpine-sqs:latest