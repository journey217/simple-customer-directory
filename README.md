# simple-customer-directory

This project is intended to be a simple administrative customer directory dashboard created in just a few hours.

Goals of this project were to build a customer directory where one could list, add, and delete customers. 

It is assumed that any person trying to use this project has prior technical experience with GitHub, the command-line, Node, React, MySQL, and computers in general.

To test the project, follow these steps:

1. Clone the repo and open the simple-customer-directory folder in a terminal
2. cd into frontend and run ```npm install``` (I am using Node v19.9.0 - install node at AT LEAST that version if you do not have it already)
3. cd into ../backend and run ```npm install```
4. Open manager-osx and ensure that Apache Web Server and MySQL Database are running (if you don't have manager-osx [XAMPP] you can get it here https://www.apachefriends.org/download.html )
5. Go to http://localhost/phpmyadmin and create the database using the .sql file in ```backend/```

   a. If you are unfamiliar with this process, go to the left-hand side, click "New" and then click the SQL tab at the top and paste the SQL       statements and click "Go"

6. Back in the terminal that is in the ```backend``` directory, run the command ```node server.js```
7. Open a second terminal in ```frontend``` and run ```npm run dev```
8. Go to http://localhost:5173 (the Vite-React development server)



Additional Features I would have liked to implement given more time:

* Editing customer - mistakes happen and it would be handy to be able to correct them without having to restart
* Remove customer confirmation modal - when clicking the remove button, it would be helpful to have to confirm it before just deleting them forever
* Soft remove - utilize database flags to "soft delete" a customer allowing the deletion to be undone in the event of a mistake
* Customer filtering/search - Assuming this directory would grow quite large, it would only make sense to have a specific way to filter them down to find who you are looking for easily
* Paging/lazy-loading - Following up on the last suggestion, a large database means a lot of loaded images and data - it would make sense to limit cards per page
* Additional validation - One place I immediately think of is dates - while they are properly formatted, there is nothing in place that verifies that the start date is before the end date
* Audit Log - this might be a touch out of scope but finally, I think it would be useful to log every time an action is committed to the database to ensure proper management - of course this also means there would need to be accounts and a whole other slew of security related features - but it just came to mind :) 
