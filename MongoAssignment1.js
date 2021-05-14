db.createCollection('movies')

db.movies.insert({title:'Fight Club',writer:'Chuck Palahniuko',year:1999,actors:['Brad Pitt','Edward Norton']})
db.movies.insert({title:'Pulp Fiction',writer:'Quentin Tarantino',year:1994,actors:['John Travolta','Uma Thurman']})
db.movies.insert({title:'Inglorious Basterds',writer:'Quentin Tarantino',year:2009,actors:['Brad Pitt','Diane Kruger','Eli Roth']})
db.movies.insert({title:'The Hobbit: An Unexpected Journey',writer:'J.R.R. Tolkien',year:2012,franchise: 'The Hobbit'})
db.movies.insert({title:'The Hobbit: The Desolation of Smaug',writer:'J.R.R. Tolkien',year:2013,franchise:'The Hobbit'})
db.movies.insert({title:'The Hobbit: The Battle of Five Armies',writer:'J.R.R. Tolkien',year:2012,franchise:'The Hobbit',synopsis:'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'})
db.movies.insert({title:'Avatar'})
db.movies.insert({title:"Pee Wee Herman's Big Adventure"})

/*QUERY*/

/*FIND DOCUMENTS*/

1. db.movies.find()
2. db.movies.find({writer:"Quentin Tarantino"})
3. db.movies.find({actors:"Brad Pitt"})
4. db.movies.find({franchise:"The Hobbit"})
5. db.movies.find({year:{$gte:1990,$lt:2000}})
6. db.movies.find({year:{$lt:2010,$gt:2000}})

/*UPDATE DOCUMENTS*/    

1.db.movies.update({title:'The Hobbit: An Unexpected Journey'},{$set: {synopsis: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited roup of dwarves to reclaim their mountain home = and the gold within it - from the dragon smaug.'} })
2.db.movies.update({title:'The Hobbit: The desolation of Smaug'},{$set: {synopsis: 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious magical ring.'} })
3.db.movies.update({title:'Pulp Fiction'},{$push:{actors: Samuel L. Jackson}})

/*TEXT SEARCH*/

db.movies.createIndex({synopsis:'text'})

1. db.movies.find({$text:{$search:'Bilbo'}})
2. db.movies.find({$text:{$search:'Gandalf'}})
3. db.movies.find({$text:{$search:'Bilbo -Gandalf'}})                
4. db.movies.find({$text:{$search:'dwarves hobbit'}})               
5. db.movies.find({$text:{$search:"'gold' 'dragon'"}})              

/*DELETE DOCUMENTS*/

db.movies.remove({title: "Avatar"})
db.movies.remove({title: "Pee Wee Herman's Big Adventure"})

/*RELATIONSHIPS*/

db.createCollection('users')

db.users.insertMany([
{ username: "GoodGuyGreg", first_name:"Good Guy",last_name:"Greg"},
{ username: "ScumbagSteve", full_name:{first_name:"Scumbag",last_name:"Steve"} }
 ]);

db.createCollection('posts')

db.posts.insertMany([
{ username: "GoodGuyGreg", title:"Passes out at party",body:"Wakes up early and cleans house"},
{ username: "GoodGuyGreg", title:"Steals your identity",body:"Raises your credit score"},
{ username: "GoodGuyGreg", title:"Reports a bug in your code",body:"Sends you a pull request"},
{ username: "ScumbagSteve", title:"Borrows something",body:"Sells it"},
{ username: "ScumbagSteve", title:"Borrows everything",body:"The end"},
{ username: "ScumbagSteve", title:"Forks your repo on github",body:"Sets to private"}
 ]);

db.createCollection('comments')

db.comments.insertMany([
{ username: "GoodGuyGreg", comment:"Hope you got a good deal!",post:"608d49ca845ea1cba8e2ef81"},
{ username: "GoodGuyGreg", comment:"What's mine is yours!",post:"608d49ca845ea1cba8e2ef82"},
{ username: "GoodGuyGreg", comment:"Don't violate the licensing agreement!",post:"608d49ca845ea1cba8e2ef83"},
{ username: "ScumbagSteve", comment:"It still isn't clean",post:"608d49ca845ea1cba8e2ef7e"},
{ username: "ScumbagSteve", comment:"Denied your PR cause I found a hack",post:"608d49ca845ea1cba8e2ef80"}
 ]);

/*QUERYING RELATED COLLECTIONS*/
1. db.users.find()
2. db.posts.find()
3. db.posts.find({username:"GoodGuyGreg"})
4. db.posts.find({username:"ScumbagSteve"})
5. db.comments.find()
6. db.comments.find({username:"GoodGuyGreg"})
7. db.comments.find({username:"ScumbagSteve"})
