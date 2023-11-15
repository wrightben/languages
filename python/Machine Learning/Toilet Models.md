## Goal:
The estimation of work for the average individual and the average mess for a population-held decision to either:
1. Put the seat up at the end of bathroom use
2. Put the seat down at the end of bathroom use
3. Leave it in the used configuration
4. Affect of specific agent interactions

I can run all kinds of these scenarios a lot of times each.

## Variables:
* Number of people who use the restroom
* Random assignment of men and women (but weighted)
* Adjustable probability that a man peeing would put the seat up to do so (meaning it needn't already be up)
* Adjustable probability of peeing on the seat when it's down
* Adjustable probability of a man needing/choosing to sit (perhaps this is two variables: likelihood of 2 and likelihood of choosing to sit for 1)

## Behaviors:
### Non-deviant behavior:
#### Males
One type of male never puts the seat up, no matter what. He 2. Or he 1. And leaves the seat configured.
One type of male just puts it into his needed configuration and leaves it.

The other types of male put it into their needed configuration and then put it into some programmed position. (This set includes both types of deviant.)

#### Females
All females put it down. They then either leave it or put it up. 

### Deviant behavior:
The deviant male who pisses on the seat and then puts it up?!

There are many permutations of seemingly deviant behavior. That could be simulated by very infrequently randomizing every step of the process. (Change to initial state, Process, Change to process state)

Deviant behavior almost certainly increases mess (it wouldn't always in the randomized approach above). Does it always affect average work? If the deviant male occurs too frequently, perhaps people are less incentivized to work toward a shared strategy.

Is the male who doesn't touch the seat deviant (1 or 2)? Why does down-1-down seem acceptable or even common? Is he, in fact, the worst of the deviants?

#### The Lid (Not inclusive of lid deviants)

Closing the lid affects everyone, even the deviants. It does not affect the insane person. But it does lead to interesting questions about how the insane person's activities are defined.


## Strategy

It's probably easiest to model this by imitating agents through probabilities rather than creating agents. This would yield the agent effects (impact on self, work, impact on others). A result set is calculated agent by agent starting from some predefined (but variable) state.

It's then probably easiest to ML the optimal group strategy using the resulting data set.
