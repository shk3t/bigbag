#!/bin/bash

function check_bin() {
    local bin=$1
    echo $bin
    if ! command -v $bin &> /dev/null; then
        echo "\"$bin\" command could not be found"
        exit
    fi
}

function reset_db() {
    psql -d avegabag -f $PWD/sql/reset.sql
    rm -rf $PWD/base/migrations
    python $PWD/manage.py makemigrations base
    python $PWD/manage.py migrate
    psql -d avegabag -f $PWD/sql/init.sql
}

server_path="avegabug/server" 
if [[ $PWD =~ ${server_path}$ ]]; then
    check_bin psql
    check_bin python
    reset_db path
else
    echo "Please, run this script from \"$server_path\" dir"
fi 
