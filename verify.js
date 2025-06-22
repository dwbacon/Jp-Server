const bcrypt = require('bcrypt');
const readline = require('readline');

const saltRounds = 10;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('--- Password Hash Generator ---');

rl.question('What do you want your password to be? ', async (password) => {
  if (!password) {
    console.error('❌ Password cannot be empty.');
    rl.close();
    return;
  }
  
  try {
    console.log('\n⏳ Generating hash...');
    const hash = await bcrypt.hash(password, saltRounds);

    console.log('\n✅ Success! Here is your generated hash:');
    console.log('------------------------------------------------------------');
    console.log(hash);
    console.log('------------------------------------------------------------');
    console.log('\nCopy the line above and paste it into your server.js file.');

  } catch (error) {
    console.error('❌ Error generating hash:', error);
  } finally {
    rl.close();
  }
});