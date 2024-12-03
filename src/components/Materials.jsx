import "../css/Materials.css"

function Materials({ handleSelectMaterials }) {
    const materialList = [
        {name: "Papperoni", price:5},
        {name: "Sosis", price:5},
        {name: "Kanada Jambonu", price:5},
        {name: "Tavuk Izgara", price:5},
        {name: "Soğan", price:5},
        {name: "Domates", price:5},
        {name: "Mısır", price:5},
        {name: "Sucuk", price:5},
        {name: "Jalepeno", price:5},
        {name: "Sarımsak", price:5},
        {name: "Biber", price:5},
        {name: "Ananas", price:5},
        {name: "Kabak", price:5},
    ];
    
  return (
    <div>
      <label className="materials">Ek Malzemeler</label>
      <div>
      <label>En fazla 10 malzeme seçebilirsiniz. 5₺</label>
      </div>
      <div className="check">
         {materialList.map((material, index) => (
            <div key={index} className="material-item">
              <input type="checkbox" id={material.name} value={material.name} onChange={handleSelectMaterials}/>
              <label htmlFor={material.name}>{material.name}</label>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Materials