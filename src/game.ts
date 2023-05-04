const building = new Entity()
building.addComponent(new GLTFShape('models/scene_02.glb'))
building.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))
engine.addEntity(building)
