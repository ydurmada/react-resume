

interface ContactInfo {
    name: string
    title: string
    linkedin: string
}

export default function ContactHeader(contactInfo: ContactInfo) {
    return (
        <div id="contactInfoContainer" className="contentContainer">
            <div id="contactName">{contactInfo.name}</div>
            <div id="contactTitle">{contactInfo.title}</div>
            <div id="contactLinkedIn" dangerouslySetInnerHTML={{__html: contactInfo.linkedin}} />
        </div>
    )
}