import { IoIosMore } from "react-icons/io";
import { UsePagination } from "./AnnouncementPaginationFunction";
import { useEffect, useMemo, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashCan } from "react-icons/fa6";


import {
  createTheme,
  PaginationItem,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import axios from "axios";

const AnnouncementPage = () => {
  const [initialRowLength, setInitialRowLength] = useState(5);
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  

  const { palette } = createTheme();
  const theme = createTheme({
    palette: {
      primaryBlue: palette.augmentColor({ color: { main: "#176B87" } }),
    },
  });


  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    setStartPageIndex,
    setEndPageIndex,
  ] = UsePagination(initialRowLength, data.length);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://blogappbackend-vhkj.onrender.com/users"
      );
      setData(response.data);
    } catch (error) {
      setFetchError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const announcementData = useMemo(
    () =>
      data.slice(
        startPageIndex * endPageIndex,
        startPageIndex * endPageIndex + endPageIndex
      ),

    [startPageIndex, data, endPageIndex, initialRowLength]
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setEndPageIndex(initialRowLength);
  }, [initialRowLength]);

  const handleChange = (e) => {
    setInitialRowLength(Number(e.target.value));
  };

  //Edit functionalities

  const [editAnnouncementTitle, setEditAnnouncementTitle] = useState("");
  const [editAnnouncementBody,setEditAnnouncementBody] = useState("");
  const [targetId, setTargetId] = useState("");
  const [showEditDelete, setEditDelete] = useState("")

  let handleEditAnnouncement = (getSelected) => {
    setTargetId(getSelected === targetId ? "" : getSelected);
  };

