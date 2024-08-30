package vn.mfv.booking.entity

import jakarta.persistence.*
import mfv.booking.entity.User
import java.time.LocalDateTime

@Entity
data class Booking(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne
    @JoinColumn(name = "seat_id", nullable = false)
    val seat: Seat,

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    val user: User,

    val startTime: LocalDateTime,
    val endTime: LocalDateTime
) {
    constructor() : this(id = 0, seat = Seat(), user = User(), startTime = LocalDateTime.now(), endTime = LocalDateTime.now())
}