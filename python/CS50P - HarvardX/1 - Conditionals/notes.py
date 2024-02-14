def example1():
	x = int(input("What is x? "))
	y = int(input("What is y? "))

	# if <, elif >, else
	if x < y:
		print("x is less than y")
	elif x > y:
		print("x is greater than y")
	else:
		print("x is equal to y")
	
	# if-or, else
	if (x < y) or (x > y):
		print("x is not equal to y")
	else:
		print("x is equal to y")
		
#example1()



def example2():
	score = int(input("Score: "))
	
							# Optimized
	if 90 <= score <= 100:	# if score >= 90:
		print("Grade: A")
	elif 80 <= score < 90:
		print("Grade: B")
	elif 70 <= score < 80:
		print("Grade: C")
	elif 60 <= score < 70:
		print("Grade: D")
	else:
		print("Grade: F")
		
#example2()



def is_even(n):
	# return True if n % 2 == 0 else False
	return n % 2 == 0

def example3():
	x = int(input("What is x? "))

	if is_even(x):
		print("Even")
	else:
		print("Odd")

#example3()




def example4():  
	name = input("What's your name? ")

	match name: # Requires Python 3.10 or later
			case "Harry":
				print("Gryffindor")	
			case _: # Catch-all
				print("Who?")
	
example4()