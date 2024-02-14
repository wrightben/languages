# Chapter 4
# Basic Types

# FUNCTIONS in Ch 4: 
# dir
# len
# list
# set
# map
# ord
# range
# sum
# type



# ------------------------------

# NUMBERS 
print ("\nNUMBERS","\n","------------------\n")
# (and Modules: math, random)
import math

#	constants
print( math.pi )

#	basic operations
print (3)
print (3 + 3)
print (3 * 3) 
print (3 ** 3)

#	complex operations
print (math.sqrt(3**2))

#	Random ? - Doesn't work.
import random
print ("Ch4 - Types: Random")
print ( math.floor( random.random() * 52 ) + 1 )







# ------------------------------

# STRINGS
print ("\nSTRINGS","\n","------------------\n")
print ("Ch4 - Types: Strings");
s = 'spam'
print (len(s), " = len('spam')" )
print( s[0] * 4, " = s[0] * 4" )







# ------------------------------

print ("\nLIST, SET, GENERATOR","\n","------------------\n")
# LIST made by comprehension
l = [ord(x) for x in 'spaam']  # or ... 
l = list('spaam')
print( l, '\n' )

# SET | DICTIONARY made by comprehension (A set is a mapping of keys without values, apparently. Duplicate keys cannot exist.)
d = { ord(x) for x in 'spaam' }
print( d, '\n' )


# GENERATOR made by comprehension
G = ( sum( row ) for row in [ # List (Matrix)
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
] )
print( next(G) )

# Summary: Comprehension: [ (list), { (set), ( (Generator)

d = dict(zip( [1,2], ["a","b"] ))
print('Dict: ', d)





import string

# SET OPERATIONS on SETS
def example():
	al = string.ascii_lowercase
	# [a,b,c] ... [c]
	a = set(list( al )[:3]) 
	b = set(list( al )[2:7])
	print(	a, 
		b,
		# Sets are unique by definition	
		a & b, # Shared (unique)
		a | b, # Combined (unique)
		a - b, # A without any of B's elements
		b - a # B without any of A's elements
	)

example()


# List of 52 zeros
print( [0] * 52 )

# RANGE (and list)
print ( list( range( -6, 7, 2 ) ) ) # -6 to 6, by 2.


# IN (in list, in set)
print( bool( 2 in list(range(0,3)) ))
print( bool( 2 in {1,3,4} ))


# BOOLEANS
for x in [0,"0",1,"1","true",[0]]:
	print( x, bool( x ), type( x ) )



# NONE type (undefined)
x = None
print ( x, type ( x ), bool(x == None) )

