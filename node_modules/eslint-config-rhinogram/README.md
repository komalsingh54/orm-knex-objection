### eslint-config-rhinogram

A collection of eslint configurations we use at Rhinogram.

#### Usage
```
$ yarn add eslint-config-rhinogram -D
```

The index file references our React config
```javascript
// .eslintrc

{
  "extends": "rhinogram"
}
```

Alternatives:
```javascript
// .eslintrc

{
  "extends": "rhinogram/react"
}

{
  "extends": "rhinogram/node"
}
```