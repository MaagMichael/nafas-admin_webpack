// import React from 'react'


export function DetailAdd({ Dishes, addFlag, setAddFlag, add_mode }) {

  // or as props into function DetailAdd
  const new_id = Dishes[Dishes.length - 1].id + 1;

  
  return (
    <>
      {addFlag ? (
        <div>
          <button onClick={() => setAddFlag(!addFlag)}>go back</button>
          <p>New dataset id will be {new_id}</p>

          <form action="">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              // value={detailInfo.name}
            />
            <br />
            <label htmlFor="category">Category: </label>
            <input
              type="text"
              name="category"
              // value={detailInfo.category}
              readOnly={true}
            />
            <br />
            <label htmlFor="package">Package: </label>
            <input
              type="text"
              name="package"
              // value={detailInfo.package}
              readOnly={true}
            />
            <br />
            <label htmlFor="ingredients">Ingredients: </label>
            <input
              type="text"
              name="ingredients"
              // value={detailInfo.ingredients}
              readOnly={true}
            />
            <br />

            <button type="submit">Add new dataset</button>
          </form>
        </div>
      ) : null}
    </>
  );
}


