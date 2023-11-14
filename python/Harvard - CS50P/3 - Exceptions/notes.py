def u1():
	try:
		x = int(input("What's x? ").strip().lower())
	except ValueError:
		print("x is not an integer")
	else:
		print(f"x is {x}")
	
def u2():
	while True:	
		try:
			x = int(input("What's x? ").strip().lower())
		except ValueError:
			print("x is not an integer")
		else:
			break
		
	print(f"x is {x}")



def main():
	print(
		"x is " + str(get_int("What's x? "))
	)

def get_int(prompt):
	while True:	
		try:
			return int(input(prompt).strip().lower())
		except ValueError:
# 			pass
			print("x is not an integer")
		
main()