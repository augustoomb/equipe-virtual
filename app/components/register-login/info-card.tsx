import { ItemInfoCard } from "./item-info-card"

export function InfoCard() {

    const cards:{ title: string, text: string }[] = [
        { "title": "Alert Dialog1", "text": "A modal dialog that interrupts the user with important content and" },
        { "title": "Alert Dialog2", "text": "A modal dialog that interrupts the user with important content and" },
        { "title": "Alert Dialog3", "text": "A modal dialog that interrupts the user with important content and" },
        { "title": "Alert Dialog4", "text": "A modal dialog that interrupts the user with important content and" },
        { "title": "Alert Dialog5", "text": "A modal dialog that interrupts the user with important content and" },
        { "title": "Alert Dialog6", "text": "A modal dialog that interrupts the user with important content and" },
    ]

    return (
        <article className=" w-4/5 flex p-8 rounded-lg bg-white shadow-md shadow-white">
            <div className="grid grid-cols-2 gap-10 mt-8 mb-8 ml-8">
                {
                    cards.map((card) => {
                        return (
                            <ItemInfoCard key={ card.title } title={ card.title } text={ card.text } />  
                        )
                    })
                }
            </div>
        </article>
    )
}

