import React from 'react'
import TypeWriter from "typewriter-effect"
export default function Time() {
    return (
        <TypeWriter
            options={{
                strings: ["I'm a Full Stack Developer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    )
}
