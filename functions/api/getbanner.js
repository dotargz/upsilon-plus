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
  
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello!</title>
    <meta name="description" content="description"/>
    <meta name="author" content="author" />
    <meta name="keywords" content="keywords" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="./style.css" type="text/css" />
    <meta charset="UTF-8" />
  </head>
  <body>
    <p>you requested ${user}</p>
  </body>
</html>
`
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}