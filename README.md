# readQuery.js
This repo allows you to read the parameters after "?" in the href without using the server (pure client)!
## Usage 
Download `readQuery.js` or `readQuery.min.js`, and add a `<script>` tag to your HTML document like this:
```html
<script src="/path/to/readQuery.js"></script>
```
## API
### `window.location.query` 
`window.location.query` is an object.
For example, if this is the link:
```
https://your-site.com/?a=hello&b=world
```
The `window.location.query` should be like this:
```javascript
{
    a: "hello",
    b: "world"
}
```
#### New feature(s) in V3.1
You can also set the query object like this:
```javascript
window.location.query = {a: "hello"};
```
After running the above code, you should be redirected to this page:
```
https://your-site.com/?a=hello
```
### `window.location.queryString` 
`window.location.queryString` is the query string.  
For example:
```
a=hello&b=world
```
#### New feature(s) in V3.1
You can also set the query string like this:
```javascript
window.location.queryString = "a=hello";
```
After running the above code, you should be redirected to this page:
```
https://your-site.com/?a=hello
```
## Examples
Check examples [here](examples/).