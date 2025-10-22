/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1849814775")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "bool137994776",
    "name": "field3",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1849814775")

  // remove field
  collection.fields.removeById("bool137994776")

  return app.save(collection)
})
