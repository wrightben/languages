#!/usr/bin/perl

@password = (a..z); #26
push (@password, (A..Z)); #26
push (@password, (0..9)); #10
push (@password, ("!",'$')); #2
# Array length = 63, Total Chars = 64

@key = ();
for $i (0..9) { # 10-char password ...
	push (@key, $password[int(rand($#password + 1))]); # rand(64) # R
}
push (@key, $password[int(rand(10)) + 52]); 	# include 1 digit
push (@key, $password[int(rand(2)) + 62]); 	# include 1 special char

# DEBUG: Index of characters
# foreach $i (0 .. $#password) {
# 	print "$i $password[$i]\n";
# }

print join "", @key;

exit;