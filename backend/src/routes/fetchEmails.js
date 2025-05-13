import express from 'express';
import Imap from 'imap';
import { simpleParser } from 'mailparser';

const router = express.Router();

router.get('/fetchEmails', (req, res) => {
  const imap = new Imap({
    user: 'ansladdha23@gmail.com',           // ✅ Replace with your Gmail address
    password: 'uoevzwkhjrmtygzq',          // ✅ Replace with your 16-char app password
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },  // Fix self-signed certificate error
  });

  function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
  }

  imap.once('ready', () => {
    openInbox((err, box) => {
      if (err) {
        console.error('❌ Open inbox error:', err);
        return res.status(500).json({ error: 'Failed to open inbox' });
      }

      imap.search(['UNSEEN'], (err, results) => {
        if (err) {
          console.error('❌ Search error:', err);
          return res.status(500).json({ error: 'Search failed' });
        }

        if (!results.length) {
          return res.status(200).json({ message: 'No new emails found' });
        }

        const f = imap.fetch(results, { bodies: '' });
        const emails = [];

        f.on('message', (msg) => {
          msg.on('body', (stream) => {
            simpleParser(stream, (err, parsed) => {
              if (!err) {
                emails.push({
                  from: parsed.from.text,
                  subject: parsed.subject,
                  date: parsed.date,
                  text: parsed.text,
                });
              }
            });
          });
        });

        f.once('end', () => {
          imap.end();
          res.status(200).json({ emails });
        });
      });
    });
  });

  imap.once('error', (err) => {
    console.error('❌ IMAP error:', err);
    res.status(500).json({ error: 'IMAP connection error' });
  });

  imap.connect();
});

export default router;
