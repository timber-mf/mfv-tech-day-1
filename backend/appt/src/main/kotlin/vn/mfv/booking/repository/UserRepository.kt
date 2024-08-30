package vn.mfv.booking.repository


import mfv.booking.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import vn.mfv.booking.entity.Seat

interface UserRepository : JpaRepository<User, Long>