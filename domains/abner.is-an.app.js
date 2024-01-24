addSubDomain({
  description: 'Abner Domain',
  domain: 'is-an.app', 
  subdomain: 'abner',
  owner: {
    repo: 'https://github.com/plvictor/abner-domain',
    email: 'souzavictorpaulo2006@gmail.com',
  },
  record: {
    A: '216.24.57.1',
    NS: ['chan.ns.cloudflare.com', 'yevgen.ns.cloudflare.com'],
    CNAME: 'abner-dash.onrender.com'
  }
});
