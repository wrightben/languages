'''
NOTE: __init__.py tells pytest this is a testable folder. Execute tests by passing in the path to the test folder:
pytest /path/test 
'''
import pytest
from notes import square


def test_square(): #AssertionError
	for i in range(-3,3):
		assert square(i) == i * i

	
def test_str():
	with pytest.raises(TypeError):
		square("cat")
