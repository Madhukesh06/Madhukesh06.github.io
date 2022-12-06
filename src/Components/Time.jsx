import React from 'react'
import TypeWriter from "typewriter-effect"
export default function Time() {
    return (
        <TypeWriter
            options={{
                strings: ["I'm a Full Stack Developer ❤!", "I Make Robot Talk With My Code !"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    )
}
