'''
	n = 16
	k = 5 (e)
	n!/((n-k)!) = p
	n!/((n-k)!*k!) = c
	
	It's easier to see (p) as a list (l) in a list (output of all elles), especially when each elle is internally sorted and then the list (output of all elles) is sorted.
	The output can then be reduced by removing duplicate lines, leaving (c).
'''
r = range(1,16)
# print(r)
for a in r:
	for b in r:
		for c in r:
			for d in r:
				for e in r:
					l = (a,b,c,d,e)
# 					print(l)
					if 	(
							(l.count(a) == 1) and
							(l.count(b) == 1) and
							(l.count(c) == 1) and
							(l.count(d) == 1) and
							(l.count(e) == 1)																					
						):
# 						print(l)
						print(sorted(l), l)
						