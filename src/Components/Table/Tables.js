import React from 'react';
import { Table } from 'semantic-ui-react';
import { Rows } from './Rows';


const Tables = ({ table, delProduct }) => {
  //console.log(table)
  return (
    <div>
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {table.map((el) => <Rows delProduct={delProduct} el={el} key={el.id} />)}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Tables;