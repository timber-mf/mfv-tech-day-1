package jwt

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import vn.mfv.booking.entity.User
import java.util.Date

class JwtUtil {

    fun generateToken(user: User): String {
        val now = Date()
        val expiryDate = Date(now.time + 3600000) // 1 hour

        return Jwts.builder()
            .setSubject(user.name)
            .claim("name", user.name)
            .claim("userId", user.id)
            .claim("email", user.email)
            .claim("department", user.department)
            .setIssuedAt(now)
            .setExpiration(expiryDate)
            .signWith(SignatureAlgorithm.HS512, "U2FsdGVkX1+Pb8V0K6Hj9dGJ0PO1aE8SPlC6s+5sRCE=")
            .compact()
    }
}