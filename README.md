# readQuery.js
This repo allows you to read the parameters after "?" in the href without using the server (pure client)!
## Download 
Download `readQuery.js` or `readQuery.min.js`, and add a `<script>` tag to your HTML document like this:
```html
<script src="./readQuery.js"></script>
```
## API
### `window.location.query` 
`window.location.query` is an object.
For example, if this is the query string:
```
?a=hello&b=world
```
The `window.location.query` should be like this:
```javascript
{
    a: "hello",
    b: "world"
}
```
### `window.location.queryString` 
`window.location.queryString` is the query string.

## Examples
Check examples [here](examples/).