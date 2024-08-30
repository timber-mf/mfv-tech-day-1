package org.example.demo

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/public")
class DemoController(private val service: EntityService) {

    @GetMapping("/entities")
    fun getAllEntities(): List<Entity> = service.findAll()

    @GetMapping("/entities/{id}")
    fun getEntityById(@PathVariable id: Long): ResponseEntity<Entity> {
        val entity = service.findById(id)
        return if (entity != null) {
            ResponseEntity.ok(entity)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @PostMapping("/entities")
    fun createEntity(@RequestBody entity: Entity): Entity = service.save(entity)

    @PutMapping("/entities/{id}")
    fun updateEntity(@PathVariable id: Long, @RequestBody entity: Entity): ResponseEntity<Entity> {
        val updatedEntity = service.update(id, entity)
        return if (updatedEntity != null) {
            ResponseEntity.ok(updatedEntity)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @DeleteMapping("/entities/{id}")
    fun deleteEntity(@PathVariable id: Long): ResponseEntity<Void> {
        return if (service.findById(id) != null) {
            service.deleteById(id)
            ResponseEntity.noContent().build()
        } else {
            ResponseEntity.notFound().build()
        }
    }
}