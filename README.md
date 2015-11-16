
# turn on mongo server
mkdir data; cd data; mkdir db; cd ..;
mongod --dbpath data

# turn on node server
grunt serve

# before deploy
grunt build

# deploy to heroku
grunt buildcontrol:heroku

