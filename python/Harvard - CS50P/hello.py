# Ask user for their name
# Remove whitespace and capitalize
name = input("What's your name? ").strip().title()

first,last = name.split(" ")

# Say hello to user
print(f"Hello, {first}!") # Interpolated string



def main():
	name = input("What's your name? ")	
	hello(name)

def hello(to="World"):
	print("Hello,", to)
	
main()



# Notes on class
# Lessons from Lecture 0, Functions, Variables
# Types: str, int, def
# def functions are NOT lifted