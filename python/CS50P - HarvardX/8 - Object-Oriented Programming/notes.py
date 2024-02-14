class Transmission:
	
	@classmethod
	def downshift(cls, car):
		if (car.gearbox > 1):
			car.gearbox -= 1
		return car.gearbox

class F1Car:
	def __init__(self, gearbox=6):
#		The top line will work, but the second one routes through the setter.
# 		self._gearbox = gearbox	
		self.gearbox = gearbox
		
	def __str__(self):
		return f"F1Car with {self.gearbox}"
	
	@property
	def gearbox(self):
		return self._gearbox
		
	@gearbox.setter
	def gearbox(self, gearbox):
		if (gearbox == 7):
			raise ValueError
		self._gearbox = gearbox


def main():
	f1 = F1Car()
	print("F1 with gearbox:", f1.gearbox)

# 	No ValueError - WTF?
	f1._gearbox = 7
	print("F1 with gearbox:", f1.gearbox)

#	ValueError
# 	f1.gearbox = 7
# 	print("F1 with gearbox:", f1.gearbox)

	f1b = F1Car(5)
	# Note the weird difference between these two! 
	print("F1 with gearbox:", f1b, Transmission.downshift(f1b))
	print("F1 with gearbox:", f1b.gearbox, Transmission.downshift(f1b))	
		
	
	
	
if __name__ == "__main__":
	main()