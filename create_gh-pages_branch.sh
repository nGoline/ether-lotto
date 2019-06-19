#!/bin/bash
CURRENT_BRANCH=git branch | grep \* | cut -d ' ' -f2

git subtree split --prefix web/build $CURRENT_BRANCH

git push origin 157a66d050d7a6188f243243264c765f18bc85fb956:gh-pages --force