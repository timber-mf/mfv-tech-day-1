package vn.mfv.booking.controller

import vn.mfv.booking.model.SeatDTO
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import vn.mfv.booking.entity.Seat
import vn.mfv.booking.service.SeatService
import java.time.LocalDateTime

@RestController
@RequestMapping("/api/seats")
class SeatController(private val seatService: SeatService) {

    @GetMapping
    fun getAllSeats(
        @RequestParam from: LocalDateTime,
        @RequestParam to: LocalDateTime,
    ): List<SeatDTO> = seatService.getAllSeats(from, to)


    //generate api creat seats from 1 to 144
    @GetMapping("/generate")
    fun generateSeats(): List<Seat> = seatService.generateSeats()

    //delete all seats
    @GetMapping("/delete")
    fun deleteAllSeats() = seatService.deleteAllSeats()

    @PostMapping("/checkin")
    fun checkIn(@RequestParam seatId: Long, @RequestParam userId: Long): Boolean {
        return seatService.checkIn(seatId, userId)
    }

    @PostMapping("/release")
    fun releaseUnCheckedInSeats() {
        seatService.releaseUnCheckedInSeats()
    }
}
