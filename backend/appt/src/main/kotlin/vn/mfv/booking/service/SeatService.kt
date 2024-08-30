package vn.mfv.booking.service

import org.springframework.stereotype.Service
import vn.mfv.booking.entity.Seat
import vn.mfv.booking.repository.SeatRepository

@Service
class SeatService(private val seatRepository: SeatRepository) {
    fun getAllSeats(): List<Seat> = seatRepository.findAll()
    fun getSeatById(id: Long): Seat? = seatRepository.findById(id).orElse(null)
}