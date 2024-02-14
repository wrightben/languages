'''
- global keyword: functions can't write to global variables
- set (like a list but only with unique values)
- constants
	- Uppercase: self.VARIABLE
- type hints
- mypy (program - type hint tester)
- docstrings """Doc strings"""
- argparse (library)
'''


'''
-	*[a,b,c] - unpacking list
	**{a,b,c} - unpacking dict
	- (a=10) named parameters in function call (not function def)
	- (*args, **kwargs) variable function parameter (function def)
- map: _list = map(str.upper, [a,b,c])
- filter
	- lambda (anonymous function)
	- list comprehension (generator)
- iterators
	- yield keyword
'''





'''
	TRICKY: UNPACKING/PACKING
	Sometimes the *name syntax is packing a list and sometimes it's unpacking one.
	str.upper operates on a regular list, but it's possible that words is a list of lists, etc.
'''
# 1. LIST
words = ["This", "is", "CS50"]

def yell(*words): # 3. PACKS LIST: *words creates a list of all arguments
	# I: map
# 	uppercased = map(str.upper, words) # 4. LIST: str

	# II: comprehension
	uppercased = [arg.upper() for arg in words]
	
	print(*uppercased) # * UNPACKS LIST
	
# 2. UNPACKS LIST
yell(*words)
