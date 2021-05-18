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