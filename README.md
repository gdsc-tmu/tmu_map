1. Install dependencies <br>
In the project directory, run <br>
```
pip3 install -r requirements.txt
```
2. For this web app, Google API only accepts requests from ```http://127.0.0.1:8000/map```<br>
so, make sure you are using that one!

3. Before running in local environment, you need .env file which include information needed to access the database! <br>
To get the file, please contact me via yujirokisu@gmail.com or just DM me in GDSC Slack :thumbsup:

4. Run the app (make sure that you are in the correct directory!)
```
python3 manage.py runserver 
```
5. Type the url below
```
http://127.0.0.1:8000/map/
```

6. We use python version 3.11.2
