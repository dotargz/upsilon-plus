export async function onRequest(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;
  const { searchParams } = new URL(request.url);
  let user = searchParams.get('user');
  let members = ["BlueSkye", "Xan", "Nodex", "Qux"]
  if (user in members) {
  
  const html = `
  <!DOCTYPE html>
  <html>
  <style>
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  </style>
  <body>
  <div id="upsilon-card">
  <h1><a href="https://upsilon.plus" class="hover-link" style="text-decoration:none;">Upsilon</a> + <a href="https://" class="hover-link" style="text-decoration:none;">${user}</a></h1>
  <span style="margin: 5px;"><a href="#" class="hover-link">before</a>  <a href="#" class="hover-link">random</a>  <a href="#" class="hover-link">next</a></span>
  </div>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  #upsilon-card {
    border: 2px solid black;
    background-color: black;
    border-radius: 2px;
    width: 100%;
    height: 85px;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Noto Serif', serif;
  }
  h1 {
    font-weight: bolder;
    font-size: 28px;
    margin-bottom: 10px;
  }
  a {
    text-decoration: underline;
    color: white;
    background-color: inherit;
    border: 2px solid black;
    border-radius: 2px;
    margin-left: 5px;
  }
  
  .hover-link {
   width: max-content;
  }
  
  .hover-link:hover {
    border: 2px solid white;
    border-radius: 5px;
    color: black;
    background-color: white;
  }
  </style>
  </body>
  </html>
`
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}
else {
  return new Response("User Not Found", {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}
}