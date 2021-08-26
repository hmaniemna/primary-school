import React from "react";


const ClassMangement = ()=>{
  return (
    <table class="ui compact celled definition table">
  <thead>
    <tr>
      <th></th>
      <th>مستوى القسم</th>
      <th>إسم القسم</th>
      <th>عدد التلاميذ</th>
    </tr>
  </thead>
  <tbody>
  

  </tbody>
  <tfoot class="full-width">
    <tr>
      <th></th>
      <th colspan="4">
        <div class="ui right floated small primary labeled icon button">
          <i class="user icon"></i> Add User
        </div>
        <div class="ui small button">
          Approve
        </div>
        <div class="ui small  disabled button">
          Approve All
        </div>
      </th>
    </tr>
  </tfoot>
</table>

  )

}
export default ClassMangement;