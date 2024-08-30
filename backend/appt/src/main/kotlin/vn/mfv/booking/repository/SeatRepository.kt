package org.example.vn.mfv.booking.repository


import org.springframework.data.jpa.repository.JpaRepository
import vn.mfv.booking.entity.Seat

interface SeatRepository : JpaRepository<Seat, Long>