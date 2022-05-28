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
  // YOU CAN EDIT THIS
  let members = {
    BlueSkye: "https://blueskye.dev",
    Xan: "https://xan.lol",
    Nodex: "https://nodex.hexx.page",
    Qux: "https://github.com/qaxt"
  }
  if (user in members) {
  // stolen from stackoverflow
  var randomProperty = function (obj) {
    let newobj = obj
    delete newobj[user];
    var keys = Object.keys(newobj);
    return newobj[keys[ keys.length * Math.random() << 0]];
  };
  let website = members[user];

  // to make next and last work we need to sort them
  let lastItem;
  let nextItem;
  let keys = Object.keys(members) // ["BlueSkye", etc]
  let random = randomProperty(members); // http://website.com
  var size = Object.keys(members).length; // size of list (int)
  let nextIndex = keys.indexOf(user) +1; //
  if (nextIndex > size) {
    nextIndex = 0
  }
  nextItem = keys[nextIndex];
  let lastIndex = keys.indexOf(user) -1;
  if (lastIndex < 0) {
    lastIndex = size
  }
  lastItem = keys[lastIndex];

  // now for custom css support, aaaaaaaaaaaaaa
  let forecolor;
  let backcolor;
  let bordercolor;
  // foreground color
  if (searchParams.get('forecolor') == null) {
    forecolor = "fff";
  }
  else {
    forecolor = searchParams.get('forecolor');
  }
  // background color
  if (searchParams.get('backcolor') == null) {
    backcolor = "000";
  }
  else {
    backcolor = searchParams.get('backcolor');
  }
  // border color
  if (searchParams.get('bordercolor') == null) {
    bordercolor = backcolor;
  }
  else {
    bordercolor = searchParams.get('bordercolor');
  }

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
  <h1><a href="https://upsilon.plus" class="hover-link" style="text-decoration:none;">Upsilon</a> + <a href="${website}" class="hover-link" style="text-decoration:none;">${user}</a></h1>
  <span style="margin: 5px;"><a href="${members[lastItem]}" class="hover-link">before</a>  <a href="${random}" class="hover-link">random</a>  <a href="${members[nextItem]}" class="hover-link">next</a></span>
  </div>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  #upsilon-card {
    border: 2px solid #${bordercolor};
    background-color: #${backcolor};
    border-radius: 2px;
    width: 100%;
    height: 85px;
    text-align: center;
    color: #${forecolor};
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
    color: #${forecolor};
    background-color: inherit;
    border: 2px solid #${backcolor};
    border-radius: 2px;
    margin-left: 5px;
  }
  
  .hover-link {
   width: max-content;
  }
  
  .hover-link:hover {
    border: 2px solid #${forecolor};
    border-radius: 5px;
    color: #${backcolor};
    background-color: #${forecolor};
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