package org.example.demo

import org.springframework.data.jpa.repository.JpaRepository

interface EntityRepository : JpaRepository<Entity, Long>