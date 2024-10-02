function Todoitem2(){

  let todoname="Goto college";
let todoDate="4/10/2023";
  return <div class="container">
      <div class="row Kg-row">
      <div class="col-6">{todoname}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2"><button class="btn btn-danger Kg-btn"> Delete 
        </button></div>
      </div>
  </div>
  }
  export default Todoitem2;