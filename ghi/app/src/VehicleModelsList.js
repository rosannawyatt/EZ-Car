import React from 'react';

function VehicleModelsList(props) {
    // const [hasDeleted, setHasDeleted] = useState([false]);
let tableClasses = 'table table-striped table-hover';

return (
    <>
    <table className={tableClasses}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        {props.vehicleModels.map(vehicleModel => {
          return (
            <tr key={vehicleModel.id}>
              <td>{ vehicleModel.name }</td>
              <td>{ vehicleModel.manufacturer.name }</td>
              <td><img src={ vehicleModel.picture_url } className="thumbnail" width="12%"/></td>
            </tr>
          );
        })}
      </tbody>
    </table>
</>

);
}
export default VehicleModelsList;
