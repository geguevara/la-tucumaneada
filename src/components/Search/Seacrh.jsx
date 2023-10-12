import React from 'react'
import { FormProducts, IconSearch, SearchBarProducts, SearchBtn } from './SearchStyles'
import {AiOutlineSearch} from 'react-icons/ai'
const Seacrh = ({handleInputChange}) => {
  return (
    <FormProducts>
        <SearchBarProducts
        /*   onChange={(e)=> setValue(e.target.value)}
          value={value} */
          onChange={handleInputChange}
          type='text'
          placeholder='Buscar'
        />
        <SearchBtn
        >
          <IconSearch>
            <AiOutlineSearch />
          </IconSearch>
        </SearchBtn>
      </FormProducts>
  )
}

export default Seacrh