type ArrayOfStrings = {
    items: string[]
}

export default function Portfolio({ items }: ArrayOfStrings) {
    return (
        <div id="portfolioItemsContainer" className="contentContainer">
            <h2>Portfolio Items</h2>
            <ul id="portfolioItems">
                {items.map(value => 
                    <li dangerouslySetInnerHTML={{
                        __html: value
                    }} />
                )}
            </ul>
        </div>
    )
}