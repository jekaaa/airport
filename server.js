var webpack = require('webpack')
var fs = require('fs')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var bodyParser = require('body-parser')

var app = new (require('express'))()
var port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", (req, res) => res.sendFile(__dirname + '/index.html'))

app.route("/api")
	.get((req, res) => {
		fs.readFile('db.json', (err, data) => {
			if(err) res.sendStatus(500)
	        else res.json(JSON.parse(data))
		})
	})

	.post((req, res) => {
		if (req.body.number && req.body.fromCity && req.body.toCity &&
			req.body.type && req.body.time && req.body.realTime && req.body.status){
			fs.readFile('db.json', (err, data) => {
				if (err) res.sendStatus(500)
		        else {
		        	var flights = JSON.parse(data).flights
		        	var flight = {
		        		"id": Date.now(),
		        		"number": req.body.number,
		        		"fromCity": req.body.fromCity,
		        		"toCity": req.body.toCity,
		        		"type": req.body.type,
		        		"time": req.body.time,
		        		"realTime": req.body.realTime,
		        		"status": req.body.status
		        	}
		        	flights.push(flight)
		        	fs.writeFile('db.json', JSON.stringify({"flights": flights}, null, 4), err => {
		        		if (err) res.sendStatus(500)
		        		else res.sendStatus(200)
		        	})

		        }
			})

		}
		else res.sendStatus(400)
	})

	.delete((req, res) => {
		if (req.body.id){
			fs.readFile('db.json', (err, data) => {
				if (err) res.sendStatus(500)
				else {
					var flights = JSON.parse(data).flights.filter(item => item.id != req.body.id)
					fs.writeFile('db.json', JSON.stringify({"flights": flights}, null, 4), err => {
		        		if (err) res.sendStatus(500)
		        		else res.sendStatus(200)
		        	})
				}
			})
		}
		else res.sendStatus(400)
	})
	.put((req, res) => {
		if (req.body.number && req.body.toCity && req.body.fromCity &&
			req.body.type && req.body.time && req.body.realTime && 
			req.body.status && req.body.id){
			fs.readFile('db.json', (err, data) => {
				if (err) res.sendStatus(500)
		        else {
		        	var flights = JSON.parse(data).flights.filter(item => item.id != req.body.id)
		        	var flight = {
		        		"id": Number(req.body.id),
		        		"number": req.body.number,
		        		"fromCity": req.body.fromCity,
		        		"toCity": req.body.toCity,
		        		"type": req.body.type,
		        		"time": req.body.time,
		        		"realTime": req.body.realTime,
		        		"status": req.body.status
		        	}
		        	flights.push(flight)
		        	fs.writeFile('db.json', JSON.stringify({"flights": flights}, null, 4), err => {
		        		if (err) res.sendStatus(500)
		        		else res.sendStatus(200)
		        	})

		        }
			})

		}
		else res.sendStatus(400)
	})

app.post("/api/city", (req, res) => {
	if (req.body.city) {
		fs.readFile('db.json', (err, data) => {
			if(err) res.sendStatus(500)
	        else res.json(JSON.parse(data).flights
	        	.filter(item => (
		        	(item.fromCity == req.body.city) || 
		        	(item.toCity == req.body.city))
	        	)
	        )
		})
	}
	else res.sendStatus(400)
})

app.post("/api/status", (req, res) => {
	if (req.body.status) {
		fs.readFile('db.json', (err, data) => {
			if(err) res.sendStatus(500)
	        else res.json(JSON.parse(data).flights
	        	.filter(item => item.status == req.body.status)
	        )
		})
	}
	else res.sendStatus(400)
})

app.listen(port, error => {
  if (error) console.error(error)
  else console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
})