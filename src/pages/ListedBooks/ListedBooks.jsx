import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getDataFormDB } from "../../Utility/addToDB";

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([])
    const [sort,setSort] = useState('')

    useEffect(() => {
        const readListData = getDataFormDB();
        const convertedListData =readListData.map(id => parseInt(id))
        const myReadList = allBooks.filter(book => convertedListData.includes(book.bookId))
        setReadList(myReadList)
        
    }, [])

    const handleSort = (sortType) => {
      setSort(sortType)

      if (sortType === 'page') {
        const sortedBooks = [...readList].sort((a, b) => a.pages - b.pages);
        setReadList(sortedBooks);
      }else if(sortType === 'rating'){
        const sortedBooks = [...readList].sort((a, b) => b.rating - a.rating);
        setReadList(sortedBooks);
      }

    }
   

  return (
    <main className="main py-24">
              <div className="container max-w-[1210px] mx-auto px-5">
              <details className="dropdown my-5 mx-auto">
  <summary className="btn m-1">Sort by: {sort? sort: ''}</summary>
  <ul className="menu dropdown-content bg-gray-300 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={handleSort('page')}><a>pages</a></li>
    <li onClick={handleSort('rating')}><a>rating</a></li>
  </ul>
</details>

      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>ReadList</h2>
          {
            readList.map(book => ( <div className='border border-gray-200 p-6 rounded-2xl flex gap-6 mb-5'>
                <div className="card-img-box mb-6 rounded-2xl bg-gray-100 p-6 text-center ">
                    <img className='h-[196px] w-[140px] mx-auto' src={book.image} alt="" />
                </div>
                <div className="card-content">
                 
                    <h2 className="text-2xl font-bold mb-4 flex justify-between gap-3 items-start">{book.bookName} <span className='inline-block text-xs bg-[#be0a971f] rounded-3xl text-gray-600 py-1 px-3' > {book.yearOfPublishing}</span></h2>
                    <p className='text-base font-medium text-gray-600 mb-5'>By : <span>{book.author}</span></p>
                </div>
                <div className="card-footer border-t border-gray-200 border-dashed pt-5 flex justify-between text-gray-700">
                    <span>{book.category}</span>
                    <div className="buttons flex gap-2 items-center">
                        <span className='text-base'> {book.rating}</span>
                        <span className='text-2xl'>★</span>
                    </div>
                </div>
                
            </div>))
          }
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
      </div>
    </main>
  );
};

export default ListedBooks;
