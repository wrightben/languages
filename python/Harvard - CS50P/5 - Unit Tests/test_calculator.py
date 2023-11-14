import pytest
from notes import square

# def main():
# 	test_square()

def test_square(): #AssertionError
	assert square(2) == 4
	assert square(3) == 9
	assert square(-2) == 4
	assert square(-3) == 9
	assert square(0) == 0	
	
def test_str():
	with pytest.raises(TypeError):
		square("cat")
		
		
# if __name__ == "__main__":
# 	main()

'''
NOTE: pytest
pip install pytest
To use pytest (not python3): pytest {file}.py
'''