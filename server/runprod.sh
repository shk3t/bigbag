#!/bin/bash
BASE_DIR=/home/shket/projects/avegabug/server
source $BASE_DIR/.venv/avegabag/bin/activate
exec gunicorn config.wsgi -c $BASE_DIR/etc/gunicorn.conf.py
