import React, {useEffect, useState} from 'react';
import {dummyPostList} from '../../Data' 
import './Post.css'
import axios from 'axios';

const PostView = ({history, location, match}) => {
  const [data, setData] = useState({});
  const {id} = match.params;
  // useEffect(() => {
  //   console.log(dataList);
  //   // const array = dataList.filter(x => x.id == id);
  //   // if (array.length == 1) {
  //   //   console.log(array);
  //   //   return array[0];
  //   //   setData(array[0]);
  //   // }
      
  //   // setData(getPostById(id))
  // }, []);

  useEffect(() => {
    const response = axios.get(
      `http://localhost:8000/realestate/detail?id=${id}`
    ).then(res => {
      console.log(res)
      if (res.data && res.data.id == id) {
        setData(res.data);
      } else {
        setData(dummyPostList[0]);
      }
    }).catch(err => {
      alert(err);
      setData(dummyPostList[0]);
    });
  
  }, [])
	 
  return (
    <>
      <h2 align="center">게시글 상세정보</h2>
 
      <div className="post-view-wrapper">
        {
          data ? (
            <>
              <div className="post-view-row">
                <label>번호</label>
                <label>{ data.id }</label>
              </div>
              <div className="post-view-row">
                <label>지역</label>
                <label>{ data.area }</label>
              </div>
              <div className="post-view-row">
                <label>주소</label>
                <label>{ data.address }</label>
              </div>
              <div className="post-view-row">
                <label>매매가</label>
                <label>{ data.salePrice }</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <div>{ data.regDate }</div>
              </div>
              <div className="post-view-row">
                <label>수정일</label>
                <label>{ data.modDate }</label>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
      </div>
    </>
  )
}
 
export default PostView;