// password: 'uoevzwkhjrmtygzq', // Set up IMAP connection
import Imap from 'imap';
import { inspect } from 'util';

const imap = new Imap({
  user: 'ansladdha23@gmail.com',    // Your email
  password: 'uoevzwkhjrmtygzq',     // Your app password
  host: 'imap.gmail.com',            // Gmail IMAP server
  port: 993,                         // Secure IMAP port
  tls: true,                          // Use TLS encryption
  tlsOptions: {
    rejectUnauthorized: false,       // Allow self-signed certificates
  }
});

function openInbox(cb) {
  imap.openBox('INBOX', true, cb); // Open the inbox folder in read-only mode
}

imap.once('ready', () => {
  console.log('IMAP connection ready');
  openInbox((err, box) => {
    if (err) throw err;
    console.log('Inbox opened:', box);
    // Fetch the latest email
    const fetch = imap.fetch(box.messages.total + ':*', { // Fetch latest emails
      bodies: '',
      struct: true
    });

    fetch.on('message', (msg, seqno) => {
      console.log('Message #%d', seqno);
      let prefix = '(#' + seqno + ') ';
      msg.on('body', (stream, info) => {
        let buffer = '';
        stream.on('data', (chunk) => {
          buffer += chunk.toString();
        });
        stream.once('end', () => {
          console.log(prefix + 'Body: ' + inspect(buffer));
        });
      });
    });

    fetch.once('end', () => {
      console.log('Done fetching all messages!');
      imap.end();  // End the IMAP connection
    });
  });
});

imap.once('error', (err) => {
  console.error('IMAP error:', err);
});

imap.once('end', () => {
  console.log('IMAP connection ended');
});

imap.connect();
