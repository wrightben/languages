# def (or Functions) isn't a type in Chapter 4
# But they're implied by the section on classes at the end of the chapter

def say( args, arg2 ):
	for x in args:
		print (x)
	print (arg2)
	return 43 # or None
print (42)
	
print ( say(arg2="Test", args=["hello", "world"]) )


# CLASS: Worker
class Worker:
	def __init__(self, name, pay): # Initialize when created 
		self.name = name # self is the new object 
		self.pay = pay 

	def lastName(self): 
		return self.name.split()[-1] # Split string on blanks 

	def giveRaise(self, percent):
		self.pay *= ( 1.0 + percent ) # Update pay in place 

Bob = Worker("Bob Loblaw", 60000)
print( Bob.lastName() )
print( Bob.giveRaise( .08 ), Bob.pay )