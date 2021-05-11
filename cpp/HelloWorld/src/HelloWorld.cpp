//============================================================================
// Name        : HelloWorld.cpp
// Author      : WrightBen
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
using namespace std;



int other(int x) {

	cout << "Printing the number " << x << endl;
	return x;

}

int main() {

	cout << "Hello, world: main()" << endl;

	int x = 7;
	cout << other(x) << endl;

	return 0;

}


/*
 *
 * This simple project builds by clicking the green "play" icon.
 * I only had to edit the default run configuration to select the executable.
 * The executable lives at:
 * /Users/wrightben/eclipse-workspace-cpp/HelloWorld/Debug/HelloWorld
 *
 */
