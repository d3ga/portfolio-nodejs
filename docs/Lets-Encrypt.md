# Using Let's Encrypt certificates

## 1. Generating a certificiate

[Let's Encrypt](https://letsencrypt.org/) can be used with [Certbot](https://certbot.eff.org/) that automates the process of creating and updating certificates for you. Their website has a detailed documentation how to setp Certbot and how to create a certificate.

They support all major operating systems.

## 2. Adding the certificate

Open the [variables.env](../variables.env.sample) file you created during the installation of the boilerplate.

For [Let's Encrypt](https://letsencrypt.org/) certificates you need to use the "SSL/TLS Security settings" block and remove the hash characters. Add the path to your generated _privkey.pem_ and _fullchain.pem_.

```
SSL=on
SSL_KEY=/etc/letsencrypt/live/your-domain/privkey.pem
SSL_CERT=/etc/letsencrypt/live/your-domain/fullchain.pem
```

## 3. Diffie–Hellman Strong(er) Parameters

For advanced security, there's also the option to add your own [Diffie-Hellmann key](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) that will be used instead of the default one.

You can use [OpenSSL](https://www.openssl.org/) to generate such a key:  
```
openssl dhparam -out /var/www/ssl/dh-strong.pem 2048
```

You [variables.env](../variables.env.sample) file should then look like this:  
```
SSL=on
SSL_KEY=/etc/letsencrypt/live/your-domain/privkey.pem
SSL_CERT=/etc/letsencrypt/live/your-domain/fullchain.pem
SSL_DHPARAM=/var/www/ssl/dh-strong.pem
```
