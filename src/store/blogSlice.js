import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: "1",
      title: "The Art of Time Management: Tips for Boosting Productivity",
      category: "Productivity",
      description: " we explore effective time management strategies that can help you maximize your productivity and achieve your goals. Learn how to prioritize tasks, eliminate distractions, and make the most of your valuable time. ",
    },
    {
      id: "2",
      title: "The Health Benefits of Mindfulness Meditation",
      category: "Health and Wellness",
      description: " Discover the incredible health benefits of mindfulness meditation in this post. From stress reduction to improved mental clarity, we delve into the science-backed advantages of incorporating mindfulness into your daily routine.",
    },
    {
      id: "3",
      title: "Exploring the Wonders of Nature: National Parks to Visit",
      category: "Travel and Adventure",
      description: " Embark on a virtual journey through some of the world's most breathtaking national parks. From the majestic Grand Canyon to the lush beauty of Costa Rica's rainforests, this blog post takes you on an adventure-filled tour of natural wonders waiting to be explored",
    },
  ],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      console.log(state.blogs);
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === (id));
      console.log("===========blogIndex=========");
      console.log(blogIndex);
      state.blogs[blogIndex].title = title;
      state.blogs[blogIndex].category = category;
      state.blogs[blogIndex].description = description;
      console.log("===========blogTitle=========");
      console.log(state.blogs[blogIndex].title);
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    toggleLike: (state, action) => {
      const id = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[blogIndex].isLiked = !state.blogs[blogIndex].isLiked;
    },
  },
});

export const selectBlogById = (state, blogID) => {
  // console.log("=======Blog ID :=========");
  // console.log(blogID);
  // console.log("===========Blogs Content=========");
  // console.log(state.blogs.blogs);
  // console.log("===========blogID typeof=========");
  // console.log(typeof Number(blogID));
  // const number = blogID;
  // console.log("=========TypeOf blog.title =============");
  // console.log(typeof String(state.blogs.blogs.title));
  // const test = state.blogs.blogs.find((blog) => blog.id === number);
  //console.log(test);
  return state.blogs.blogs.find((blog) => blog.id === (blogID));
};

export const { addBlog, updateBlog, deleteBlog, toggleLike } =
  blogSlice.actions;
export default blogSlice.reducer;
