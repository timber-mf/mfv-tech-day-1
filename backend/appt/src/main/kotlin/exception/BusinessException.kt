package org.example.exception

class BusinessException(val code: String, message: String) : RuntimeException(message) {
    constructor(code: String, message: String, cause: Throwable) : this(code, message) {
        initCause(cause)
    }
}
