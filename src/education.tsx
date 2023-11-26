interface EducationInfo {
    organization: string
    dates: string
    training: string
}

type EducationArr = {
    items: EducationInfo[]
}

export default function Education({items}: EducationArr) {
    return (
        <div id="educationContainer" className="contentContainer">
            <h2>Education</h2>
            <ul>
                {items.map(item => (
                    <>
                        <li>
                            <span id="eduOrg">🏫 {item.organization}</span><br />
                            <span id="eduTimePeriod">📅 {item.dates}</span>
                        </li>
                        <ul>
                            <li dangerouslySetInnerHTML={{
                                __html: item.training
                            }} />
                        </ul>
                    </>
                ))}
            </ul>
        </div>
    )
}