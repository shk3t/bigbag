#!/bin/bash
BASE_DIR=/home/shket/projects/bigbug/server
source $BASE_DIR/.venv/bigbag/bin/activate
exec gunicorn config.wsgi -c $BASE_DIR/etc/gunicorn.conf.py
