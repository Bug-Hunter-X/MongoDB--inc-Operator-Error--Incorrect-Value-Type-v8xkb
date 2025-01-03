```javascript
// Incorrect usage of $inc operator
db.collection.updateOne({fieldName: "value"}, {$inc: {fieldName: "string"}});
```