package vn.mfv.booking.auth

data class LoginRequest(
    val username: String,
    val password: String
)