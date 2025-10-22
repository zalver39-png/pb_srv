/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_629301376")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json1542800728",
    "maxSize": 0,
    "name": "field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_629301376")

  // remove field
  collection.fields.removeById("json1542800728")

  return app.save(collection)
})
