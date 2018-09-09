# LiveBoard
LiveBoard processes input from two cameras to update a digital representation of a drawing board.  
Live feed accessible via `http://<server>/mjpg/live.mjpg`

### Requirement
+ Python 3.5 or higher
+ Node v8.x or higher
+ NPM v5.x or higher  
  Django 2.1.1 via Pip  
  Pipenv via Pip  
  Pillow via Pip

### Setup
```
pipenv install
pipenv shell
cd videos/front-end
npm install
ng build
cd ../..
python manage.py runserver

```


### Basic Routine to Start Server
```
pipenv shell
python manage.py runserver
```

