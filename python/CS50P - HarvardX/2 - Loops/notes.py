i = 1
# while i <= 3:
# 	print("meow")
# 	i += 1


# for i in [0,1,2]:
# 	print("meow")


# for _ in range(3):
# 	print("meow")


# print("meow\n"*3, end="")


def example2():
	while True:
		n = int(input("What's n? "))
		if n > 0:
			break

	for _ in range(n):
		print("meow")
		
# example2()

students = ["Hermione", "Harry", "Ron"]

# for student in students:
# 	print(student)
# 
# for i in range( len( students ) ):
# 	print( i + 1, student )


h1 = "Gryffindor";
students = {
	"Hermione": h1,
	"Harry": h1,
	"Ron": h1,
	"Draco": "Slytherin"
}

# print(students); # Prints dict
for student in students:
	print(student)	