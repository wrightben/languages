import module_example # module_example.py
# The module runs when it's loaded.
# It also seems to be compiled, so that when module_test.py is run, it  
# produces the same output even if module_example was edited.
# The compiled output is placed in the __pycache__ folder.

print ('Hello, World!')

print (module_example.a)