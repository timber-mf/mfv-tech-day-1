package vn.mfv.booking.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class Seat(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val name: String,
    val locationX: Int,
    val locationY: Int,
    val qrCode: String
) {
    constructor() : this(id = 0, name = "", locationX = 0, locationY = 0, qrCode = "")
}