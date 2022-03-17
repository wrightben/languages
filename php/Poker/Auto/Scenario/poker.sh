#!/bin/bash
COUNTER=1000
until [  $COUNTER -lt 1 ]; do
	let COUNTER-=1
	echo COUNTER $COUNTER
	node ../texas-holdem.js  >> hands.txt
done