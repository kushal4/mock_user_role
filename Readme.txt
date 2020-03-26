first after you are done cloning from the repo follow these steps:-

1) in the console do 'npm install'
2) if you want to run it with nodemon then run  'npm install -g nodemon'
3) if you are in windows then use set PORT=<PORTNUMBER> else if you are in linux or mac use export PORT=<PORTNUMBER>
4) if you have nodemon installed then run 'nodemon' or 'node index.js'


I have configured the db manually so  below am giving you the structure of table that am following :-

there are basically two tables 'users' and 'user_roles'

within 'users' table structure is :-

1)id -> primary autoincreminting
2)name -> varchar 55
3)email -> varchar 65
4)password -> varchar 65

within 'user_roles'  table structure is :-


1)id -> primary autoincreminting
2) user_id -> id from the users table which is integer
3) enum -> with values ['admin','normal']

I am using config.json file to read the database credentials and assumed that it is run on development environment only


Note:- For simplicity I haven't used any foreign key constraint here for the 'user_id'








