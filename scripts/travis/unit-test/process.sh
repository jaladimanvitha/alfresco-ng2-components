#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

command="concurrently "

cd $DIR/../../../


AFFECTED_LIBS="$(nx affected:libs --base=$BASE_HASH --head=$HEAD_HASH --plain)"

echo "================== AFFECTED_LIBS  ${AFFECTED_LIBS} ==================="

echo "================== process-services unit ==================="
if [[ $AFFECTED_LIBS =~ "process-services" || "${TRAVIS_EVENT_TYPE}" == "push"  ]];
then
    ng test process-services --watch=false || exit 1;
fi;

echo "================== insights unit ==================="
if [[ $AFFECTED_LIBS =~ "insights" || "${TRAVIS_EVENT_TYPE}" == "push"  ]];
then
    ng test insights --watch=false || exit 1;
fi;

bash <(curl -s https://codecov.io/bash) -X gcov
