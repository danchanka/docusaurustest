(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{290:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return h}));var o=a(3),s=a(7),i=(a(0),a(421)),n=a(56),r={title:"Score table"},l={unversionedId:"Score_table",id:"Score_table",isDocsHomePage:!1,title:"Score table",description:'"Score table" task description',source:"@site/docs\\Score_table.md",slug:"/Score_table",permalink:"/docusaurustest/docs/Score_table",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Score_table.md",version:"current",sidebar:"docs",previous:{title:"Examples",permalink:"/docusaurustest/docs/Examples"},next:{title:"Materials management",permalink:"/docusaurustest/docs/Materials_management"}},c=[],m={toc:c};function h(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"score-table-task-description"},'"Score table" task description'),Object(i.b)("p",null,"This information system, created using the ",Object(i.b)("strong",{parentName:"p"},"lsFusion Platform"),",\xa0should contain the functionality for keeping score at a hockey tournament."),Object(i.b)("p",null,"A tournament is understood to mean a subset of games between teams (with two teams participating in each game), which result in points being awarded to the teams."),Object(i.b)("p",null,"In each game, the result of each game can be a regular-time win of one of the teams (the winning team receives 3 points), an overtime win (the winning team receives 2 points, while the losing team receives 1), or a penalty shootout win (the winning team receives 2 points, while the losing team receives 1)."),Object(i.b)("p",null,"A team's score table ranking is determined by the total number of points. In case of a tie, additional parameters are considered: number of regular-time victories, number of overtime victories, number of penalty shootout victories, the difference between scores and misses, number of scores. Additional parameters for determining the final ranking are applied consecutively in a specified order until a status is achieved in which the results of the teams are uniquely ranked."),Object(i.b)("h5",{id:"defining-the-domain-logic"},"Defining the domain logic"),Object(i.b)("h6",{id:"module-declaration"},"Module declaration"),Object(i.b)("p",null,"We declare a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"module")," within which the required functionality will be implemented. We assign an arbitrary name to the module (for example, HockeyStats)."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=module",mdxType:"CodeSample"}),Object(i.b)("p",null,"We define the use of functionality from other modules in the HockeyStats module. In particular, we need the system module ",Object(i.b)("strong",{parentName:"p"},"System"),", in which some system elements used in the example are declared."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=require&original=1",mdxType:"CodeSample"}),Object(i.b)("h6",{id:"team-definition"},"Team definition"),Object(i.b)("p",null,"We introduce the concept of a team, for which we create a separate ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Classes"}),"class")," using the corresponding instruction ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/CLASS_instruction"}),"CLASS"),".\xa0"),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=classteam&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,'We assign a name to the class created (for example, "Team"), which will subsequently be used when building ',Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions"),', as well as a caption to display on custom forms (for example, "Team").'),Object(i.b)("p",null,'So that all teams can be easily identified when working with forms created later, we create a name for the team. In other words, we create a\xa0"Name" ',Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property"),' that can be defined for objects of the "Team" class.'),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=nameteam&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"Thus, the team name is a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"data")," (user-entered) string-type property. Using the IN option, the created property is added to the predefined ",Object(i.b)("strong",{parentName:"p"},"base")," ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Groups_of_properties_and_actions"}),"property group"),". Object properties belonging to the ",Object(i.b)("strong",{parentName:"p"},"base"),' group will be automatically displayed on the dialog form for selecting an object of the "Team" class.'),Object(i.b)("h6",{id:"game-definition"},"Game definition"),Object(i.b)("p",null,"We introduce the concept of the game and its attributes: date, participants (host team and guest team), and their names."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=game&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"The hostTeam and guestTeam properties are ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"data")," object properties of a game, whose values are links to the host team and guest team, respectively (that is, to specific Team-class objects). Properties of the team names of the game hosts and guests (hostTeamName and guestTeamName)\xa0are created for subsequent use on forms. If the hostTeam and guestTeam properties are added to the form, the user will see the internal IDs of objects from the database."),Object(i.b)("p",null,"We introduce the constraint that the game participants must be two different teams."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=constrainthostguest&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"The operating mechanism of this expression is as follows: when the host team or guest team of a game changes, the system checks the condition of equality of these teams (hostTeam(team) == guestTeam(team)), and if it is met the system blocks the application of changes to the database, and also gives the user the specified message ('Host and guest teams must be different'). In other words, the result of the expression specified after the CONSTRAINT operator must be NULL. In all other cases the restriction will be considered violated.\xa0 In addition, thanks to the CHECKED BY block, the created constraint will filter teams when selecting a home team or a guest team for a game (that is, it will exclude the team already set as the opponent from the list of teams in the dialog that appears upon selecting a team)."),Object(i.b)("p",null,"We define the number of goals scored by each team during the game."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=goals&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"The defined properties use the INTEGER type, since the number of goals scored by each team is an integer."),Object(i.b)("p",null,"We introduce the constraint that the game cannot end in a tie. The system should prohibit the user from setting an identical number of goals for both teams in the game, and issue a message with the specified text."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=constraintgoals&original=1",mdxType:"CodeSample"}),Object(i.b)("h6",{id:"determining-the-winner-of-the-game"},"Determining the winner of the game"),Object(i.b)("p",null,"We determine the winner of the game - the team that has scored more goals than its opponent."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=gamewinner&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"Here we use the operator ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"}),"IF... THEN... ELSE"),", which checks the condition that the host team in this game has scored more goals than the guest team. If it is met, the winner is the home team; if not, the guest team."),Object(i.b)("p",null,"By a similar principle, the team that participated in the game and scored fewer goals than its opponent will be considered the loser."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=gamelooser&original=1",mdxType:"CodeSample"}),Object(i.b)("h6",{id:"determining-game-result"},"Determining game result"),Object(i.b)("p",null,"We introduce the concept of the possible game result with a predefined set of values: regular-time win, overtime win, penalty shootout win."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=gameresultclass&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"For this purpose we create a GameResult class and add three ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Static_objects"}),"static objects")," to it that are specified\xa0using expressions specified in braces\xa0{ }. In this case, the values win, winOT, winSO and W, OW, SW will be stored in the system properties staticName and staticCaption, respectively."),Object(i.b)("p",null,'We create the resultName property, which will return the caption of the game result (W, OW, or SW). To do this, we take the system property staticCaption, which is supported for all objects in the system, and constrain its signature using the IF operator, indicating that the object must be of the Game class. This property is added to the "base" property group so that it appears in the automatic dialog for selecting an object of the GameResult class.'),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=gameresultname&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"We determine the result of a particular game. In case when one of the teams won by 2 or more goals, the game result is considered a regular-time win. If not, and only if not, the game result (the type of win for a given score) will be set by the user. However, the user cannot set a regular-time win as the game result."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=gameresult&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"To determine the game result, the OVERRIDE operator is used, which returns the first non-",Object(i.b)("strong",{parentName:"p"},"NULL"),' value in the order in which expressions are specified. In this case, calculating the "result" property will return either an object of the static class GameResult.win, if the goal difference in the game is greater than 1, or the value of the userResult data property.'),Object(i.b)("p",null,"In order to always determine a result for the game, we create a constraint that ensures that the user sets the value of the userResult property if the result is not calculated based on the game score."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=gameresultset&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"The result of the NOT userResult(game) expression will be true only if userResult(game) is not defined (that is, if it is NULL). Thus, the constraint will be violated if the score difference is 1, and the type of win is not specified by the user."),Object(i.b)("h6",{id:"creating-a-score-table"},"Creating a score table"),Object(i.b)("p",null,"The score table is the ranking of the teams in a tournament - a list of teams sorted by ranking."),Object(i.b)("p",null,"We define the indicators that determine the team's place on the scoreboard:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"number of games played by the team at home and away, and their total number",Object(i.b)("br",{parentName:"li"}),"")),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=gamesplayed&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"Here, the construction (+) is used instead of the arithmetic + to obtain the correct result if at least one of the terms has a value of NULL. Using\xa0(+) in this case is equivalent to replacing a possible NULL with 0. If one of the terms is NULL, then using the arithmetic + will also result in a value of NULL."),Object(i.b)("p",null,"To determine the number of games played by the team at home and away, the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Grouping_GROUP"}),"GROUP SUM")," operator is used, which allows you to get the sum of the calculation results of a given expression for objects of a certain class, grouped by one or more of their attributes (similar to subtotals in Excel). Here the number 1 is specified for summation, and all games are grouped by guest team and host team (the BY instruction). As a result, for example, the hostGamesPlayed property determines for the team (since the result of the hostTeam property calculation is the Team-class object) the number (that is, the sum of the number 1 for all games where the host team is equal to the defined one) of games played as hosts (the hostTeam property is specified only for objects of the Game class). With this calculation the system analyzes all games entered into the system."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"number of games won in regular time, in overtime, and in extra time",Object(i.b)("br",{parentName:"li"}),"")),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=gameswon&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"Since the logic for determining the number of wins of each type for a team is almost identical, we create and use the intermediate property gamesWonByResult, which is defined for a pair of objects (arguments). This property calculates for the team (first argument) the number of wins of a given type (second argument). The value of the gamesWonBy property is calculated with the OVERRIDE operator, which takes as input an expression specified in brackets (","[","=...","]",") and 0. If the expression value is ",Object(i.b)("strong",{parentName:"p"},"NULL"),", the result of the whole property will be the value 0. A nested expression is specified in square brackets using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Grouping_GROUP"}),"GROUP SUM")," construct. Using a given expression in brackets is identical to using a previously defined property with a similar expression. Thus, the construction ","[","=...","]"," allows you to simply reduce the number of lines of code. Here, ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Grouping_GROUP"}),"GROUP SUM")," returns the total sum on number 1 for all games grouped by game winner and game result."),Object(i.b)("p",null,"The total result of the gamesWonByResult property will be the number of wins of a given type for a given team, or zero if the team did not have any wins of this type (that is, if ","[","= GROUP SUM 1 BY winner(Game game), result(game)","]"," for a given team and type of win is NULL)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"number of games played in regular time, in overtime and in extra time (determined by analogy with the above-specified properties of the number of wins)",Object(i.b)("br",{parentName:"li"}),"")),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=gameslost&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"We calculate the number of points scored by the team in the tournament. The calculation is the sum of the number of wins of a particular type for each team, multiplied by the number of points awarded."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=points&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"To be used as additional indicators for ranking teams, we calculate the total number of goals scored and missed by the team."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=goalsresult&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"We determine the place of the team on the scoreboard."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=place&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,'The "place" property "Team place on the score table" is determined using the construction ',Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Partitioning_sorting_PARTITION_..._ORDER"}),"PARTITION SUM"),", which for all objects of a certain class in a cumulative total, the sequence of which is specified by the ORDER operator, calculates the sum of the results of the calculation of a specified expression. It is important to remember that the values of all properties involved in determining the order must not be NULL. For this purpose, the penultimate expression uses the OVERRIDE operator so that the number 0 is used instead of\xa0NULL."),Object(i.b)("p",null,'Thus, the logic for determining the "place" property for each command is as follows:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"all teams are arranged in a sequence (ranked) in descending order of the values of certain parameters (number of points scored, games won in regular time, and other properties specified after the ORDER DESC operator)"),Object(i.b)("li",{parentName:"ul"},"The sum of the values of the specified SUM expression (in this case, number 1) is calculated for each team. The sum is calculated for all\xa0teams preceding that team in the ranked list (including that team). That is, 1 for the first team, 1+1 for the second, 1+1+1 for the third, etc.")),Object(i.b)("h5",{id:"defining-view-logic"},"Defining view logic"),Object(i.b)("p",null,"We add an interface that allows you to work with the developed system, entering data into the system and obtaining the necessary information from it. The form being created will consist of two vertically arranged blocks, in the upper of which the user will be able to add, modify, and delete games with all their attributes, while in the lower one there will be a score table displaying the results of the games and allowing to add or delete teams and change their names."),Object(i.b)("p",null,"We declare the form with a name and caption. We add to the form a block of objects of the Game class with all the properties defined in the system. We also place a button on the form for adding a new game and deleting it."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=formgame&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"The FORM instruction creates an empty form with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_structure"}),"a certain default functionality"),'. Using the OBJECTS game=Game expression, a "game" object is added to the form: a table view block containing all instances of the Game class entered in the system. Using the expression PROPERTIES(game) with a the subsequent listing of a subset of properties, the specified properties are added to the form, and objects of the "game" block are passed to them as arguments. In addition to previously created properties, the ',Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"actions")," NEW and DELETE are also placed on the form, which will visually appear as buttons and allow you to add and remove objects of the Game class."),Object(i.b)("p",null,'Data properties displayed on a form that are of a primitive type (date, hostGoals, guestGoals) will visually appear as cells that can be filled and changed by the user. Calculated properties that return an attribute of another object (hostTeamName, guestTeamName,\xa0resultName) will appear as cells. When these are clicked, a dialog box with the list of their objects and base group properties will be shown (for example, when clicking on the cell hostTeamName "Guests" a dialog box appears with the list of teams). In the dialog box you can select one of the objects, thus changing the property value for the object of the original form (for example, changing the game host team).'),Object(i.b)("p",null,"We extend the form by adding a score table block to it. The score table will be shown as a list of teams (objects of the Team class) with their statistical indicators, sorted by rating using the ORDER BY operator."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=formteam&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"The above form can be defined with a single block of code without using the EXTEND instruction."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=formsingle&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"We place the created form on the main menu of the program - the predefined navigator ",Object(i.b)("strong",{parentName:"p"},"root")," folder - and indicate that it should be positioned by the very first element in front of the system menu item ",Object(i.b)("strong",{parentName:"p"},"Administration"),"."),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats&block=navigator&original=1",mdxType:"CodeSample"}),Object(i.b)("p",null,"The process of creating an information system is completed."),Object(i.b)("h5",{id:"the-complete-source-code-on-github"},"The complete source code (on ",Object(i.b)("a",Object(o.a)({parentName:"h5"},{href:"https://github.com/lsfusion/samples/tree/master/hockeystats"}),"GitHub"),")"),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=hockeystats/HockeyStats",mdxType:"CodeSample"}))}h.isMDXComponent=!0}}]);