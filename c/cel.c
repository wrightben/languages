#include <stdio.h>

main() {
	float fahr, celsius;
	int lower, upper, step;
	
	lower = -40;
	upper = 102;
	step = 20;
	
	fahr = lower;
	while ( fahr <= upper ) {
		celsius = (5.0 / 9.0) * (fahr - 32.0);
		printf("%3.0f %6.1f\n", fahr, celsius);
		fahr = fahr + step;
	}
}