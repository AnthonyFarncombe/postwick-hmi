#!/bin/bash

tar czf hmi.tar.gz -C dist .
scp hmi.tar.gz nch@192.168.35.42:~
rm hmi.tar.gz

ssh -tt nch@192.168.35.42 << 'ENDSSH'
rm -rf var/www/postwick-hmi/*
tar xf hmi.tar.gz -C /var/www/postwick-hmi
rm hmi.tar.gz
exit
ENDSSH
