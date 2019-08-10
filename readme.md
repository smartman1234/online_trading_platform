# Online Trading Platform
## Purpose
* This is my 1st big project to develop a full stack app by myself.
* It will be an online trading platform mainly for equities.
* Charts visualization and creation of personal portfolios will be the first end goal.
* Implement machine learning to analyze stocks will be my 2nd end goal, this will be done in the near future when I have the time.

## How to make this work
* Get your own Django secret key
  * Create your own Django app => copy the secret key => paste into this project's secret key location at settings.py or in your environment.
* Create your own mysql database
  * Change the username, password, and database name at settings.py
* API key is required if you want to use data from IEX cloud.
  * Create your own account with IEX (it's free).
* Use pipenv to install all python dependencies for the backend.
* Use npm to install all frontend related dependencies.

## How to run
1. Turn on MySql server
2. Turn on backend server
    * python manage.py runserver
3. Turn on Frontend server
    * npm start

## List of major technologies used
* Django
* React
* D3
* MySql
* Django Rest Framework
* Redux
* Material-UI

## List of Things to do
* ~~Build a restful api with Django~~
* ~~Start a simple template with React~~
* ~~Use MySql as database~~
* ~~Integrate MySql with Django~~
* ~~Integrate React with Django~~
* ~~Made a basic user authentication feature~~
* ~~Style with Material-UI~~
* ~~Integrate d3 with React~~
* ~~Write my own iex api to get financial data from IEX~~
* ~~Integrate iex api with d3~~
* ~~Write my own iex cloud api to get financial market and stocks data from IEX cloud~~
* ~~Integrate iex cloud api with d3~~
* ~~Slightly improved d3 charts~~
* ~~Reorganize Navbar into separate components~~
* ~~Implement Search Bar and enable multi search feature~~
* ~~Implement Async Select and Search in large database~~
* ~~Link Nav search bar with chart display~~
* ~~Add range select for chart~~
* ~~Implement Candle Stick chart~~
* ~~Fix X ticks~~
* ~~Implement Menu bar~~
* ~~Add news to Dashboard~~
* ~~Add Company Profile to Dashboard~~
* ~~Add Advanced Stats to Dashboard~~
* ~~Add Key Stats, Balance Sheet, Cash Flow, Income Statement to Dashboard~~
* ~~Add other features and links into Menu (news, etc.)~~
* ~~Reorganize Dashboard and split into different pages~~
* ~~Add Loading feature~~
* ~~Add portfolio frontend and backend feature~~
* ~~Add buy and sell stock feature~~
* ~~Improve trade UI~~
* ~~Add real time price update for trade UI~~
* ~~Add real time price and change update for Dashboard UI~~
* ~~Add Profile feature~~
* ~~Add privacy for portfolio and profile~~
* ~~Add token expiry feature (auto logout or extend) in backend and frontend~~
* Improve auto logout alert UI
* Improve profile feature and design
* Add password reset feature
* Set auto cash on hand update for trade UI
* Improve portfolio design
* Improve loading UI
* Implement chart select feature
* Improve d3 visualization
* Expand the type of graphs and visualizations with d3
* Add Real time chart support
* Add notification feature
* Improve overall styling
