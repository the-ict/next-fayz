import React from 'react'

type Props = {
    phone: string,
    desc: string,
    name?: string,
    last_name?: string,
}

export default function EmailTemplate({ phone, desc, name, last_name }: Props) {
    return (
        <div>
            <div>
                <b>Telefon raqami: <span>{phone}</span></b>
            </div>
            <div>
                <b>Savol : <span>{desc}</span></b>
            </div>

            {
                (name && last_name) && (
                    <>
                        <div>
                            <b>Ismi: <span>{name}</span></b>
                        </div>
                        <div>
                            <b>Familiyasi: <span>{last_name}</span></b>
                        </div>
                    </>
                )
            }
        </div>
    )
}