type ArrayOfStrings = {
    qualifications: string[]
}

export default function HighlightsOf({ qualifications }: ArrayOfStrings) {
    return (
        <div id="highlightsOfQualContainer" className="contentContainer">
            <h2>Highlights of Qualifications</h2>
            <ul id="highlightsOfQual">
                {qualifications.map(value => 
                    <li>{value}</li>
                )}
            </ul>
        </div>
    )
}