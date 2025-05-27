const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 3001 });
  
  console.log('Your website is available at:');
  console.log(tunnel.url);
  console.log('\nShare this URL with your management team.');
  console.log('Press Ctrl+C to stop the tunnel.');
  
  tunnel.on('close', () => {
    console.log('Tunnel closed');
  });
})(); 