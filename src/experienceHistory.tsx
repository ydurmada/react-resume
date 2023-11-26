interface ExperienceHistory {
    'employer': string
    'time period': string
    'title': string
    'experience and accomplishments': unknown
}

type ExpHistoryArr = {items: ExperienceHistory[]}

export default function ExperienceHistory({items}: ExpHistoryArr) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const RecursiveComponent = ({ data }) => {
        return (
          <div style={{ paddingLeft: "20px"}}>
            
            {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            data.map((parent) => {
              return (
                <div key={parent.value} className="exp-list">
                  <span>{parent.value}</span>
                  {/* Base Condition and Rendering recursive component from inside itself */}
                  <div>
                    {parent.children && <RecursiveComponent data={parent.children} />}
                  </div>
                </div>
              );
            })}
          </div>
        );
      };

    return (
        <div id="experienceHistoryContainer" className="contentContainer">
            <h2>Experience History</h2>
                {items.map(value => 
                    <div id="employerContainer">
                        <div id="employer">{`💼 ${value.employer}  |  📅 ${value['time period']}`}</div>
                        {/* call recursive func to build nested <ul> from value['experience and accomplishments'] */}
                        <div>
                            <RecursiveComponent data={value['experience and accomplishments']} />
                        </div>
                    </div>
                )}
        </div>
    )
}