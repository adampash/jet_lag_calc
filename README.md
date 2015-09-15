## Development

```bash
npm run start
```

## Deploy
```bash
npm run deploy
```

### Notes

In GeosuggestItem.js, removed event.preventDefault() from onClick event.

```javascript
  onClick: function onClick(event) {
    // event.preventDefault();
    this.props.onSuggestSelect(this.props.suggest);
  },
```

This was causing inconsistent behavior in the click event.
