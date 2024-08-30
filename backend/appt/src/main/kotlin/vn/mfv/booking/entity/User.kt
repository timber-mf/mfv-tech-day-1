package vn.mfv.booking.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class User(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val googleId: String,
    val name: String,
    val email: String
) {
    constructor() : this(id = 0, googleId = "", name = "", email = "")
}