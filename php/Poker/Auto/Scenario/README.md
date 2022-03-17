# Summary

### Use

1. Create a scenario by configuring a hand in **[texas-holdem.js](https://github.com/wrightben/texas-holdem)**
2. Place a /Scenario folder adjacent to texas-holdem.js
3. Run scenario.sh as shown below

```
cd Scenario
./scenario.sh
```

See [/math/Poker/Auto/Insights/scenarios](https://github.com/wrightben/math/tree/master/Poker/Auto/Insights/scenarios) for examples. 


## Files

- **scenario.sh** — Executes the scripts below for a scenario defined by texas-holdem.js
	- No need to manually run the scripts below
- **poker.sh** — Creates 1,000 6-person hands using **[texas-holdem.js](https://github.com/wrightben/texas-holdem)**; Configurable
- **analysis.php** — Provides Rank and Position distribution for winning hand in scenarios
	- **position.php** — Provides Rank distribution for a specified position in scenarios
