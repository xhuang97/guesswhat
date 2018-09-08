Initial Setup:

Need to Install:
+ Python 3.5 or higher (Python 2.x is not supported by Django 2.x)
+ Pipenv
+ Node v8.x or higher
+ NPM v5.x or higher

```
pipenv install
pipenv shell
cd microblog/front-end
npm install
ng build
cd ../..
python manage.py runserver

```

To Yiwen:

+ Don't use the /polls/, it's just a tutorial example
+ Most things that you are going to change are probably under /videos/templates for your .html files
+ If you have CSS stuff or angular stuff, please look up how to incorporate it with Django app
