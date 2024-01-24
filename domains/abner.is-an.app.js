addSubDomain({
  description: 'Abner Domain',
  domain: 'is-an.app', 
  subdomain: 'abner',
  owner: {
    repo: 'https://github.com/plvictor/abner-domain',
    email: 'souzavictorpaulo2006@gmail.com',
  },
  record: {
    CNAME: 'abner-dash.onrender.com',
    NS: ['chan.ns.cloudflare.com', 'yevgen.ns.cloudflare.com']
  },
});
