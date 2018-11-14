const settings = require("./secrets/settings") // settings.json
var myArgs = process.argv.slice(2)
var knex = require('knex')({


client: 'pg',
  connection:{
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});
 console.log('Searching....')


  knex.select().from('famouss_people')
    .where('first_name', 'Paul')
  .asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log(rows)
  console.log(`Found ${rows.length} person(s) by the name 'Paul':`);
    rows.forEach(function (value, i){
      console.log(`${value.id}: ${value.first_name} ${value.last_name}, born '${value.birthdate}'`);
    })
})