const showEditDeleteButton = (getSelected)=>{
  setEditDelete(getSelected === showEditDelete ? "" : getSelected) 
  
}
  
  const post = data.find((post) => post._id.toString() === targetId);

  useEffect(() => {
    if (post) {
      setEditAnnouncementBody(post.body);
      setEditAnnouncementTitle(post.title);
    }
  }, [post, setEditAnnouncementBody, setEditAnnouncementTitle]);

  const handleEdit = async (_id,getSelected) => {
    const edit = {
      _id: (data.length + 1).toString(),
      title: editAnnouncementTitle,
      body: editAnnouncementBody,
    };

    if (editAnnouncementBody === "" || editAnnouncementTitle === "") {
      alert("fields cant be blank");
    } else {
      try {
        const response = await axios.put(
          `https://blogappbackend-vhkj.onrender.com/users/${_id}`,
          edit
        );

        setEditAnnouncementBody("");
        setEditAnnouncementTitle("");
        setTargetId(getSelected !== targetId ? getSelected : "")
        setEditDelete(getSelected !== showEditDelete ? getSelected : "")
        setData(
          data.map((post) => (post._id === _id ? { ...response.data } : post))
        );
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }
  };

  // Delete Announcement Functionality

  const handleDelete = async (_id) => {
    await axios.delete(`https://blogappbackend-vhkj.onrender.com/users/${_id}`);
    try {
      let deleteAnnouncement = data.filter((post) => post._id !== _id);
      setData(deleteAnnouncement);
      
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };



  return (
    <>
      {isLoading && (
        <div className="w-full h-[70dvh] flex flex-col place-items-center justify-center">
          <div className="loading"></div>
        </div>
      )}

      {!isLoading && fetchError && (
        <div className="w-full h-[70dvh] flex flex-col place-items-center justify-center">
          <div className="text-red-600">{fetchError}</div>
        </div>
      )}

      <>
        {!isLoading && !fetchError && announcementData.length ? (
          announcementData.map(({ title, body, created, _id }) => {
            return (
              <div
                key={_id}
                className="flex flex-col gap-[20px] place-items-center mt-[30px]"
              >
                <div className=" w-[100%] pl-[20px] pr-[40px] h-[126px] border-l-[6px] justify-between place-items-center border-l-[#176B87] rounded-md flex border-[1.17px] bg-white border-[#ECEEF6]">
                  {
                    targetId !== _id ?
                    <>
                      <div>
                    <div className="font-[600] text-[16.66px] leading-[24.99px]">
                      {title}
                    </div>
                    <div className="font-[400] text-[16px] leading-[24px]">
                      {body.length > 70 ? (
                        <div>{body.slice(0, 71)}...</div>
                      ) : (
                        <div>{body}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between place-items-center w-[310px] h-[53.95px]">
                    <div>
                      <div className="font-[400] text-[16px] leading-[24.99px] text-black opacity-70">
                        Posted
                      </div>
                      <div className="font-[400] text-[16px] leading-[24px] text-black opacity-70 flex gap-[10px]">
                        {created.slice(0, 10)}{" "}
                        <span>
                          {created.slice(11, 20)}{" "}
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                    <div onClick={()=> showEditDeleteButton(_id)}  className="w-[40px] h-[40px] bg-[#D9D9D9] grid place-items-center rounded-lg text-[#464646] cursor-pointer">
                      {" "}
                      <IoIosMore size={20} />{" "}
                     
                    </div>
                    {
                      showEditDelete === _id ?
                      <div className="absolute flex justify-center font-[600] gap-[20px] w-[100px] border-2 left-[-20px] top-[70px] py-2 bg-white cursor-pointer">
                        <span onClick={()=> handleEditAnnouncement(_id)}><AiFillEdit className="text-[#176B87]" size={30}/></span>
                        <span onClick={()=>handleDelete(_id)}><FaTrashCan className="text-[red]" size={30}/></span>
                      </div>
                      : ""
                    }
                    </div>
                    
                  </div>
                    </>
                     : 

                     <>
                        <div className="border-2 w-full flex flex-col gap-2">
                    <div className="font-[600] text-[16.66px] leading-[24.99px] w-full">
                    <input className="w-full h-8 border-2 rounded-[5px] focus:outline-none" placeholder="Announcement Title" type="text" value={editAnnouncementTitle} onChange={(e)=> setEditAnnouncementTitle(e.target.value)} />
                    </div>
                    <div className="font-[400] text-[16px] leading-[24px] w-full">
                      <input className="w-full h-8 border-2 rounded-[5px] focus:outline-none" placeholder="Announcement Body" type="text" value={editAnnouncementBody} onChange={(e)=> setEditAnnouncementBody(e.target.value)} />
                    </div>
                  </div>
                  <div className="flex justify-between place-items-center w-[310px] h-[53.95px]">
                    <div>
                      <div className="font-[400] text-[16px] leading-[24.99px] text-black opacity-70">
                        Posted
                      </div>
                      <div className="font-[400] text-[16px] leading-[24px] text-black opacity-70 flex gap-[10px]">
                        {created.slice(0, 10)}{" "}
                        <span>
                          {created.slice(11, 20)}{" "}
                        </span>
                      </div>
                    </div>
                    <div onClick={()=> handleEdit(_id)} className="w-[40px] h-[40px] bg-[#D9D9D9] grid place-items-center rounded-lg text-[#464646] cursor-pointer">
                      {" "}
                      Save{" "}
                    </div>
                  </div>
                     </>
                  }
                </div>
              </div>
            );
          })
        ) : !isLoading && !fetchError && !announcementData.length ? (
          <p className=" text-center">No Announcement to display</p>
        ) : (
          ""
        )}
      </>

      <div className=" w-full flex justify-between mt-[25px]">
        <div className="flex gap-[8.92px] h-[22.19px] place-items-center">
          <div className="text-[14.28px] font-[400] leading-[21.42px] text-black">
            View
          </div>
          <select
            className=" focus:outline-none bg-[#F6F7FA] border-[#ECEEF6] border-[1.78px] rounded-lg px-1 py-1 text-[14.28px] font-[400] leading-[21.42px] text-black"
            onChange={handleChange}
            name=""
            id=""
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <div className="text-[14.28px] font-[400] leading-[21.42px] text-black">
            per page
          </div>
        </div>
        <ThemeProvider theme={theme}>
          <Pagination
            color="primaryBlue"
            count={totalPages}
            onChange={(event, value) => setStartPageIndex(value - 1)}
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: () => <Typography variant="label">Prev</Typography>,
                  next: () => <Typography variant="label">Next</Typography>,
                }}
                {...item}
              />
            )}
            defaultPage={1}
            siblingCount={0}
            boundaryCount={1}
          />
        </ThemeProvider>
      </div>
    </>
  );
};

export default AnnouncementPage;
