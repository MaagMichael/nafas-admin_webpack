export function Detail({
  detailInfo,
  edit_mode,
  delete_mode,
  add_mode,
  buttonText,
}) {
  return (
    <div className="detail_area">
      {/* only render, when a card was selected */}
      {detailInfo.name ? (
        <>
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

          <hr />

          <div className="buttons">
            <button onClick={() => edit_mode(detailInfo.id)}>
              {buttonText}
            </button>
            <button onClick={() => delete_mode(detailInfo.id)}>
              Del Dataset
            </button>
            <button onClick={() => add_mode()}>Add new Dataset</button>
          </div>
          <hr />

          <form action="">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={detailInfo.name} readonly/>
            <br />
            <label htmlFor="category">Category: </label>
            <input type="text" name="category" value={detailInfo.category} readonly/>
            <br />
            <label htmlFor="package">Package: </label>
            <input type="text" name="package" value={detailInfo.package} readonly/>
            <br />
            <label htmlFor="ingredients">Package: </label>
            <input type="text" name="ingredients" value={detailInfo.ingredients} readonly/>
            <br />


          </form>


        </>
      ) : null}
    </div>
  );
}
