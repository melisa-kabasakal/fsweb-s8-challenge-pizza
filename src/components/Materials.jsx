import "../css/Materials.css"

function Materials({ handleSelectMaterials }) {
    const materialList = [
        {name: "Papperoni"},
        {name: "Sosis"},
        {name: "Kanada Jambonu"},
        {name: "Tavuk Izgara"},
        {name: "Soğan"},
        {name: "Domates"},
        {name: "Mısır"},
        {name: "Sucuk"},
        {name: "Jalepeno"},
        {name: "Sarımsak"},
        {name: "Biber"},
        {name: "Ananas"},
        {name: "Kabak"},
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
              <input type="checkbox" id={material.name} value={material.name} onChange={handleSelectMaterials} data-cy={`checkbox-${material.name}`}/>
              <label htmlFor={material.name}>{material.name}</label>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Materials