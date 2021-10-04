import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import {dummyPostList} from '../../Data' 
import axios from 'axios';

const PostList = props => {
const [dataList, setDataList] = useState([]);

useEffect(() => {
  const response = axios.get(
    'http://localhost:8000/realestate/list'
  ).then(res => {
    console.log(res)
    if (res.data && res.data.length > 0) {
      setDataList(res.data);
    } else {
      setDataList(dummyPostList);
    }
  }).catch(err => {
    alert(err);
    setDataList(dummyPostList);
  });
 
}, [])

  return (
    <>
      <CommonTable headersName={['번호', '지역', '주소', '매매가', '생성일',  '수정일']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn> {item.id} </CommonTableColumn>
                <CommonTableColumn> {item.area} </CommonTableColumn>
                <CommonTableColumn> 
                  <Link to={`/postView/${item.id}`}>{item.address}</Link>
                </CommonTableColumn>
                <CommonTableColumn> {item.salePrice} </CommonTableColumn>
                <CommonTableColumn> {item.regDate} </CommonTableColumn>
                <CommonTableColumn> {item.modDate} </CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }  
      </CommonTable>
    </>
  )
}
 
export default PostList;