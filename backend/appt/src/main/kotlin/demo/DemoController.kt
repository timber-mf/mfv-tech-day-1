package org.example.demo

import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.oauth2.core.user.OAuth2User
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/public")
class DemoController(private val service: EntityService) {

    @GetMapping("/entities")
    fun getAllEntities(@AuthenticationPrincipal oauth2User: OAuth2User, model: Model): List<Entity> = service.findAll()

    @GetMapping("/entities/{id}")
    fun getEntityById(@AuthenticationPrincipal oauth2User: OAuth2User, model: Model, @PathVariable id: Long): ResponseEntity<Entity> {
        val entity = service.findById(id)
        return if (entity != null) {
            ResponseEntity.ok(entity)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @PostMapping("/entities")
    fun createEntity(@AuthenticationPrincipal oauth2User: OAuth2User, model: Model, @RequestBody entity: Entity): Entity = service.save(entity)

    @PutMapping("/entities/{id}")
    fun updateEntity(@AuthenticationPrincipal oauth2User: OAuth2User, model: Model, @PathVariable id: Long, @RequestBody entity: Entity): ResponseEntity<Entity> {
        val updatedEntity = service.update(id, entity)
        return if (updatedEntity != null) {
            ResponseEntity.ok(updatedEntity)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @DeleteMapping("/entities/{id}")
    fun deleteEntity(@AuthenticationPrincipal oauth2User: OAuth2User, @PathVariable id: Long): ResponseEntity<Void> {
        return if (service.findById(id) != null) {
            service.deleteById(id)
            ResponseEntity.noContent().build()
        } else {
            ResponseEntity.notFound().build()
        }
    }


    private fun getAttributeUser(oauth2User: OAuth2User, model: Model) {
        model.addAttribute("name", oauth2User.getAttribute<String>("name"))
        model.addAttribute("id", oauth2User.getAttribute<String>("sub"))
    }

    @PostMapping("/test")
    fun post(@AuthenticationPrincipal oauth2User: OAuth2User, model: Model): String {
        getAttributeUser(oauth2User, model)
        return model.toString()  // Your home page after login
    }

    @GetMapping("/test")
    fun getAuth(@AuthenticationPrincipal oauth2User: OAuth2User, model: Model): String {
        getAttributeUser(oauth2User, model)
        return model.toString()  // Your home page after login
    }
}