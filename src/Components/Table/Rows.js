import React from 'react';
import { Header, Image, Table } from 'semantic-ui-react';


export const Rows = ({el , delProduct}) => {
  return (
    <>

<Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={el.thumbnail} rounded size='mini' />
            <Header.Content>
              {el.title}
              <Header.Subheader>{el.id}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{el.price}</Table.Cell>
      </Table.Row>

      <button  onClick={()=>delProduct(el.id)}  >x</button>
        



    </>
  )
}
