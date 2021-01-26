# lsFusionScore table

# Score table

##### "Score table" task description

This information system, created using the **lsFusion Platform**, should contain the functionality for keeping score at a hockey tournament.

A tournament is understood to mean a subset of games between teams (with two teams participating in each game), which result in points being awarded to the teams.

In each game, the result of each game can be a regular-time win of one of the teams (the winning team receives 3 points), an overtime win (the winning team receives 2 points, while the losing team receives 1), or a penalty shootout win (the winning team receives 2 points, while the losing team receives 1).

A team's score table ranking is determined by the total number of points. In case of a tie, additional parameters are considered: number of regular-time victories, number of overtime victories, number of penalty shootout victories, the difference between scores and misses, number of scores. Additional parameters for determining the final ranking are applied consecutively in a specified order until a status is achieved in which the results of the teams are uniquely ranked.

##### Defining the domain logic

###### Module declaration

We declare a [module](lsFusionModules.md) within which the required functionality will be implemented. We assign an arbitrary name to the module (for example, HockeyStats).


