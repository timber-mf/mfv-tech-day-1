package vn.mfv.booking.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import vn.mfv.booking.entity.Seat
import vn.mfv.booking.service.SeatService

@RestController
@RequestMapping("/api/seats")
class SeatController(private val seatService: SeatService) {
    @GetMapping
    fun getAllSeats(): List<Seat> = seatService.getAllSeats()

    @GetMapping("/{id}")
    fun getSeatById(@PathVariable id: Long): Seat? = seatService.getSeatById(id)
}