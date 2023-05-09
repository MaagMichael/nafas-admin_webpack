export function Detail( {detailInfo} ) {
    

    return (
        <div className="detail">

                <div className="detail_title_picture">
                  <p>
                    Gericht: (ID {detailInfo.id}) {detailInfo.name} (
                    {detailInfo.category})
                  </p>
                  <img src={detailInfo.URL} className="detail_image" alt="dish" />
                </div>

                <div className="detail_description">
                  <p>
                    Enthalten in Paket:
                    <ul>
                      {detailInfo.package &&
                        detailInfo.package.map((detail) => {
                          return <li>{detail}</li>;
                        })}
                    </ul>
                  </p>
                  <p>
                    Die Zutaten sind:
                    <ul>
                      {detailInfo.ingredients &&
                        detailInfo.ingredients.map((detail) => {
                          return <li>{detail}</li>;
                        })}
                    </ul>
                  </p>
                </div>

              </div>
    )
}