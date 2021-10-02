let postList = [
  
];

const dummyPostList = [
    {
      address: "서울시 강서구 가양동 1번지",
area: 1,
id: 1,
modDate: "2021-10-02T20:45:26",
regDate: "2021-10-02T20:45:26",
salePrice: 1000
    },

  ];
   
  const getPostByNo = no => {
    const array = postList.filter(x => x.no == no);
    if (array.length == 1) {
      return array[0];
    }
    return null;
  }
   
  export {
    postList,
    dummyPostList,
    getPostByNo
  };