package vn.mfv.booking.service

import org.springframework.stereotype.Service
import vn.mfv.booking.entity.Booking
import vn.mfv.booking.repository.BookingRepository
import java.time.LocalDateTime

@Service
class BookingService(private val bookingRepository: BookingRepository) {
    fun getAllBookings(): List<Booking> = bookingRepository.findAll()
    fun getBookingById(id: Long): Booking? = bookingRepository.findById(id).orElse(null)
    fun getBookingsBySeatAndTime(seatId: Long, startTime: LocalDateTime, endTime: LocalDateTime): List<Booking> =
        bookingRepository.findBySeatIdAndStartTimeLessThanEqualAndEndTimeGreaterThanEqual(seatId, startTime, endTime)
    fun getBookingsByUser(userId: Long): List<Booking> = bookingRepository.findByUserId(userId)
}