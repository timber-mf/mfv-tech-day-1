package vn.mfv.booking.service

import vn.mfv.booking.model.SeatDTO
import vn.mfv.booking.entity.SeatStatus
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import vn.mfv.booking.entity.Seat
import vn.mfv.booking.repository.SeatRepository
import vn.mfv.booking.repository.BookingRepository
import java.time.LocalDateTime

@Service
@Transactional
class SeatService(
    private val seatRepository: SeatRepository,
    private val bookingRepository: BookingRepository
) {

    fun getAllSeats(from: LocalDateTime, to: LocalDateTime): List<SeatDTO> {
        //get all seats and return status of seat based on booking
        val seats = seatRepository.findAll()
        val now = LocalDateTime.now()
        val bookings = bookingRepository.findByStartTimeLessThanEqualAndEndTimeGreaterThanEqual(from, to)
        return seats.map { seat ->
            val booking = bookings.find { it.seat.id == seat.id }
//            val status = if (bookings.any { it.seat.id == seat.id }) SeatStatus.BOOKED else SeatStatus.AVAILABLE
            val status = if (booking != null) {
                if (booking.checkedIn || booking.startTime.plusMinutes(10).isAfter(now)) {
                    SeatStatus.BOOKED
                } else {
                    SeatStatus.AVAILABLE
                }
            } else {
                SeatStatus.AVAILABLE
            }
            SeatDTO(seat.id!!, seat.name, seat.qrCode, status)
        }
    }

    fun generateSeats(): List<Seat> {
        //generate seats from 1 to 144
        for (i in 1..144) {
            seatRepository.save(Seat(name = "$i", qrCode = "QR-$i", locationX = 0, locationY = 0))
        }
        return emptyList()
    }

    fun deleteAllSeats() {
        //delete all seats
        seatRepository.deleteAll()
    }

    fun checkIn(seatId: Long, userId: Long): Boolean {
        val booking = bookingRepository.findBySeatIdAndUserIdAndCheckedInFalse(seatId, userId)
        return if (booking != null && booking.startTime.isBefore(LocalDateTime.now().plusMinutes(10))) {
            booking.checkedIn = true
            booking.checkInTime = LocalDateTime.now()
            bookingRepository.save(booking)
            true
        } else {
            false
        }
    }

    fun releaseUnCheckedInSeats() {
        val now = LocalDateTime.now()
        val bookings = bookingRepository.findByCheckedInFalseAndStartTimeBefore(now.minusMinutes(10))
        bookings.forEach { booking ->
            bookingRepository.delete(booking)
        }
    }
}
