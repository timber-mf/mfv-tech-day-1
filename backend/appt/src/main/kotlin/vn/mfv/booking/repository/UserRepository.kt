package vn.mfv.booking.repository


import vn.mfv.booking.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, Long> {
    fun getUserByEmail(email: String): User?
}