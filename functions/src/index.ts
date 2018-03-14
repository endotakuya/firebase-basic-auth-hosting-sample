import * as functions from 'firebase-functions'
import * as express from 'express'
import * as basicAuth from 'basic-auth-connect'

const app = express()

// Basic Authfication
app.use(basicAuth('hoge', 'fuga'))

// Redirect root
app.get('/auth', (req, res) => {
  res.redirect('/index.html')
})

exports.app = functions.https.onRequest(app)