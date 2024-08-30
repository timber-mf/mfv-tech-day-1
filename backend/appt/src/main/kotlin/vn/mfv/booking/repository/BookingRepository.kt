package vn.mfv.booking.repository

import org.springframework.data.jpa.repository.JpaRepository
import vn.mfv.booking.entity.Booking
import java.time.LocalDateTime

interface BookingRepository : JpaRepository<Booking, Long> {
    fun findBySeatIdAndStartTimeLessThanEqualAndEndTimeGreaterThanEqual(seatId: Long, startTime: LocalDateTime, endTime: LocalDateTime): List<Booking>
    fun findByUserId(userId: Long): List<Booking>
}