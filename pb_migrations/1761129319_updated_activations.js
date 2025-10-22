/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_629301376")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool2018727575",
    "name": "field6",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_629301376")

  // remove field
  collection.fields.removeById("bool2018727575")

  return app.save(collection)
})
