def main():
# 	names = get_names()
# 	print_names(names)
	
	names = [
		"Ben",
		"Angela",
		"Ron",
		"Jim",
	]
	
	store_names(names)
# 	load_names()
	
def get_names():
	names = []
	for _ in range(3):
		names.append(input("What's your name? "))
	return sorted(names)
	
def print_names(names=[]):
	for name in names:
		print(name)
	
def store_names(names):
# 	file = open("names.txt","a")
	with open("names.txt", "a") as file:
# 		file.write("\n".join(names)) # Write just 1 line (or joined list)
# 		file.writelines((_ + "\n" for _ in sorted(names))) # Trailing newlines
		file.writelines(
			"\n".join([
				"\n".join(sorted(names)),
				"Test"
			])
		) # Inner newlines (Nested)
# 	file.close()

def load_names():
	with open("names.txt", "r") as file:
		for line in sorted(file, reverse=True):
			print("Hello,", line.rstrip() )

# 	ALTERNATE APPROACH
# 	with open("names.txt", "r") as file:
# 		lines = file.readlines()
# 	
# 	for line in sorted(lines):
# 		print("Hello,", line.rstrip() )





	
if __name__ == "__main__":
	main()