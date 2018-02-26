const express = require('express');
const {readFileSync} = require('fs');
const app = express();

const index = readFileSync(__dirname + '/../../statics/index.html', 'utf-8');

app.get('/bundle.js', (req, res) => {
  const bundle = readFileSync(require.resolve('../../bundle.js'));
  res.send(bundle);
});

app.get('/', (req, res) => res.send(index));

app.listen(3000, () => console.log('Running dev server on port 3000!'))
