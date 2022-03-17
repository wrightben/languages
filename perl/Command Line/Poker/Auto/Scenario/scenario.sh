#!/bin/bash
if test -f "hands.txt"; then
   rm hands.txt
fi
sh ./poker.sh

if test -f "../distribution.csv"; then
   rm ../distribution.csv
fi

# Analysis
php analysis.php
cd "Optional"
php position.php

# Optional position distribution
#php position.php 2
#php position.php 3