x = input("What's x? ")
y = input("What's y? ")

# str
z = x + y

print(z) # prints str concat

# int
print (int(x)+int(y))


# float
x = float(input("What's x? ")) #999
y = float(input("What's y? ")) #1

print(round(x + y, 3)) #1000

print(f"{x+y:,}") #1,000
print(f"{x+y:,.2f}") #1,000

'''
There is no upper bound on size of int
There IS a bound on the precision of float
'''