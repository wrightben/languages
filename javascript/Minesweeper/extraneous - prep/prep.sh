#!/bin/bash

pbpaste > prep.txt
cat prep.txt | perl prep.pl | pbcopy