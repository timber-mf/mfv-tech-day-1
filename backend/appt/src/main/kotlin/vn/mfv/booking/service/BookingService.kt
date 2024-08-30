package vn.mfv.booking.service

import vn.mfv.booking.entity.RenewalFrequency
import vn.mfv.booking.repository.SeatRepository
import org.springframework.stereotype.Service
import vn.mfv.booking.entity.Booking
import vn.mfv.booking.exception.BusinessException
import vn.mfv.booking.repository.BookingRepository
import vn.mfv.booking.repository.UserRepository
import java.time.LocalDateTime

@Service
class BookingService(private val bookingRepository: BookingRepository, private val seatRepository: SeatRepository, private val userRepository: UserRepository) {
    fun getAllBookings(): List<Booking> = bookingRepository.findAll()
    fun getBookingById(id: Long): Booking? = bookingRepository.findById(id).orElse(null)
    fun getBookingsBySeatAndTime(seatId: Long, startTime: LocalDateTime, endTime: LocalDateTime): List<Booking> =
        bookingRepository.findBySeatIdAndStartTimeLessThanEqualAndEndTimeGreaterThanEqual(seatId, startTime, endTime)

    fun getBookingsByUser(userId: Long): List<Booking> = bookingRepository.findByUserId(userId)

    fun isSeatAvailable(seatId: Long, startTime: LocalDateTime, endTime: LocalDateTime): Boolean {
        val bookings = getBookingsBySeatAndTime(seatId, startTime, endTime)
        return bookings.isEmpty()
    }

    fun bookSeat(seatId: Long, userId: Long, startTime: LocalDateTime, endTime: LocalDateTime, renewalFrequency: RenewalFrequency? = null): Booking? {
        if (isSeatAvailable(seatId, startTime, endTime)) {
            val seat = seatRepository.findById(seatId).orElse(null) ?: return null
            val user = userRepository.findById(userId).orElse(null) ?: return null
            val booking = Booking(seat = seat, user = user, startTime = startTime, endTime = endTime, renewalFrequency = renewalFrequency)
            return bookingRepository.save(booking)
        }
        // user can only book 1 seat in a period of time
        // Check if the user has any overlapping bookings
        val userBookings = getBookingsByUser(userId)
        val hasOverlappingBooking = userBookings.any { booking ->
            (startTime.isBefore(booking.endTime) && endTime.isAfter(booking.startTime))
        }
        if (hasOverlappingBooking) {
            // User has an overlapping booking, return null or handle accordingly
            throw BusinessException("OVERLAPPING_BOOKING", "User has an overlapping booking")
        }

        throw BusinessException("SEAT_NOT_AVAILABLE", "Seat is not available")
    }

    fun deleteBooking(id: Long): Boolean {
        return if (bookingRepository.existsById(id)) {
            bookingRepository.deleteById(id)
            true
        } else {
            false
        }
    }
}
