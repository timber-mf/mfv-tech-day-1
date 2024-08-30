package vn.mfv.booking.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import vn.mfv.booking.entity.Booking
import vn.mfv.booking.service.BookingService
import java.time.LocalDateTime

@RestController
@RequestMapping("/api/bookings")
class BookingController(private val bookingService: BookingService) {
    @GetMapping
    fun getAllBookings(): List<Booking> = bookingService.getAllBookings()

    @GetMapping("/{id}")
    fun getBookingById(@PathVariable id: Long): Booking? = bookingService.getBookingById(id)

    @GetMapping("/seat/{seatId}/time/{startTime}/{endTime}")
    fun getBookingsBySeatAndTime(
        @PathVariable seatId: Long,
        @PathVariable startTime: LocalDateTime,
        @PathVariable endTime: LocalDateTime
    ): List<Booking> = bookingService.getBookingsBySeatAndTime(seatId, startTime, endTime)

    @GetMapping("/user/{userId}")
    fun getBookingsByUser(@PathVariable userId: Long): List<Booking> = bookingService.getBookingsByUser(userId)

    @GetMapping("/availability/{seatId}/time/{startTime}/{endTime}")
    fun isSeatAvailable(
        @PathVariable seatId: Long,
        @PathVariable startTime: LocalDateTime,
        @PathVariable endTime: LocalDateTime
    ): Boolean = bookingService.isSeatAvailable(seatId, startTime, endTime)

    @PostMapping("/book")
    fun bookSeat(
        @RequestParam seatId: Long,
        @RequestParam userId: Long,
        @RequestParam startTime: LocalDateTime,
        @RequestParam endTime: LocalDateTime
    ): Booking? = bookingService.bookSeat(seatId, userId, startTime, endTime)
}