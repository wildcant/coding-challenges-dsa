npx nodemon -e java -w src -x 'javac --class-path src -d ./bin src/App.java; java -ea --class-path ./bin App'