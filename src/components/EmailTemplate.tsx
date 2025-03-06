import React from 'react'

type Props = {
    phone: string,
    desc: string
}

export default function EmailTemplate({ phone, desc }: Props) {
    return (
        <div>
            <div>
                <b>Telefon raqami: <span>{phone}</span></b>
            </div>
            <div>
                <b>Savol : <span>{desc}</span></b>
            </div>
        </div>
    )
}