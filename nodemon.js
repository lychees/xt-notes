{
  "verbose": true,
  "ignore": ["src/server/public/"],
  "events": {
  "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
},
  "watch": ["src/server/"],
  "env": {
  "NODE_ENV": "development"
},
  "ext": "js jade"
}
