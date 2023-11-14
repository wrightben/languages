def main():
	try:
		x = int(input("What is x? ").strip())
		print(f"{x} squared is", square(x));
	except ValueError:
		pass
	
def square(n):
	if isinstance(n,str):
# 	if type(n) is str:
		raise TypeError
	return n + n


if __name__ == "__main__":
	main()