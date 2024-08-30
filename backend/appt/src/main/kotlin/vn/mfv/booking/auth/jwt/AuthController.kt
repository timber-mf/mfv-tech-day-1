package vn.mfv.booking

import vn.mfv.booking.auth.LoginRequest
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import jwt.JwtUtil
import vn.mfv.booking.repository.UserRepository

@RestController
@RequestMapping("/auth")
class AuthController(
    private val userRepository: UserRepository,
) {

    @PostMapping("/login")
    fun login(@RequestBody loginRequest: LoginRequest, request: HttpServletRequest, response: HttpServletResponse): String {
       val user = userRepository.getUserByEmail(loginRequest.username)
        if (user == null) {
            throw Exception("User Not Found")
        } else {
            if (!user.password.equals(loginRequest.password)) {
                throw Exception("Wrong password")
            }
        }
        val token = JwtUtil().generateToken(user)
        return token
    }
}