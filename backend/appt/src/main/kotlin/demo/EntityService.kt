package org.example.demo

import org.springframework.stereotype.Service

@Service
class EntityService(private val repository: EntityRepository) {

    fun findAll(): List<Entity> = repository.findAll()

    fun findById(id: Long): Entity? = repository.findById(id).orElse(null)

    fun save(entity: Entity): Entity = repository.save(entity)

    fun update(id: Long, entity: Entity): Entity? {
        return if (repository.existsById(id)) {
            repository.save(entity.copy(id = id))
        } else {
            null
        }
    }

    fun deleteById(id: Long) {
        repository.deleteById(id)
    }
}