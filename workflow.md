//Database

- Login info Table
- Generated Family Table
- Task Table

- Tables are done.  Fill with dummy data and get goin on the hard part.

//Api calls
Login table called during login, and to confirm pin I suppose.
Family table called to switch or select character, also when viewing character. Also at shop, and of course, in the dungeon.
Quest table called on questboard view, when setting tasks


// Login
- Login screen
- view... a link from nav bar? Maybe near the nav bar?
- need a place to log in, select character, and set tasks. Also to add or subtract currency.
- successful login should change state to indicate that user is logged in.


//View Apearance 
-Quest Board
-Background image of a wooden wall...or bulletin board?
-Character
    -background image is...sort of done. Smaller nav bar maybe?
    -floating text vs altering background image... both are problematic
-Shop
Some sort of storefront would be cool. Screen real-estate will continue to be an issue.
-Dungeon
Perhaps dungeon view should be an intro. Give some info and make sure they're ready. Then, click the button and go to another view without the nav bar.  That click could also determine permission. Maybe figure out a once a day thing. 


//Quest Posters
Cards via bootstrap?
Pull info from quest table and populate.
Smaller less detailed cards on quest board, select them to show full larger card with more detail. That could also be where confimration happens. 



Login screen with necessary gets and state changes




queries

Login
make new account: create family table and quest table
login: get from login table


questboard
get active quests from quest table
get pin from login to allow changing of active column in quests table  and family table

shop
get from family table, info on certain columns in family table to be changed

character
get from family table: stats and any active equipment
changes to family table: equipment changes from possesion(1) to equiped(2) and back

dungeon
get from family table





