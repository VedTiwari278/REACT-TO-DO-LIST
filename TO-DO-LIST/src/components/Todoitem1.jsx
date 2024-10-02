function Todoitem1(){
let todoname="Buy Milk";
let todoDate="4/10/2023";

return <div class="container Kg-row">
    <div class="row">
    <div class="col-6">{todoname}</div>
    <div class="col-4">{todoDate}</div>
    <div class="col-2"><button class="btn btn-danger Kg-btn"> Delete 
      </button></div>
    </div>
</div>
}
export default Todoitem1;