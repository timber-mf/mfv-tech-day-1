package vn.mfv.booking.model

import vn.mfv.booking.entity.SeatStatus

data class SeatDTO(
    val id: Long,
    val name: String,
    val qrCode: String,
    val status: SeatStatus
)
