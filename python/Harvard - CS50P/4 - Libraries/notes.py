# from random import choice, randint
import sys
import random
import statistics
import requests # pip3
import json
from sayings import hello # Use own code

def coin_flip():
	coin = random.choice(["heads","tails"])
	return coin
	

def coin_flip_trial(base=10000):
	results = {
		"heads": 0,
		"tails": 0
	}
	for i in range(base):
		results[ coin_flip() ] += 1		
	return (results["heads"]/base, results["tails"]/base)


# Random Numbers Range
def random_numbers_range(low=1,high=10,max=10000):

#	LIST OR HASH IMPLEMENTATION
	_ = [1] * high # _ = list()
# 	_ = {}
	
	for i in range(max):

#	LIST IMPLEMENTATION
		ri = random.randint(low, high)
		_[ri - 1] += 1

#	HASH IMPLEMENTATION
# 		if ri in _:
# 			_[ri] += 1
# 		else:
# 			_[ri] = 1

	return _

def shuffle_cards():
	cards = [*range(1,52,1)]
	random.shuffle( cards ) # Shuffles the list
	return cards
	
	
def say_greeting(greeting="World"):
	#sys.argv = [] # list of command-line arguments
	#sys.exit("Too many arguments")
	try:
		greeting = sys.argv[1]
	except IndexError:
		pass

	print( "Hello,", greeting )
	

url = "https://itunes.apple.com/search?entity=song&limit=1&term=weezer"	
def download_url(url="https://www.google.com"):
	try :
		# requests.get(url) # "200"
		return requests.get(url).json() # "JSON"
	except: 
		return "Problem fetching URL"
	

def main():
		
	say_greeting()
	
	_ = ["A","B","C","D","E"]
	print(_[0:-3:1]) # Slicing a list

	
	# Random Number
# 	number = random.randint(1,10) # 1,10 inclusive
# 	print(number)
# 	print(coin_flip())
# 	print(coin_flip_trial(100))
# 	print(random_numbers_range(1,100,100000))
# 	print(shuffle_cards())
# 	print(statistics.mean([100,90]))

#	API SCRAPING (iTunes)
# 	res = download_url(url)
# 	print(json.dumps( res, indent=2 ))
# 	print("Inspected Result Count:", json.dumps( res["resultCount"], indent=2 ) )	
# 	print(json.dumps( res["results"][0], indent=2 ) )

#	USING OWN PACKAGE
	hello("Ben")


main()

# pip3 install requests
