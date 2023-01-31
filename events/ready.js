const event = {
    name: 'ready',
    async code(client) {
      console.log('Seccion iniciada con:', client.user?.username);
      client.skyfold.sync(client.token, client.user.id).then(() => {
        console.log('Slash commands synced!')
       
      });
  
    }
}

module.exports = {event}