#!/usr/bin/perl

@contents = (<STDIN>);

chomp @contents;

# Read the first line of the file
print $contents[0]; 

exit;