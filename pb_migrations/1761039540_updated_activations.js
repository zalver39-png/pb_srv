/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_629301376")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2134807182",
    "max": "",
    "min": "",
    "name": "field2",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file137994776",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "field3",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_629301376")

  // remove field
  collection.fields.removeById("date2134807182")

  // remove field
  collection.fields.removeById("file137994776")

  return app.save(collection)
})
