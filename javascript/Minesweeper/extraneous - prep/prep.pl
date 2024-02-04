#!/usr/bin/perl

@c = (<STDIN>);

chomp @c;

foreach (@c) {
	s/( |\t)+/,/g;
}

print join ",", @c;