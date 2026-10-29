/* Serves the ads site. Requests to ads.trigrams.studio for these paths get
   the files in ads/; everything else (styles, scripts, assets, legal pages)
   is shared with www. This has to be middleware: vercel.json rewrites only
   run when no file matches the path, and index.html, work.html etc. exist at
   the root for www.

   trigrams-ads-preview.vercel.app is an alias for testing a preview build as
   the ads site before it goes live (vercel alias set <preview> <that>). */
export const config = {
  matcher: ['/', '/work', '/what-to-expect', '/book-a-call', '/enquiry', '/robots.txt', '/sitemap.xml', '/llms.txt']
};

const ADS_HOSTS = ['ads.trigrams.studio', 'trigrams-ads-preview.vercel.app'];

export default function middleware(request) {
  const url = new URL(request.url);
  // Booking a call is off for now: both sites send people to the enquiry form.
  if (url.pathname === '/book-a-call') {
    return Response.redirect(new URL('/enquiry' + url.search, url), 307);
  }
  const host = (request.headers.get('host') || url.host).toLowerCase();
  if (!ADS_HOSTS.includes(host)) {
    return new Response(null, { headers: { 'x-middleware-next': '1' } });
  }
  const dest = new URL(url.pathname === '/' ? '/ads' : '/ads' + url.pathname, url);
  dest.search = url.search;
  return new Response(null, { headers: { 'x-middleware-rewrite': dest.toString() } });
}
